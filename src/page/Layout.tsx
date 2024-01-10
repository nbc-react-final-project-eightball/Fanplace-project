import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from '../styledComponent/styledLayout/StLayout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import SideBar from '../components/layout/SideBar';
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
