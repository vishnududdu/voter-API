import Question from '../models/Question.js';
import Option from '../models/Option.js';

export const createQuestion = async (req, res) => {
    try {
        const { title } = req.body;
        const question = new Question({ title});
        await question.save();
        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addOption = async (req, res) => {
    try {
        const { text } = req.body;
        const question = await Question.findById(req.params.id);
        
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        const option = new Option({
            text:text,
            link_to_vote: `/options/${question._id}/add_vote`,
            question: question._id
        });
        // console.log(option);
        await option.save();
        question.options.push(option._id);
        await question.save();
        res.status(201).json(option);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).populate('options');
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        for (const option of question.options) {
            if (option.votes > 0) {
                return res.status(400).json({ error: 'Cannot delete question with votes' });
            }
        }
        await Question.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const viewQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).populate('options');
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
