import { ExpressAdapter } from '@bull-board/express';
import queues from '@/bullmq/queues';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';

const bullBoardAdapter = new ExpressAdapter();
bullBoardAdapter.setBasePath('/queues');

const response = createBullBoard({
  queues: [new BullAdapter(queues.UserActivationQueue)],
  serverAdapter: bullBoardAdapter,
});

export default bullBoardAdapter;
