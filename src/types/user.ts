export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "EDITOR";
  createdAt: string;
}
