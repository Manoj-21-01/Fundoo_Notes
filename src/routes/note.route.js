import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { noteAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new note
router.post('', newNoteValidator, noteController.newNote);

router.post('/login', noteController.loginNote);

//route to delete a note
router.delete('/note/:noteId', noteController.deleteNote);

export default router;