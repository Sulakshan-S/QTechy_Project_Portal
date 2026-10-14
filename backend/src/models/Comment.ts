// TODO: Comment.ts - placeholder

import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    task: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    body: { type: String, required: true, trim: true, maxlength: 2000 },
  },
  { timestamps: true }
);

commentSchema.index({ task: 1, createdAt: 1 });

export const Comment = model('Comment', commentSchema);