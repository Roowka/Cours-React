const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
Schema.methods.toJSON = function () {
  return {
    title: this.title,
    content: this.content,
    _id: this._id,
    createdAt: this.createdAt,
  };
};

module.exports = mongoose.model("Post", Schema);
