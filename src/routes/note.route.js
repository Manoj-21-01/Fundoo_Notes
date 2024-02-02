import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { noteAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new note
router.post('', newNoteValidator, noteController.newNote);
// login function
router.post('/:_id',noteController.getNote);

router.get('',noteController.getAllNotes);

router.get('/:_id',noteController.getNote);
// router.post('', noteController.loginNote);

//route to delete a note
router.delete('/delete/:_id', noteController.deleteNote);

//route to update a note
router.put('/:_id', noteController.updateNote);

export default router;