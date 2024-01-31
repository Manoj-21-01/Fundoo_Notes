import Note from '../models/note.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

// create new note
export const newNote = async (body) => {
    const data = await Note.create(body);
    return data;
  };

// getNote
export const getNote = async (body) => {
  // Finding the note with the given email
  const data = await Note.findOne({ id: body.id  });
  return data;
};

//get all notes
export const getAllNotes = async () => {
  const data = await Note.find();
  return data;
};

//delete note
export const deleteNoteById = async (noteId) => {
    await Note.findByIdAndDelete(noteId);
    return null;
  };

  //update note
  export const updateNote = async (noteId, body) => {
    const data = await Note.findByIdAndUpdate(
      noteId,
      body,
      {
        new: true
      }
    );
    return data;
  };