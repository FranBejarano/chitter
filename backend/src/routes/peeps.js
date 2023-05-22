import express from "express";
import {
  createPeep,
  getAllPeeps, getExplorePeeps, getUserPeeps
} from "../controllers/peep.js";
import { verifyToken } from "../../verifyToken.js";

const router = express.Router();

// Create a Peep
router.post("/", verifyToken, createPeep);

// get all timeline peeps
router.get("/timeline/:id", getAllPeeps);

// get user Peeps only
router.get("/user/all/:id", getUserPeeps);

//explore
router.get("/explore", getExplorePeeps);

export default router;
