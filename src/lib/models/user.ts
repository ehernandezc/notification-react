import { Category } from "./category";
import { Channel } from "./channel";

export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  subscribedCategories: Category[];
  channels: Channel[];
}
