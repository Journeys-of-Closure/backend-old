import { Router } from "express";
import { usersController } from "./apps/users/entry-points/api/UsersController";

const router: Router = Router();

// Routes
router.get("/user", usersController.home);

export { router };
