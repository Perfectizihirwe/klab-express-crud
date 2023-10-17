import express from "express";
import multer from "multer";

const tourRoute = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tour_assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "tour_assets", storage: storage });

import { createTour, getAll } from "../controllers/tour";

tourRoute.get("/", getAll);

tourRoute.post("/", upload.single("image"), createTour);

export default tourRoute;
