// TODO: Activity.ts - placeholder

import { Schema, model } from 'mongoose';
import { ACTIVITY_TYPES } from '../constants';

const activitySchema = new Schema(
  {
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    actor: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // set from auth, never from the client
    type: { type: String, enum: ACTIVITY_TYPES, required: true },
    task: { type: Schema.Types.ObjectId, default: null }, // no ref: the task may be deleted
    taskTitle: { type: String, default: null }, // snapshot, so deleted tasks stay readable
    targetUser: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    from: { type: Schema.Types.Mixed, default: null },
    to: { type: Schema.Types.Mixed, default: null },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

activitySchema.index({ project: 1, createdAt: -1 });

export const Activity = model('Activity', activitySchema);