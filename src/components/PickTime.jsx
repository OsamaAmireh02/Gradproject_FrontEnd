import React from 'react';
import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs';
const PickTime = () => (
  <Space wrap>
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
  </Space>
);
export default PickTime;