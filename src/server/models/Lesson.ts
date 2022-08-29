import mongoose from "mongoose";

/* LessonSchema will correspond to a collection in your MongoDB database. */
const LessonSchema = new mongoose.Schema({
  title: {
    /* The name of this lesson */
    type: String,
    required: [true, "Please provide a title for this lesson."],
    maxlength: [10, "Title cannot be more than 60 characters"],
  },
  class: {
    /* The name of this lesson */
    type: String,
    required: [true, "Please provide a class for this lesson."],
    maxlength: [10, "Class cannot be more than 60 characters"],
  },
  day: {
    type: String,
    required: [true, "Please provide a day for this lesson."],
    maxlength: [3, "day cannot be more than 3 characters"],
  },
  lessonNum: {
    type: Number,
    required: [true, "Please provide a number for this lesson."],
    maxlength: [2, "LessonNumber cannot be more than 2 digits from 1-40"],
  },
  daylessonNum: {
    type: Number,
    required: [true, "Please provide a number for this lesson."],
    maxlength: [1, "LessonNumber cannot be more than 1 digit from 1-8"],
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
  active: {
    type: Boolean,
    required: true,
    default: false,
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
});

export default mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);
