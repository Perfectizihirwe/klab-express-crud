import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  image: String,
});

export const tour = mongoose.model("Tour", tourSchema);
