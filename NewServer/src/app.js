import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getTower, postTower } from "./controllers/tower.controller.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.json());

app.get("/msg", (req, res) => {
  res.send("Hello World!");
});

// app.get("/events", (req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/event-stream",
//     "Cache-Control": "no-cache",
//     Connection: "keep-alive",
//   });
//   setInterval(() => {
//     const data = { message: `Hello, world! (${new Date().toISOString()})` };
//     console.log(" sent", data);
//     res.write(`data: ${JSON.stringify(data)}\n\n`);
//   }, 1000);
// });

app.get("/tower", getTower);
app.post("/tower", postTower);

export default app;
