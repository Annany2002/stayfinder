import { Router } from "express";
import {
  getAllListings,
  getListingById,
} from "../controllers/listingController";

const router = Router();

router.get("/", getAllListings);
router.get("/:id", getListingById);

export default router;
