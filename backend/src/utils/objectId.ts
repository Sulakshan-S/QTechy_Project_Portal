// TODO: objectId.ts - placeholder

import { isValidObjectId } from 'mongoose';
import { AppError } from './AppError';

export function assertObjectId(id: string, label = 'id'): void {
  if (!isValidObjectId(id)) throw new AppError(400, `Invalid ${label}`, 'INVALID_ID');
}