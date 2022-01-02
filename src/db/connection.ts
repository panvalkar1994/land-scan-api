import mongoose from 'mongoose';

export async function connect() {
    const dbUri = process.env.MONGODB_URI as string;
    try {
        await mongoose.connect(dbUri);
        console.log('db connected...')
    } catch (error) {
        console.log('db connection failed...')
        process.exit(1);
    }
}