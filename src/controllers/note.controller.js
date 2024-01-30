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

/**
 * Controller to handle note login
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const loginNote = async (req, res, next) => {
  try {
    const data = await NoteService.newNote(req.body);
    // If login is successful, you may choose to return a token or other note information
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Login successful'
    });
  } catch (error) {
    next (error)
    };
  };