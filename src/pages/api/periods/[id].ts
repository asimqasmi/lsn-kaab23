import dbConnect from "@server/util/dbConnect";
import Period from "@server/models/Period";
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
        const period = await Period.findById(id);
        if (!period) {
          return res.status(400).json({
            success: false,
            message: "No Period in DB with this id!",
          });
        }
        res.status(200).json({ success: true, data: period });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const period = await Period.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!period) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: period });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const period = await Period.deleteOne({ _id: id });
        if (!period) {
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
