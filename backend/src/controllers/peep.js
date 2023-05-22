import { handleError } from "../error.js";
import Peep from "../models/Peep.js";
import User from "../models/User.js";

export const createPeep = async (req, res, next) => {
  const newPeep = new Peep(req.body);
  try {
    const savedPeep = await newPeep.save();
    res.status(200).json(savedPeep);
  } catch (err) {
    handleError(500, err);
  }
};

export const getAllPeeps = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.id);
    const userPeeps = await Peep.find({ userId: currentUser._id });
    const followersPeeps = await Promise.all(
      currentUser.following.map((followerId) => {
        return Peep.find({ userId: followerId });
      })
    );

    res.status(200).json(userPeeps.concat(...followersPeeps));
  } catch (err) {
    handleError(500, err);
  }
};

export const getUserPeeps = async (req, res, next) => {
  try {
    const userPeeps = await Peep.find({ userId: req.params.id }).sort({
      createdAt: -1,
    });

    res.status(200).json(userPeeps);
  } catch (err) {
    handleError(500, err);
  }
};
export const getExplorePeeps = async (req, res, next) => {
  try {
    const getExplorePeeps = await Peep.find().sort({ createdAt: -1 });
    res.status(200).json(getExplorePeeps);
  } catch (err) {
    handleError(500, err);
  }
};
