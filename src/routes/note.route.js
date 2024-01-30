import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { noteAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new note
router.post('', newNoteValidator, noteController.newNote);

//route to get a single note by their note id
router.post('/login', noteController.loginNote);

export default router;


