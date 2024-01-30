import Note from '../models/note.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
//get all notes

// export const getAllNotes = async () => {
//   const data = await Note.find();
//   return data;
// };

// create new note
export const newNote = async (body) => {
    const data = await Note.create(body);
    return data;
  };



// login
export const loginNote = async (body) => {
  // Finding the note with the given email
  const note = await Note.findOne({ title: body.title  });
  if (note) {

  // Comparing the entered password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(body.description, note.description);
  if (passwordMatch) {
    var token = jwt.sign({ emailid: 'naniguy1@gmail.com' }, 'shhhhh');
    return token;
  }
  else {throw new Error ('Invalid password')};
}
else {throw new Error ('Invalid emailid')};

};
