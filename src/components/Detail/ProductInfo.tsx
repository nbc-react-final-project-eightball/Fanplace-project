import React, { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { typeProduct } from 'Type/TypeInterface';
import { useDispatch, useSelector } from 'react-redux';

import { setProduct } from '../../redux/modules/Detail/DetailSlice';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
  product: typeProduct | null;
}

const ProductInfo: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product?.price || 0);

  const quantityPlusHandler = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * (product?.price || 0));
  };

  //더하기
  const quantityNinusHandler = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * (product?.price || 0));
    }
  };
  //빼기
  const addCartHandler = () => {
    if (product) {
      dispatch(
        setProduct({
          category: product.category,
          img: product.img,
          artist: product.artist,
          title: product.title,
          quantity: quantity,
          price: totalPrice,
          remainingQuantity: product.remainingQuantity,
        }),
      );
    }
    alert('장바구니에 추가되었습니다!');
    // 소이님이동할페이지 적어주세요 !!
    navigate('/cart');
    //
  };
  //장바구니로 보낼때
  return (
    <S.ProductInfoContainer>
      <S.ProductInfoSection1>
        <S.ProductInfoSection1_1> 상품 태그</S.ProductInfoSection1_1>
        <S.ProductInfoSection1_2>
          {' '}
          <h1>{product?.title}</h1>
        </S.ProductInfoSection1_2>
        <S.ProductInfoSection1_3>
          {' '}
          <h1> {product?.price}원 </h1>
        </S.ProductInfoSection1_3>
      </S.ProductInfoSection1>
      <S.ProductInfoSection2>
        <S.ProductInfoSection2_1>
          {' '}
          <h1>상품 정보</h1>
          <ul>
            <li> 상품ID : {product?.productId}</li>
            <li> 발매일 : 2023-05-16 </li>
            {product?.Checklist1 && (
              <>
                <li> 상품 확인사항(1) :{product?.Checklist1} </li>
                <li>상품 확인사항(2) : ✓{product?.Checklist2}</li>
              </>
            )}
          </ul>
        </S.ProductInfoSection2_1>
        <S.ProductInfoSection2_2>
          <S.ProductInfoSection2_2CartBox>
            <S.ProductInfoSection2_2CartBoxSection1>
              <p>{product?.ProductName}</p>
            </S.ProductInfoSection2_2CartBoxSection1>
            <S.ProductInfoSection2_2CartBoxSection2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <S.ProductInfoBtn onClick={quantityNinusHandler}>
                  <FontAwesomeIcon icon={faMinus} />
                </S.ProductInfoBtn>
                <p>{quantity}</p>
                <S.ProductInfoBtn onClick={quantityPlusHandler}>
                  <FontAwesomeIcon icon={faPlus} />
                </S.ProductInfoBtn>
              </div>
              <p>{totalPrice}원</p>
            </S.ProductInfoSection2_2CartBoxSection2>
          </S.ProductInfoSection2_2CartBox>
        </S.ProductInfoSection2_2>
        <S.ProductInfoSection2_3>
          총 상품 금액 : {totalPrice}원
        </S.ProductInfoSection2_3>
      </S.ProductInfoSection2>
      <S.ProductInfoSection3>
        <S.ProductInfoSection3Btn1 onClick={addCartHandler}>
          Buy Now
        </S.ProductInfoSection3Btn1>
        <S.ProductInfoSection3_1>
          <S.ProductInfoSection3Btn2 onClick={addCartHandler}>
            Add Cart
          </S.ProductInfoSection3Btn2>
          <S.ProductInfoSection3Btn2> Wish List</S.ProductInfoSection3Btn2>
        </S.ProductInfoSection3_1>
      </S.ProductInfoSection3>
    </S.ProductInfoContainer>
  );
};

export default ProductInfo;
