import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'page/Layout';
import Mainpage from 'page/Mainpage';
import Authpage from 'page/Authpage';
import GoodsList from 'page/GoodsList';
import Mypage from 'page/Mypage';
import CouponPage from 'page/CouponPage';
import OrderListPage from 'page/OrderListPage';
import WishListPage from 'page/WishListPage';
import ShippingPage from 'page/ShippingPage';
import ProfileSettingsPage from 'page/ProfileSettingsPage';
import Detail from 'page/Detail';
import NotFound from 'page/NotFound';
import Cartpage from 'page/Cartpage';
import PaymentPage from 'page/PaymentPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Authpage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/GoodsList" element={<GoodsList />} />
          <Route path="/orderlist" element={<OrderListPage />} />
          <Route path="/coupon" element={<CouponPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/profilesettings" element={<ProfileSettingsPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/Cart" element={<Cartpage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
