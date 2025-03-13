import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/student_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

const studentSchema = new mongoose.Schema({
  nom: String,
  prénom: String,
  annéeBac: String,
  matricule: String,
  spécialité: String,
  section: String,
  groupe: String,
});

const Student = mongoose.model("studentData", studentSchema);

app.post("/add-student", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student added successfully", student });
  } catch (error) {
    res.status(500).json({ message: "Error adding student", error });
  }
});

app.post("/login", async (req, res) => {
    try {
      const { matricule, anneeBac } = req.body;
        
      const student = await Student.findOne({ matricule, anneeBac });
  
      if (!student) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      res.status(200).json({ message: "Login successful", student });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
