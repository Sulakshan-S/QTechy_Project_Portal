// TODO: AppError.ts - placeholder

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string // e.g. 'VERSION_CONFLICT', machine-readable for the frontend
  ) {
    super(message);
  }
}