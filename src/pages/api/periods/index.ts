import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@server/util/dbConnect";
import Period from "@server/models/Period";

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
        const Periods = await Period.find({}).sort({
          WeekPeriodNum: 1,
        }); /* find all the data in our database */
        res
          .status(200)
          .json({ success: true, length: Periods.length, data: Periods });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      console.log("Adding a Period");
      try {
        console.log(req.body);
        const user = await Period.create(
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
        const deletedPeriods = await Period.deleteMany({
          _id: Object(req.body),
        });
        res.status(201).json({ success: true, data: deletedPeriods });
      } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
