import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from '../styledComponent/styledLayout/StLayout';
const Layout = () => {
  return (
    <div>
      <div>Header</div>
      <div>Nav</div>
      <div>side</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default Layout;
