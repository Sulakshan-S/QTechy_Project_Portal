import { Schema, model, Types } from 'mongoose';

const commentSchema = new Schema({
  project: { type: Types.ObjectId, ref: 'Project', required: true },
  task: { type: Types.ObjectId, ref: 'Task', required: true },
  author: { type: Types.ObjectId, ref: 'User', required: true },
  body: { type: String, required: true, trim: true, maxlength: 2000 },
}, { timestamps: true });

commentSchema.index({ task: 1, createdAt: 1 });

export const Comment = model('Comment', commentSchema);