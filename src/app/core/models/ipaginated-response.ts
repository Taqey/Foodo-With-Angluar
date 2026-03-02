export interface IPaginatedResponse<T> {
  message: string;
  traceId: string;
  data: {
    totalPages: number;
    totalItems: number;
    items: T[];
  };
}