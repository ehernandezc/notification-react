import { Category } from "./category";
import { Channel } from "./channel";
import { User } from "./user";

export interface INotification {
  id?: number;
  message: string;
  categoryId: number;
  channelId?: number;
  userId?: number;
  createdAt?: string;
  user?: User;
  channel?: Channel;
  category?: Category;
}