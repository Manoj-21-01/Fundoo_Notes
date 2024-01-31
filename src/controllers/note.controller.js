import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

export const newNote = async (req, res, next) => {
  try {
    const data = await NoteService.newNote(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Note created successfully'
    });
  } catch (error) {
    next(error);
  }
};

// /**
//  * Controller to get a single user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
export const getNote = async (req, res, next) => {
  try {
    const data = await NoteService.getNote(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get all notes available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllNotes = async (req, res, next) => {
  try {
    const data = await NoteService.getAllNotes();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All Notes fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};
/**
 * Controller to handle note login
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const loginNote = async (req, res, next) => {
  try {
    const data = await NoteService.loginNote(req.body);
    // If login is successful, you may choose to return a token or other note information
    if (data){
        res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Login successful'
    });
}
else{throw new Error("Note Not Found")}
  } catch (error) {
    next (error)
    };
  };

  /**
 * Controller to delete a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
  
export const deleteNote = async (req, res, next) => {
    try {
      const noteId = req.params.noteId;
      const data = await NoteService.deleteNoteById(noteId);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note delete successfull',
      });
    } catch (error) {
      next(error);
    }
  };
  
  //controller to update a note
  export const updateNote = async (req, res, next) => {
    try {
      const noteId = req.params.noteId;
      const data = await NoteService.updateNote(noteId, req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note update successful',
      });
    } catch (error) {
      next(error);
    }
  };