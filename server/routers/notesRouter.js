const notesRouter = require("express").Router();
const Note = require("../schema/note");

// middleware which checks note existence before performing operation on it
notesRouter.param("id", async (req, res, next, id) => {
  try {
    const exists = await Note.exists({ _id: id });
    if (!exists) {
      res.status(404).json("Note with this id does not exists.");
      return;
    }

    next();
  } catch (err) {
    res.status(500).json(err);
  }
});

//CRUD

notesRouter.get("/", async (req, res, next) => {
  try {
    const notes = await Note.find({});
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
});
//create new note
notesRouter.post("/", async (req, res, next) => {
  try {
    const newNoteData = new Note({
      username: req.body.username,
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      prio: req.body.prio,
    });

    const note = await newNoteData.save();
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
});

//read notes by user
notesRouter.get("/user/:username", async (req, res, next) => {
  try {
    const notes = await Note.find({ username: req.params.username });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
});

//read note by id
notesRouter.get("/:id", async (req, res, next) => {
  try {
    const note = await Note.findOne({ id_: req.params.id });
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update note by id
notesRouter.put("/:id", async (req, res, next) => {
  try {
    await Note.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          deadline: req.body.deadline,
          prio: req.body.prio,
        },
      },
      { useFindAndModify: false }
    );
    res.status(200).json("Note has been updated.");
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete note by id
notesRouter.delete("/:id", async (req, res, next) => {
  try {
    await Note.findOneAndDelete({ _id: req.params.id });
    res.status(200).send("Note has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = notesRouter;
