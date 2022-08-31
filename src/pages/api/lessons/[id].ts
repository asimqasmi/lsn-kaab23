import dbConnect from "@server/util/dbConnect";
import Teacher from "../../../server/models/Teacher";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const teacher = await Teacher.findById(id);
        if (!teacher) {
          return res.status(400).json({
            success: false,
            message: "No teacher in DB with this id!",
          });
        }
        res.status(200).json({ success: true, data: teacher });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const teacher = await Teacher.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!teacher) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: teacher });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedTeacher = await Teacher.deleteOne({ _id: id });
        if (!deletedTeacher) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: { id } });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
