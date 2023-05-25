import { PaginationTable, Column } from '../shared/table';
import { useEffect } from 'react';
import { INotification } from '../../lib/models/notification';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { selectNotifications } from '../../redux/notifications/notificationsSelector';
import { getNotificationList } from '../../redux/notifications/notificationsSlice';

const ROWS_PER_PAGE= 10;
const columns: readonly Column[] = [
  {
    id: 'id',
    label: 'ID',
    align: 'right',
    format: (notification: INotification) => notification?.id,
  },
  {
    id: 'user',
    label: 'User',
    minWidth: 70,
    format: (notification: INotification) => notification?.user?.name,
  },
  {
    id: 'message',
    label: 'Message',
    minWidth: 170,
    format: (notification: INotification) => notification?.message,
  },
  {
    id: 'email',
    label: 'Email',
    format: (notification: INotification) => notification?.user?.email,
  },
  {
    id: 'phoneNumber',
    label: 'Phone Number',
    format: (notification: INotification) => notification?.user?.phoneNumber,
  },
  {
    id: 'category',
    label: 'Category',
    format: (notification: INotification) => notification?.category?.name,
  },
  {
    id: 'channel',
    label: 'Channel',
    format: (notification: INotification) => notification?.channel?.name,
  },
  {
    id: 'createdAt',
    label: 'Date',
    format: (notification: INotification) => notification?.createdAt,
  },
];

export const NotificationList = () => {
  const { notifications, totalCount, loading } = useAppSelector(selectNotifications);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (notifications.length === 0 && !loading) {
      dispatch(getNotificationList({ pageNumber: 0, rowsPerPage: ROWS_PER_PAGE}));
    }
    // eslint-disable-next-line
  }, []);

  const handleNextPage = (pageNumber: number, rowsPerPage: number) => {
    if (notifications.length !== totalCount) {
      dispatch(getNotificationList({ pageNumber, rowsPerPage}));
    }
  }

  return (
    <PaginationTable
      rows={notifications}
      total={totalCount}
      columns={columns}
      onNextPage={handleNextPage}
      loading={loading}
    />
  );
}