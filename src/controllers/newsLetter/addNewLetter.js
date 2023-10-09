import { NewsLetter } from "../../models";

export const addNew = async (req, res) => {
  await NewsLetter.create(req.body);

  res.status(201).json({
    message: "Newsletter created",
  });
};
