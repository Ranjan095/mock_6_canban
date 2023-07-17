/** @format */

let mongoose = require("mongoose");

// for subtask schema and modal
let subTaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  { timestamps: true, versionKey: false }
);

// for task schema and modal
let taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    discription: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Todo", "Doing", "Done"],
      default: "Todo",
    },
    subTask: { type: [subTaskSchema], required: true },
    bordId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bord",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
let TaskModal = mongoose.model("task", taskSchema);

module.exports = { TaskModal };
