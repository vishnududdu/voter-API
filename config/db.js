import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vishnududdu:Password123@cluster0.k1elkw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/polling-system');
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
