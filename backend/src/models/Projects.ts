import { Schema, model, Types } from 'mongoose';

const projectSchema = new Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  description: { type: String, default: '', maxlength: 1000 },
  owner: { type: Types.ObjectId, ref: 'User', required: true },
  members: [{
    _id: false,
    user: { type: Types.ObjectId, ref: 'User', required: true },
    joinedAt: { type: Date, default: Date.now },
  }], // owner is also stored here as a member
}, { timestamps: true });

projectSchema.index({ 'members.user': 1 });

export const Project = model('Project', projectSchema);