export interface Subscription {
  createdAt: string;
  expiresAt: string | null;
  id: string;
  plan: string;
  startedAt: string | null;
  status: string;
  updatedAt: string;
  userId: string;
}
