import * as crypto from 'node:crypto';
import mqtt from 'mqtt';
import config from '@/config/config';

const clientMqtt = mqtt.connect(config.mqtt, {
  clientId: crypto.randomUUID()
});


export const publishMessage = (topic: string, message: any) => {
  clientMqtt.publish(topic, message);
};

clientMqtt.on('message', (topic, message) => {
  console.log(`[Node] Message reçu : ${message.toString()}`);
});

export default { publishMessage}
