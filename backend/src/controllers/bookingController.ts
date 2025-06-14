import { Request, Response } from "express";
import Booking from "../models/Booking";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { user_id, listing_id, checkin, checkout } = req.body;
    // Check for overlapping bookings
    const conflict = await Booking.findOne({
      listing_id,
      $or: [{ checkin: { $lt: checkout }, checkout: { $gt: checkin } }],
    });
    if (conflict) {
      return res
        .status(409)
        .json({ message: "Listing is already booked for the selected dates" });
    }
    const booking = new Booking({ user_id, listing_id, checkin, checkout });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Failed to create booking", error });
  }
};
