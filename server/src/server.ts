import { config } from 'dotenv';
import mongoose from 'mongoose';

config({ path: './config.env' });

import app from './index';

const DB = process.env.DATABASE_LOCAL || '';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB CONNECTIONS SUCCESSFULLY'));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server starting at PORT ${PORT}`)
);

export default server;
