import mongoose, { Document, Schema, Types } from "mongoose";

export interface IBooking extends Document {
  user_id: Types.ObjectId;
  listing_id: Types.ObjectId;
  checkin: Date;
  checkout: Date;
}

const BookingSchema: Schema = new Schema<IBooking>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    listing_id: { type: Schema.Types.ObjectId, ref: "Listing", required: true },
    checkin: { type: Date, required: true },
    checkout: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBooking>("Booking", BookingSchema);
