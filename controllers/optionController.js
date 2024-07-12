import Option from '../models/Option.js';

export const addVote = async (req, res) => {
    try {
        const option = await Option.findById(req.params.id);
        if (!option) {
            return res.status(404).json({ error: 'Option not found' });
        }
        option.votes += 1;
        await option.save();
        res.status(200).json(option);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteOption = async (req, res) => {
    try {
        const option = await Option.findById(req.params.id);
        if (!option) {
            return res.status(404).json({ error: 'Option not found' });
        }
        if (option.votes > 0) {
            return res.status(400).json({ error: 'Cannot delete option with votes more than one' });
        }
        await Option.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Option deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
