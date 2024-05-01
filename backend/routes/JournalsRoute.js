import express from "express";
import { Journal } from "../models/JournalModel.js";

const router = express.Router();

// Route for Save a new Journal Entry
router.post("/", async (request, response) => {
  try {
    const { title, insight } = request.body;

    if (!title || !insight) {
      return response.status(400).send({
        message: "Send all required fields: title, insight",
      });
    }

    const currentDate = new Date(); // Generate current date and time
    const newJournal = await Journal.create({
      title,
      insight,
      date: currentDate, // Use the generated current date
    });

    return response.status(201).json({ data: newJournal });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: "Server Error" });
  }
});

// Route for Update a Journal Entry
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { title, insight } = request.body;

    if (!title || !insight) {
      return response.status(400).send({
        message: "Send all required fields: title, insight",
      });
    }

    const currentDate = new Date(); // Generate current date and time
    const updatedJournal = await Journal.findByIdAndUpdate(
      id,
      {
        title,
        insight,
        date: currentDate, // Use the generated current date
      },
      { new: true }
    );

    if (!updatedJournal) {
      return response.status(404).json({ message: "Journal not found" });
    }

    return response.status(200).json({ data: updatedJournal });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: "Server Error" });
  }
});

// Route for Get All Journal Entries
router.get("/", async (request, response) => {
  try {
    const journals = await Journal.find({});

    return response
      .status(200)
      .json({ count: journals.length, data: journals });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: "Server Error" });
  }
});

// Route for Get One Journal Entry by ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const journal = await Journal.findById(id);

    if (!journal) {
      return response.status(404).json({ message: "Journal not found" });
    }

    return response.status(200).json({ data: journal });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: "Server Error" });
  }
});

// Route for Delete a Journal Entry
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const deletedJournal = await Journal.findByIdAndDelete(id);

    if (!deletedJournal) {
      return response.status(404).json({ message: "Journal not found" });
    }

    return response
      .status(200)
      .json({ message: "Journal deleted successfully" });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: "Server Error" });
  }
});

export default router;
