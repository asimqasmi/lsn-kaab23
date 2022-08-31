import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@server/util/dbConnect";
import Teacher from "@server/models/Teacher";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();
  // console.log(dbConnect);

  switch (method) {
    case "GET":
      try {
        console.log(req.body);
        const teachers = await Teacher.find({}).sort({
          number: 1,
        }); /* find all the data in our database */
        res
          .status(200)
          .json({ success: true, length: teachers.length, data: teachers });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      console.log("Adding a teacher");
      try {
        console.log(req.body);
        const user = await Teacher.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: user });
      } catch (error: any) {
        console.log(error.message);
        console.log(req.body);
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedTeachers = await Teacher.deleteMany({
          _id: Object(req.body),
        });
        res.status(201).json({ success: true, data: deletedTeachers });
      } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
