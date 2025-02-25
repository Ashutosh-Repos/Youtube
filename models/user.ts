import { match } from "assert";
import mongoose, { Schema, Document } from "mongoose";
interface unverifieduser extends Document {
  name: string;
  email: string;
  phone: string;
  emailVerification: string;
  phoneVerificaton: string;
}

interface user extends Document {
  username: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  avatar?: string;
  cover?: string;
  watchHistory: [];
}

export const unverifiedUserSchema: Schema<unverifieduser> = new Schema({
  name: {
    type: String,
    required: [true, "name required"],
    match: [/^[A-Za-z]+(?:\s[A-Za-z]+)*$/, "invalid name"],
  },
  email: {
    type: String,
    required: [true, "email required"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "invalid email",
    ],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "phone number is required"],
    match: [
      /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/,
      "phone number is invalid",
    ],
  },
  emailVerification: {
    type: String,
    required: [true, "email verification code is required"],
  },
  phoneVerificaton: {
    type: String,
    required: [true, "phone verification code is required"],
    match: [/^\d{8}$/, "invalid code"],
  },
});

export const userSchema: Schema<user> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "name required"],
    match: [/^[A-Za-z]+(?:\s[A-Za-z]+)*$/, "invalid name"],
  },
  email: {
    type: String,
    required: [true, "email required"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "invalid email",
    ],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "phone number is required"],
    match: [
      /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?(\d{3})[-.\s]?(\d{4})$/,
      "phone number is invalid",
    ],
  },
  password: {
    type: String,
    required: [true, "password required"],
  },
  avatar: {
    type: String,
  },
  cover: {
    type: String,
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "video",
    },
  ],
});

export const User =
  (mongoose.models?.users as mongoose.Model<user>) ||
  mongoose.model<user>("users", userSchema);

export const unverifiedUser =
  (mongoose.models.unverifiedUser as mongoose.Model<unverifieduser>) ||
  mongoose.model<unverifieduser>("unverifiedUser", unverifiedUserSchema);
