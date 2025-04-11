import { Queue } from 'bullmq';
import redis from '@/config/redis';
import "./workers"

const UserActivationQueue = new Queue('UserActivationQueue', { connection: redis });

export default { UserActivationQueue };
