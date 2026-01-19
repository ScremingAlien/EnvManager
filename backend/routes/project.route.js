import { Router } from "express";
import { secure } from "../middlewares/auth.middleware.js";
import { createProject, getProject } from "../controllers/project.controller.js";

const router = Router();

router.use(secure);

router.post("/", createProject);
router.get("/", getProject);

export default router;
