import express from "express";
import {
  register,
  login,
  validateToken,
} from "../controllers/userController.js";


const router = express.Router();


router.post("/register", register);

router.post("/login", login);

router.get("/validateToken", validateToken);

export default router;
