import mongoose from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';
import { redisConnection } from '@service/redis/redis.connection';

const log: Logger = config.createLogger('setupDatabase');

// Ananymous function so it can be imported with any name
export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        log.info('Connected to database');
        redisConnection.connect();
      })
      .catch((error) => {
        log.error('Database connection error', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
