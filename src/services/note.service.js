import Note from '../models/note.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

// create new note
export const newNote = async (body) => {
    const data = await Note.create(body);
    return data;
  };

// login
export const loginNote = async (body) => {
  // Finding the note with the given email
  const note = await Note.findOne({ title: body.title  });
  return note;
};

//delete note
export const deleteNoteById = async (noteId) => {
    await Note.findByIdAndDelete(noteId);
    return null;
  };