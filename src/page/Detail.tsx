import React, { useEffect, useState } from 'react';
import * as S from '../styledComponent/styledDetail/StDetail';
import Product from 'components/Detail/Product';
import ProductInfo from 'components/Detail/ProductInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';
import { setProduct } from '../redux/modules/Detail/DetailSlice';
import { typeProduct } from 'Type/TypeInterface';

const Detail = () => {
  const [detailSend, setDetailSend] = useState<typeProduct | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: RootState) => state.signUpSlice.userInfo,
  );
  const selectedProduct = useSelector(
    (state: RootState) => state.goods.selectedProduct,
  );
  console.log('user', userInfo?.uid);
  //새로고침할때마다 상품정보가 사라지는것을 방지하려고 세션스토리지에 저장합니다 !
  useEffect(() => {
    if (selectedProduct) {
      sessionStorage.setItem(
        'selectedProduct',
        JSON.stringify(selectedProduct),
      );
    }
  }, [selectedProduct]);
  useEffect(() => {
    if (selectedProduct === null) {
      const storedProduct = sessionStorage.getItem('selectedProduct');
      if (storedProduct) {
        setDetailSend(JSON.parse(storedProduct));
        dispatch(setProduct(JSON.parse(storedProduct)));
      }
    }
  }, [dispatch]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const recentItemsString = localStorage.getItem(`${userInfo?.uid}`);
    const recentItems = recentItemsString ? JSON.parse(recentItemsString) : [];

    // selectedProduct가 이미 recentItems에 있는지 확인
    const isAlreadySaved = recentItems.some(
      (item: typeProduct) => item?.productId === selectedProduct?.productId,
    );

    // selectedProduct가 recentItems에 없으면 추가
    if (!isAlreadySaved) {
      const updatedItems = [...recentItems, selectedProduct];
      if (updatedItems.length > 4) {
        updatedItems.shift();
      }

      localStorage.setItem(`${userInfo?.uid}`, JSON.stringify(updatedItems));
    }
  }, [selectedProduct, userInfo]);

  return (
    <S.DtailContainer>
      {selectedProduct ? (
        <>
          {isMobile ? (
            <>
              <Product product={selectedProduct} />
              {/* <ProductInfo product={selectedProduct} /> */}
            </>
          ) : (
            <>
              <Product product={selectedProduct} />
              <ProductInfo product={selectedProduct} />
              {/* <ProductRecentItems product={selectedProduct} /> */}
            </>
          )}
        </>
      ) : (
        <>
          <Product product={detailSend} />
          {!isMobile && <ProductInfo product={detailSend} />}
          {/* <ProductRecentItems product={selectedProduct} /> */}
        </>
      )}
    </S.DtailContainer>
  );
};

export default Detail;
