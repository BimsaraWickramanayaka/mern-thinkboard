import express from 'express';
//const express = require('express');
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import ratelimiter from './middleware/rateLimiter.js';
import path from "path"

import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();


// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
     origin: 'http://localhost:5173',
   })
  );
}
app.use(express.json()); // this middleware will parse json bodies: req.body
app.use(ratelimiter)

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & request URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")))

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
});
}

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server has started on PORT:", PORT);
});
});

