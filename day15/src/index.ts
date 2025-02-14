import express, { Express, Request, Response } from "express";
import userRouter from "./routes/users/users.route";
const server: Express = express();
server.use(express.json());
server.use("/users", userRouter);
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});