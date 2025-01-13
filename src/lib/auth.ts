export interface User {
  id: string;
  group_id: number;
  role_id: number;
  display_name: string;
  public_key: string;
  isAdmin: boolean;
  date_joined: string;
  jwt: string
} 