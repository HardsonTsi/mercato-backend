import { Worker } from 'bullmq';
import redis from '@/config/redis';
import TEMPLATES from '@/notifications/templates/TEMPLATES';
import Handlebars from 'handlebars';
import sendMail from '@/notifications/mail';

const RepeatableWorker = new Worker('RepeatableQueue', async job => {

  const { data } = job;
  const source = TEMPLATES.repeatable;
  const template = Handlebars.compile(source);

  const res = await fetch('https://trouverunlogement.lescrous.fr/api/fr/search/37', {
    'headers': {
      'accept': 'application/ld+json, application/json',
      'content-type': 'application/json',
      'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'Referer': 'https://trouverunlogement.lescrous.fr/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    'body': '{"idTool":37,"need_aggregation":true,"page":1,"pageSize":24,"sector":null,"occupationModes":[],"location":[{"lon":7.1819535,"lat":43.7607635},{"lon":7.323912,"lat":43.6454189}],"residence":null,"precision":6,"equipment":[],"adaptedPmr":false,"toolMechanism":"flow"}',
    'method': 'POST',
  });

  const json = await res.json();
  const residences: any[] = json.results.items;

  if (residences.length) {

    const html = template({
      number: residences.length,
      items: residences,
    });

    await sendMail({
      subject: residences.length ? 'Logements disponibles' : 'Logements indisponibles',
      to: 'hardsontessi2@gmail.com',
      html: residences.length ? html : 'Désolé',
    }, data)
      .then(async _ => {
        await job.updateData({
          status: _.response.toString()
        })

      })
      .catch(e => {
        job.log('Error: ' + e.toString());
      });
  }
  await job.updateProgress(100);

}, { connection: redis });
export default RepeatableWorker;
