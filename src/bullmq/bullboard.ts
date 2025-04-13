import { ExpressAdapter } from '@bull-board/express';
import queues from '@/bullmq/queues';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';

const bullBoardAdapter = new ExpressAdapter();
bullBoardAdapter.setBasePath('/queues');

const response = createBullBoard({
  queues: [new BullMQAdapter(queues.UserActivationQueue)],
  serverAdapter: bullBoardAdapter,
});

export default bullBoardAdapter;
