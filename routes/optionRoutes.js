import express from 'express';
import { addVote, deleteOption } from '../controllers/optionController.js';

const router = express.Router();

router.post('/:id/add_vote', addVote);
router.delete('/:id/delete', deleteOption);

export default router;
