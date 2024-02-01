import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from '../styledComponent/styledLayout/StLayout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import SideBar from '../components/layout/SideBar';
import ScrollToTop from 'components/layout/ScrollToTop';

const Layout = () => {
  return (
    <S.Layout>
      <S.Welcome>🤍팬시플레이스에 오신 걸 환영합니다🖤</S.Welcome>
      <Header />
      <S.LayoutContainer>
        <S.LayoutSection1>
          <SideBar />
        </S.LayoutSection1>
        <S.LayoutSection2>
          <Outlet />
        </S.LayoutSection2>
      </S.LayoutContainer>
      <ScrollToTop />
      <Footer />
    </S.Layout>
  );
};

export default Layout;
