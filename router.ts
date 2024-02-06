import { Router } from "express";
import { firstController } from "./controllers/FirstController";

const router: Router = Router();

// Routes
router.get("/user", firstController.home);

export { router };
