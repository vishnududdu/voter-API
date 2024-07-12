import mongoose from 'mongoose';

const OptionSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    link_to_vote: {
        type: String,
        required: true
    },
    question: {
        type: Number,
        ref: 'Question'
    }
});

const Option = mongoose.model('Option', OptionSchema);

export default Option;
