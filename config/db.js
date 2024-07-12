import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const dbName="polling-system"
        await mongoose.connect(`mongodb+srv://vishnududdu:Password123@cluster0.k1elkw3.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
    }
};

export default connectDB;
