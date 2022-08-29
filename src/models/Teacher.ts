import mongoose from "mongoose";

/* TeacherSchema will correspond to a collection in your MongoDB database. */
const TeacherSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: [false],
  },
  name: {
    /* The name of this teacher */
    type: String,
    required: [true, "Please provide a name for this teacher."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  subject: {
    type: String,
    required: [false],
    maxlength: [20],
  },
  role: {
    type: String,
    enum: ["TEACHER", "SENIOR_TEACHER", "ADMIN"],
    default: "TEACHER",
  },
  lessons: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
  },
});

export default mongoose.models.Teacher ||
  mongoose.model("Teacher", TeacherSchema);
