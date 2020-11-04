import mongoose from 'mongoose';

import { mongo } from './keys';

const connectDB = async () => {
  await mongoose.connect(mongo.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  });
  console.log('Database connected');
} 

connectDB();