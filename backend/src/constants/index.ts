// TODO: index.ts - placeholder

export const TASK_STATUSES = ['Backlog', 'To Do', 'In Progress', 'Done'] as const;
export const TASK_PRIORITIES = ['Low', 'Medium', 'High', 'Critical'] as const;

export type TaskStatus = (typeof TASK_STATUSES)[number];
export type TaskPriority = (typeof TASK_PRIORITIES)[number];

export const PRIORITY_RANK: Record<TaskPriority, number> = {
  Low: 1,
  Medium: 2,
  High: 3,
  Critical: 4,
};

export const ACTIVITY_TYPES = [
  'task.created',
  'task.deleted',
  'task.status_changed',
  'task.assignment_changed',
  'member.added',
  'member.removed',
] as const;

export type ActivityType = (typeof ACTIVITY_TYPES)[number];