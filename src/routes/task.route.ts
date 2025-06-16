import { Router } from "express";
import { createTask, deleteTask, editTask, getAllTasks, getTask } from "../controllers/task";

const router = Router();

router.post('/',createTask);
router.get('/',getAllTasks);
router.get('/:id',getTask);
router.patch('/:id',editTask);
router.delete('/:id',deleteTask);



export default router;