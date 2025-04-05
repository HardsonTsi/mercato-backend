import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  saltRound: number,
  passwordLength: number;
  jwt: {
    secret: string
    duration: string
  },
  redis: {
    host: string
    password: string
    port: number
  }
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  saltRound: Number(process.env.SALT_ROUND) || 10,
  passwordLength: Number(process.env.PASSWORD_LENGTH) || 4,
  jwt: {
    secret: process.env.JWT_SECRET || 'SECRET',
    duration: process.env.JWT_DURATION || '10h',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    password: process.env.REDIS_PASSWORD || '',
    port: Number(process.env.REDIS_PORT) || 6379,
  },

};

export default config;
