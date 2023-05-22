import express from "express";
import {
  getUser
} from "../controllers/user.js";

const router = express.Router();

// Get User
router.get("/find/:id", getUser);

export default router;
