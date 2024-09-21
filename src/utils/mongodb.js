import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL; // Store your MongoDB URI in environment variables

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

/**
 * Global is used to maintain a cached connection to the database
 * in a Next.js hot-reloading environment.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo() {
  if (cached.conn) {
    console.log('Using existing MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log('Connecting to MongoDB...');
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('MongoDB connected successfully');
      return mongoose;
    }).catch(err => {
      console.error('MongoDB connection error:', err);
      throw err; // Rethrow the error to handle in case of failure
    });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (err) {
    console.error('Error while caching MongoDB connection:', err);
    throw err;
  }
  
  return cached.conn;
}

export default connectMongo;
