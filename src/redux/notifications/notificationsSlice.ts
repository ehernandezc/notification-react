import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INotificationListOptions, INotificationListResult, notificationsClient } from '../../lib/clients/notifications'; 
import { INotification } from '../../lib/models/notification';

export interface NotificationsState {
  notifications: INotification[];
  totalCount: number;
  loading: boolean;
}

const initialState: NotificationsState = {
  notifications: [],
  totalCount: 0,
  loading: false,
}

export const addNotification = createAsyncThunk(
  "notifications/addNotification",
  async (notification: INotification ) => {
   return await notificationsClient.addNotification(notification);
  },
);

export const getNotificationList = createAsyncThunk(
  "notifications/fetchNotifications",
  async (options: INotificationListOptions ) => {
    //Delaying on purpose this Promise in order to see the loading in the table

    return new Promise<INotificationListResult>((resolve) =>
      setTimeout(async() => {
        const response = await notificationsClient.getNotificationList(options);
        resolve(response);
      }, 1000),
    )

    // return await notificationsClient.getNotificationList(options);
  },
);

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNotification.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications.unshift(...(action.payload?.data || []));
        state.totalCount = action.payload.totalCount;
      })
      .addCase(addNotification.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getNotificationList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNotificationList.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications.push(...(action.payload?.data || []));
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getNotificationList.rejected, (state) => {
        state.loading = false;
      })
  },
})

export default notificationsSlice.reducer
