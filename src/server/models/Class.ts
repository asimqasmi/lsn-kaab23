import mongoose from "mongoose";

/* ClassSchema will correspond to a collection in your MongoDB database. */
const ClassSchema = new mongoose.Schema({
  title: {
    /* The name of this Class */
    type: String,
    required: [true, "Please provide a title for this Class."],
    maxlength: [10, "Title cannot be more than 60 characters"],
  },
  class: {
    /* The name of this Class */
    type: String,
    required: [false],
    maxlength: [10, "Class cannot be more than 60 characters"],
  },
  day: {
    type: String,
    required: [true, "Please provide a day for this Class."],
    maxlength: [3, "day cannot be more than 3 characters"],
  },
  ClassNum: {
    type: Number,
    required: [true, "Please provide a number for this Class."],
    maxlength: [2, "ClassNumber cannot be more than 2 digits from 1-40"],
  },
  dayClassNum: {
    type: Number,
    required: [true, "Please provide a number for this Class."],
    maxlength: [1, "ClassNumber cannot be more than 1 digit from 1-8"],
  },

  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  active: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Class || mongoose.model("Class", ClassSchema);
