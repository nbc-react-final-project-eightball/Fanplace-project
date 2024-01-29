import React, { useEffect, useState } from 'react';
import * as S from '../styledComponent/styledDetail/StDetail';
import Product from 'components/Detail/Product';
import ProductInfo from 'components/Detail/ProductInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';
import { setProduct } from '../redux/modules/Detail/DetailSlice';
import { collection, getDocs } from 'firebase/firestore';
import Productlist from 'components/Detail/Productlist';
import { typeProduct } from 'Type/TypeInterface';
import { set } from 'react-hook-form';
const Detail = () => {
  const [detailSend, setDetailSend] = useState<typeProduct | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dispatch = useDispatch();

  const selectedProduct = useSelector(
    (state: RootState) => state.goods.selectedProduct,
  );

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
            </>
          )}
        </>
      ) : (
        <>
          <Product product={detailSend} />
          {!isMobile && <ProductInfo product={detailSend} />}
        </>
      )}
    </S.DtailContainer>
  );
};

export default Detail;
