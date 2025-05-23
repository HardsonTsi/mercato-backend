import app from '@/app';
import config from '@/config/config';
import redis from '@/config/redis';
import Queues from '@/bullmq/queues';
import mqtt from 'mqtt';
const mqttClient = mqtt.connect(config.mqtt);


app.listen(config.port, async () => {
  console.log(`Server running on port ${config.port} 🚀`);
  redis.ping()
    .then(() => console.log('Redis 🚀'))
    .catch((err: any) => console.log('Redis 🚫', err));

  await Queues.AutomateQueue.removeJobScheduler('repeatable')
    .then(_ => ('Job existant supprimé ✔'))
    .catch(e => console.log('Job existant supprimé ❌', e));

  await Queues.RepeatableQueue.removeJobScheduler('repeatable')
    .then(_ => ('Job existant supprimé ✔'))
    .catch(e => console.log('Job existant supprimé ❌', e));


  await Queues.AutomateQueue.upsertJobScheduler('repeatable', {
    every: 30_000,
  })
    .then(_ => console.log('Job ajouté ✔'))
    .catch(e => console.log('Job ajouté ❌', e));

  await Queues.RepeatableQueue.upsertJobScheduler('repeatable', {
    every: 30_000,
  })
    .then(_ => console.log('Job ajouté ✔'))
    .catch(e => console.log('Job ajouté ❌', e));

  mqttClient.on('connect', () => {
    console.log('MQTT ✔');
  });

  mqttClient.on('error', console.log)




});
