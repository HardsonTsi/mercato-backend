import dotenv from 'dotenv';
import * as process from 'node:process';

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
  },
  speakeasy: {
    secret: string,
    duration: number,
    digits: number
  },
  mail: {
    host: string,
    user: string,
    pass: string
  }
  mqtt: string
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
  speakeasy: {
    secret: process.env.SPEAKASY_SECRET || 'SECRET',
    duration: Number(process.env.SPEAKASY_DURATION) * 60 || 5 * 60,
    digits: Number(process.env.SPEAKASY_DIGITS) || 6,
  },
  mail: {
    host: process.env.MAIL_HOST || 'smtp.gmail.com',
    user: process.env.MAIL_AUTH_USER || 'hardsontessi2@gmail.com',
    pass: process.env.MAIL_AUTH_PASSWORD || 'sxjebkrlttlptqvb',
  },
  mqtt: process.env.MQTT_URL || "mqtt://broker.hivemq.com:1883"

};

export default config;
