import express from "express";

const taskController = require("../controllers/taskcontroller");

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTasksById);
router.post("/", taskController.saveTask);
router.put("/:id", taskController.saveTask);
router.delete("/:id", taskController.deleteTask);

export default router;