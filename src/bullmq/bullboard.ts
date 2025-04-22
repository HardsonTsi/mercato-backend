import { ExpressAdapter } from '@bull-board/express';
import queues from '@/bullmq/queues';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';

const bullBoardAdapter = new ExpressAdapter();
bullBoardAdapter.setBasePath('/queues');

const response = createBullBoard({
  queues: Object.values(queues).map((queue) => new BullMQAdapter(queue)),
  serverAdapter: bullBoardAdapter,
});

export default bullBoardAdapter;
