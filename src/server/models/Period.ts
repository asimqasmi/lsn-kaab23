import mongoose from "mongoose";

/* PeriodSchema will correspond to a collection in your MongoDB database. */
const PeriodSchema = new mongoose.Schema({
  title: {
    /* The name of this Period */
    type: String,
    unique: true,
    required: [true, "Please provide a title for this Period."],
    maxlength: [20, "Title cannot be more than 20 characters"],
  },
  day: {
    type: String,
    required: [true, "Please provide a day for this Period."],
    maxlength: [10, "day cannot be more than 3 characters"],
  },
  dayPeriodNum: {
    type: String,
    required: [true, "Please provide a number for this Period."],
    maxlength: [10, "PeriodNumber cannot be more than 1 digit from 1-8"],
  },
  WeekPeriodNum: {
    type: Number,
    required: [true, "Please provide a number for this Period."],
    maxlength: [2, "PeriodNumber cannot be more than 2 digits from 1-40"],
  },
  lessons: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
  },

  status: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Period || mongoose.model("Period", PeriodSchema);
