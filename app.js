import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import questionRoutes from './routes/questionRoutes.js';
import optionRoutes from './routes/optionRoutes.js';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/questions', questionRoutes);
app.use('/options', optionRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
