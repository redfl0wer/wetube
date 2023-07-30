import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }], //배열
  meta: { views: Number, rating: Number }, //객체
});

const Video = mongoose.model("video", videoSchema);
export default Video;
