import dayjs from 'dayjs';

export const dateFormat = {
  D1: (value: string) => dayjs(value).format('MMMM D, YYYY HH:MM'),
};
