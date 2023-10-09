import { NewsLetter } from "../../models";

export const getAll = async (req, res) => {
  let data = await NewsLetter.find();

  res.status(200).json(data);
};
