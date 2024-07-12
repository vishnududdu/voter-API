import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }]
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
