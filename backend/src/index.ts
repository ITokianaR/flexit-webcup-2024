import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import routes from "./routes/route";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const port = 3000;

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not defined.");
}

// Create a MySQL connection pool
const pool = mysql.createPool(databaseUrl);

// Connect to the database
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to database successfully!");
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
})();
app.use(cors());
app.use("/storages", express.static(path.join(__dirname, "./storages")));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.get("/api", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
