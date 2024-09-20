import mongoose from 'mongoose';
 
const MONGODB_URI = process.env.MONGODB_URI; // Store your MongoDB URI in environment variables
 
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
    return cached.conn;
  }
 
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
 
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
 
export default connectMongo;
