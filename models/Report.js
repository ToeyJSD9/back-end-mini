import { Schema, model, Types } from "mongoose";

const ReportSchema = new Schema(
  {
    totalNote: { type: Number, required: true },
    oldestNote: { type: Date, required: true },
    latest: { type: Date, required: true },
    data: [{ type: Types.ObjectId, ref: "Note", required: true }],
  },
  {
    timestamps: true,
  }
);

export const Report = model("Report", ReportSchema);
