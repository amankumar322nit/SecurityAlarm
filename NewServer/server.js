import connectDB from "./src/index.js";
import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on PORT :${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });



// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

// app.get("/tower",(req,res)=>{

// })

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

// app.listen(3000, () => console.log("Server is listenting on port 3000"));
