import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import { RouterProvider } from 'react-router-dom';
import { theme } from './configs/theme.constant';
import router from './router';

const App: React.FC = () =>  (
    <ConfigProvider
      theme={theme}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )

export default App;
