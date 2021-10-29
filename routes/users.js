import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

//get one user by id
router.get("/:id", getUser);
// delete user by id
router.delete("/:id", deleteUser);
// update user by id
router.patch("/:id", updateUser);
export default router;
