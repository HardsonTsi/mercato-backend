import app from '@/app';
import config from '@/config/config';
import redis from '@/config/redis';

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port} 🚀`);
  redis.ping()
    .then(() => console.log('Redis 🚀'))
    .catch((err) => console.log('Redis 🚫', err));
  // console.log('Config :', config);
});
