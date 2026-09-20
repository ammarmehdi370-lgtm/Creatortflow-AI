import { Worker } from 'bullmq';
import { getRedis } from '@/lib/redis';

const worker = new Worker('render', async (job) => {
  console.log(`Rendering job ${job.id}`, job.data);
  await job.updateProgress(100);
  return { status: 'ready' };
}, { connection: getRedis() });

worker.on('completed', (job) => console.log(`Render completed: ${job.id}`));
worker.on('failed', (job, error) => console.error(`Render failed: ${job?.id}`, error));
