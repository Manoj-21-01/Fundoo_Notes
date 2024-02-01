import User from '../models/user.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
//get all users

export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

// create new user
export const newUser = async (body) => {
  const { firstName, lastName, emailid, password } = body;

  // Check if the user with the same email already exists
  const existingUser = await User.findOne({ emailid });
  if (existingUser) {
    throw new Error('User with the same email already exists');
  }

  // Hashing the password using bcrypt
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create a new user with hashed password
  const newUser = new User({
    firstName,
    lastName,
    emailid,
    password: hashedPassword,
  });

  // Save the new user to the database
  const data = await newUser.save();
  return data;
};

// login
export const loginUser = async (body) => {
  // Finding the user with the given email
  const user = await User.findOne({ emailid: body.emailid  });
  if (user) {

  // Comparing the entered password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(body.password, user.password);
  if (passwordMatch) {
    const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '3h' });
    return { user, token };
  }
  else{
    throw new Error("Invalid Password");
  }

  }
  throw new Error("Invalid Email id");
};

// //update single user
// export const updateUser = async (_id, body) => {
//   const data = await User.findByIdAndUpdate(
//     {
//       _id
//     },
//     body,
//     {
//       new: true
//     }
//   );
//   return data;
// };

// //delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };

// //get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };