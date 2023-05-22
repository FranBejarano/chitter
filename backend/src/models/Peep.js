import mongoose from "mongoose";

const PeepSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    peepBody: {
      type: String,
      required: true,
      max: 280,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Peep", PeepSchema);
