import mongoose, { Schema } from 'mongoose';
import { ICatSchema } from './interface';

const catSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Provide a breed name'],
    },
    breedId: {
      type: String,
      unique: true,
    },
    description: String,
    imageUrl: String,
    imageId: String,
    searchCount: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const catModel = mongoose.model<ICatSchema>('Cat', catSchema);

export default catModel;
