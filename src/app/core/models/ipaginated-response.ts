export interface IPaginatedResponse<T> {
  totalPages: number;
  totalItems: number;
  items: T[];
}