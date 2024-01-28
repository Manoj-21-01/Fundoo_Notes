import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    emailid: {
      type: String
    },
    password:{
      type:String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
