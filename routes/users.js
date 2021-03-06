import express from "express";
const router = express.Router();

import { validateInputs } from "../middleware/validator.js";
import { userValidationRules } from "../lib/userRules.js";

import {
    getAllUser,
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    getUser,
} from "../controllers/userController.js";

router.route("/").get(getAllUser);

router.route("/login").post(loginUser);

router
    .route("/register")
    .post(validateInputs(userValidationRules), registerUser);

router
    .route("/:id")
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

export default router;
