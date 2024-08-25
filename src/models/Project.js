import mongoose from "mongoose";

const Project = mongoose.Schema(
  {
    title:String,
    description: String,
    imageurl: String,
    more: String,
    skills: String,
    link: String,
  },
);

export default mongoose.models.Project || mongoose.model("Project", Project);