import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import OutLayout from './layouts/out-layout';
import { theme } from './configs/theme.constant';

const App: React.FC<any> = ({ user}) =>  {  
  return (
      <ConfigProvider
        theme={theme}
      >
        <Router>
        {
          user.token ? <AppLayout /> : <OutLayout />
        }
        </Router>
      </ConfigProvider>
    )
}

const mapStateToProps = (state: { auth: any; }) => ({ user: state.auth})
export default connect(mapStateToProps)(App);
