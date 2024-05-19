import { Schema, model } from "mongoose";

const participantSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    heard_about_event: {
      type: String,
      enum: ["Social media", "Friends", "Found myself"],
      required: true,
    },
    event_id: {
      type: Schema.Types.ObjectId,
      ref: "event",
    },
  },
  { versionKey: false }
);

export const Participant = model("participant", participantSchema);
