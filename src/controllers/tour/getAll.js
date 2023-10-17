import { tour } from "../../models/tourModel";

export const getAll = async (req, res) => {
  let data = await tour.find();

  res.status(200).json(data);
};
