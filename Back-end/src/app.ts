import "reflect-metadata";
import express from "express";
import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";
import clientRoutes from "./routers/clients.routes";
import cors from "cors";

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/clients", clientRoutes);

export default app;
