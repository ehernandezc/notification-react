import { ApiClient } from "../ApiClient";
import { INotification } from "../../models/notification";
import { INotificationsClient, INotificationListOptions, INotificationListResult } from './notificationTypes';

export class NotificationsClient implements INotificationsClient {
  async addNotification(notification: INotification): Promise<INotificationListResult> {
    try {
      return await ApiClient.post<INotificationListResult>('/notifications', notification);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getNotificationList(options?: INotificationListOptions): Promise<INotificationListResult> {
    try {
      const offset = (options?.pageNumber || 0) * (options?.rowsPerPage || 10);
      return await ApiClient.get<INotificationListResult>(`/notifications?offset=${offset}&limit=10`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}