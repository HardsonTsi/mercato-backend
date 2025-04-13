import { ExpressAdapter } from '@bull-board/express';
import Queues from './queues';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';

const bullBoardAdapter = new ExpressAdapter();
bullBoardAdapter.setBasePath('/queues');

createBullBoard({
  queues: Object.values(Queues).map(queue => new BullMQAdapter(queue)),
  serverAdapter: bullBoardAdapter,
});

export default bullBoardAdapter;
