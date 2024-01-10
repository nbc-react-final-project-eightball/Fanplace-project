import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from '../styledComponent/styledLayout/StLayout';
import Footer from '../component/layout/Footer';
import Header from '../component/layout/Header';
import SideBar from '../component/layout/SideBar';
const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <S.LayoutContainer>
        <S.LayoutSection1>
          <SideBar />
        </S.LayoutSection1>
        <S.LayoutSection2>
          <Outlet />
        </S.LayoutSection2>
      </S.LayoutContainer>
      <Footer />
    </S.Layout>
  );
};

export default Layout;
