import mongoose, { Schema, Document } from "mongoose";

export interface video extends Document {
  video: string;
  thumbnail: string;
  title: string;
  description: string;
  owner: Schema.Types.ObjectId;
  views: number;
  duration: number;
  isPublic: boolean;
  createdAt: Date;
}

export const videoSchema: Schema<video> = new Schema({
  video: {
    type: String,
    required: [true, "video url is required"],
    unique: true,
  },
  thumbnail: {
    type: String, // cloudinary URL
    required: [true, "thumbnail url is required"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "title required"],
  },
  description: {
    type: String,
    required: [true, "description required"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "video always have a owner! 😀"],
  },
  views: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    required: [true, "video always have some playtime! 😀"],
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
});
