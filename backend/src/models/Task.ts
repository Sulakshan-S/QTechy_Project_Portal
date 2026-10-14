// TODO: Task.ts - placeholder

import { Schema, model } from 'mongoose';
import { TASK_STATUSES, TASK_PRIORITIES, PRIORITY_RANK, TaskPriority } from '../constants';

const taskSchema = new Schema(
  {
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    title: { type: String, required: true, trim: true, maxlength: 150 },
    description: { type: String, default: '', maxlength: 5000 },
    status: { type: String, enum: TASK_STATUSES, default: 'Backlog' },
    priority: { type: String, enum: TASK_PRIORITIES, default: 'Medium' },
    priorityRank: { type: Number, default: PRIORITY_RANK.Medium }, // used only for sorting
    assignee: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    dueDate: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    version: { type: Number, default: 1 }, // optimistic locking
  },
  { timestamps: true }
);

// Keeps priorityRank in sync on create/save.
// NOTE: findOneAndUpdate does NOT run this hook, so the service must set it too.
taskSchema.pre('validate', function () {
  this.priorityRank = PRIORITY_RANK[this.priority as TaskPriority];
});

taskSchema.index({ project: 1, status: 1, dueDate: 1 });
taskSchema.index({ project: 1, createdAt: -1 });
taskSchema.index({ project: 1, assignee: 1 });
taskSchema.index({ project: 1, priorityRank: -1 });

export const Task = model('Task', taskSchema);