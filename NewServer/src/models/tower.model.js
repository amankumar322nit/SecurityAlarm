import mongoose, { Schema } from "mongoose";

const towerSchema = new Schema(
  {
    id: {
      type: Number,
      required: [true, "Id is required"],
    },
    lat: {
      type: Number,
      required: [true, "lat is required"],
    },
    lng: {
      type: Number,
      required: [true, "lng is required"],
    },
    temp: {
      type: Number,
      required: [true, "temp is required"],
    },
    power: {
      type: String,
      required: [true, "power is required"],
    },
    fuel: {
      type: Number,
      required: [true, "fuel is required"],
    },
    anomalies: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //this will add createdAt and updatedAt
  }
);

export const Tower = mongoose.model("Tower", towerSchema);
