import mongoose from "mongoose";

const JournalSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    insight: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Journal = mongoose.model("Journal", JournalSchema);
