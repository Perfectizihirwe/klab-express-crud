import { NewsLetter } from "../../models";
import { tour } from "../../models/tourModel";

import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

export const createTour = async (req, res) => {
  //   console.log(req.body);

  const image = await cloudinary.uploader.upload(req.file.path);
//   console.log(image);

  const tourData = await tour.create({
    title: req.body.title,
    body: req.body.body,
    image: image.secure_url,
  });

  res.status(201).json({
    message: "tour created",
    data: {
      tourData,
    },
  });
};
