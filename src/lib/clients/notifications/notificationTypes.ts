import { INotification } from "../../models/notification";

export interface INotificationListOptions {
  pageNumber: number;
  rowsPerPage: number;
}

export interface INotificationListResult {
  data: INotification[];
  totalCount: number;
}

export interface INotificationsClient {
  addNotification(notification: INotification): Promise<INotificationListResult>;
  getNotificationList(options: INotificationListOptions): Promise<INotificationListResult>;
}