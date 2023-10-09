import mongoose from "mongoose";

const newsLetterSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
});

export const NewsLetter = mongoose.model("NewsLetter", newsLetterSchema);
