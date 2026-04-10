export interface User {
  id: number;
  first_name?: string;
  username?: string;
  language_code?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
}