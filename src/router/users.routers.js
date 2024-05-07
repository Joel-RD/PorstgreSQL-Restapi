import {Router} from "express";
import {getUsers, getUsersById, createUsers, updateData, deleteUsers} from "../controllers/users.controllers.js"

const router = Router();

router.get("/users", getUsers)
router.get(`/users/:id`, getUsersById)
router.post(`/users`,createUsers)
router.put(`/users/:id`, updateData)
router.delete(`/users/:id`, deleteUsers)

export default router;
