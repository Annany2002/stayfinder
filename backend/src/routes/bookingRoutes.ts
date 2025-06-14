import { Router } from "express";
import { body } from "express-validator";
import { createBooking } from "../controllers/bookingController";
import validateRequest from "../middleware/validateRequest";

const router = Router();

router.post(
  "/",
  [
    body("user_id").notEmpty().withMessage("User ID is required"),
    body("listing_id").notEmpty().withMessage("Listing ID is required"),
    body("checkin")
      .isISO8601()
      .toDate()
      .withMessage("Valid check-in date is required"),
    body("checkout")
      .isISO8601()
      .toDate()
      .withMessage("Valid check-out date is required"),
  ],
  validateRequest,
  createBooking
);

export default router;
