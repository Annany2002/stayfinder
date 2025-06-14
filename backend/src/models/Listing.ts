import mongoose, { Document, Schema, Types } from "mongoose";

export interface IListing extends Document {
  title: string;
  description: string;
  price: number;
  location: string;
  host_id: Types.ObjectId;
  images: string[];
}

const ListingSchema: Schema = new Schema<IListing>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    host_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    images: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model<IListing>("Listing", ListingSchema);
