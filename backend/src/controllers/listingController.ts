import { Request, Response } from "express";
import Listing from "../models/Listing";

export const getAllListings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
    return;
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch listings", error });
    return;
  }
};

export const getListingById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      res.status(404).json({ message: "Listing not found" });
      return;
    }
    res.status(200).json(listing);
    return;
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch listing", error });
    return;
  }
};
