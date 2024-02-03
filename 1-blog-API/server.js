import express from "express";
import studentsRouter from "./routes/blogs.js";

const app = express();

app.use(express.json());

app.use("/students", studentsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});