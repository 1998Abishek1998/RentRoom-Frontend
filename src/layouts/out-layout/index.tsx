import React from 'react';
import OutNav from './OutNav';
import OutFooter from './OutFooter';
import OutRoute from '../../routerConfig/OutRoute';

const OutLayout = () => (
<>
  <OutNav/>
    <OutRoute/>
  <OutFooter/>
</>
);

export default OutLayout;