import express from "express";
import routes from "./routes/index.js";
import db from "./config/dbConnection.js";

const app = express()
routes(app)

export default app