import { NewsLetter } from "../../models";

export const getOneLetter = async (req, res) => {
  let data = await NewsLetter.findById(req.params.id);

  res.status(200).json(data);
};
