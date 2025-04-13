import { Queue } from 'bullmq';
import redis from '@/config/redis';
import './workers';

const UserActivationQueue = new Queue('UserActivationQueue', { connection: redis });

const RepeatableQueue = new Queue('RepeatableQueue', { connection: redis });

export default { UserActivationQueue, RepeatableQueue };
