const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

const NoteSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      min: 1,
      max: 32,
    },
    description: {
      type: String,
      require: true,
      min: 1,
      max: 500,
    },
    deadline: {
      type: Date,
      require: true,
    },
    prio: {
      type: Number,
      default: 3,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
