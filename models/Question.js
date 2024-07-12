import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    options: [{
        type: Number,
        ref: 'Option'
    }]
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
