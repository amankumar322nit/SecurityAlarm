import { Tower } from "../models/tower.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
let response;

const getTower = asyncHandler(async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  let tower = await Tower.find().sort({createdAt:-1});
  response=res;
  res.write(`data: ${JSON.stringify(tower)}\n\n`);
});

const postTower = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (req?.body?.fuel < 20 || req?.body?.temp > 45) {
    req.body.anomalies = true;
  }
  let tower = await Tower.create(req.body);
  response.write(`data: ${JSON.stringify([tower])}\n\n`);

  return res.status(200).json(new ApiResponse(200, { tower }, "tower data"));
});

export { postTower, getTower };
