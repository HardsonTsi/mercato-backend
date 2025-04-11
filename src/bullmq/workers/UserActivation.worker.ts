import { Queue, Worker } from 'bullmq';
import redis from '@/config/redis';
import sendMail from '@/notifications/mail';
import TEMPLATES from '@/notifications/templates/TEMPLATES';
import Handlebars from 'handlebars';

export const UserActivationWorker = new Worker(
  'UserActivationQueue',
  async job => {

    const {data} = job
    const source = TEMPLATES.activeAccount
    const template = Handlebars.compile(source);

    data.logo = "https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png"

    const html = template(data);


    await sendMail({
      subject: "Confirmation de votre compte",
      to: data.email,
      html: html,
    }, data)
      .then(async _ => {
        await job.log("Response: " + _.response.toString())
        await job.updateProgress(100)
      })
      .catch(e => {
        job.log("Error: " + e.toString())
      })

  },
  { connection: redis },
);

