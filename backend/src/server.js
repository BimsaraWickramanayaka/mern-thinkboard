import express from 'express';
//const express = require('express');
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import ratelimiter from './middleware/rateLimiter.js';

import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;



// middleware
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json()); // this middleware will parse json bodies: req.body
app.use(ratelimiter)

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & request URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server has started on PORT:", PORT);
});
});

