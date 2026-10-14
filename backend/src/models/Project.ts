// TODO: Project.ts - placeholder

import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, default: '', trim: true, maxlength: 1000 },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // The owner is also stored in members, so "is this user in the project?"
    // is one check for everyone.
    members: [
      {
        _id: false,
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        joinedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

projectSchema.index({ 'members.user': 1 });

export const Project = model('Project', projectSchema);