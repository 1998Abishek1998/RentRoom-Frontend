import React from 'react';
import { ConfigProvider } from 'antd';
import { theme } from './configs/theme.constant';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import store from './store';
import { Provider } from 'react-redux';

const App: React.FC = () => (
  <ConfigProvider
    theme={theme}
  >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </ConfigProvider>
);

export default App;
