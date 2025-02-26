import express from "express";
import cors from "cors";
import { config } from "./config";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { logger } from "./middleware/logging.middleware";

/**
 * init service
 */

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use(config.AUTH_SERVICE_ROUTE, authRoutes);
app.use(config.USER_SERVICE_ROUTE, userRoutes);

export default app;
