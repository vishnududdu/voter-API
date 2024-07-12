import express from 'express';
import { createQuestion, addOption, deleteQuestion, viewQuestion } from '../controllers/questionController.js';

const router = express.Router();

router.post('/create', createQuestion);
router.post('/:id/options/create', addOption);
router.delete('/:id/delete', deleteQuestion);
router.get('/:id', viewQuestion);

export default router;
