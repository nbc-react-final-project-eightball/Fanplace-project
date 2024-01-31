import React, { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProducToShoppingCart, typeProduct } from 'Type/TypeInterface';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../redux/modules/Detail/DetailSlice';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/config';
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import axios from 'axios';
import { RootState } from 'redux/configStore';
import { getAuth } from 'firebase/auth';

interface ProductProps {
  product: typeProduct | null;
}

const ProductInfo: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(
    product?.salePrice || product?.price || 0,
  );
  const auth = getAuth();
  const user = auth.currentUser;

  const quantityPlusHandler = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * (product?.salePrice || product?.price || 0));
  };

  //더하기
  const quantityNinusHandler = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * (product?.salePrice || product?.price || 0));
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
          price: product.price,
          totalPrice: totalPrice,
          remainingQuantity: product.remainingQuantity,
          productId: product.productId,
        }),
      );
    }
    console.log('유저아이디', user?.uid);
    user ? addToCart() : alert('로그인정보가 유효하지 않습니다!');
  };
  const addToCart = async () => {
    try {
      if (user && product) {
        const userCartRef = doc(collection(db, 'cartList'), user.uid);
        const docSnap = await getDoc(userCartRef);
        const cartProduct = {
          category: product.category,
          img: product.img,
          artist: product.artist,
          title: product.title,
          quantity: quantity,
          price: product.price,
          totalPrice: totalPrice,
          remainingQuantity: product.remainingQuantity,
          productId: product.productId,
        };
        await setDoc(
          userCartRef,
          { cartList: arrayUnion(cartProduct) },
          { merge: true },
        );
        //유저 장바구니 있는지 확인
        if (docSnap.exists()) {
          const cartProducts = docSnap.data().cartList;
          const existingProductIndex = cartProducts.findIndex(
            (p: { productId: number }) => p.productId === cartProduct.productId,
          );
          //유저 장바구니가 있으면 장바구니에 동일한 상품이 있는지 확인
          //장바구니 상품 id랑 상세페이지에서 추가한 장바구니 id랑 같은지 확인 있으면 실행
          if (existingProductIndex !== -1) {
            //수량 이랑 최종가격 업데이트
            cartProducts[existingProductIndex].quantity += quantity;
            cartProducts[existingProductIndex].totalPrice +=
              cartProduct.price * quantity;
            console.log(
              '이미있는상품입니다',
              cartProducts[existingProductIndex],
            );
            //장바구니 상태 최신화
            await setDoc(
              userCartRef,
              { cartList: cartProducts },
              { merge: true },
            );
          } else {
            // 장바구니에 동일한 상품이 없는 경우, 새 상품을 장바구니에 추가
            cartProduct.quantity = quantity;
            cartProduct.totalPrice = cartProduct.price * quantity;
            await updateDoc(userCartRef, {
              //배열로 추가
              cartList: arrayUnion(cartProduct),
            });
          }
        } else {
          // 사용자의 장바구니가 아직 존재하지 않는 경우, 새 상품을 장바구니에 추가
          cartProduct.quantity = quantity;
          cartProduct.totalPrice = cartProduct.price * quantity;
          await setDoc(
            userCartRef,
            { cartList: arrayUnion(cartProduct) },
            { merge: true },
          );
        }
      }
    } catch (error) {
      console.log('에러가 났습니다! ', error);
    }
    alert('장바구니에 추가되었습니다!');
    // 소이님이동할페이지 적어주세요 !!
    navigate('/Cart');
    //
  };

  //장바구니로 보낼때
  return (
    <S.ProductInfoContainer>
      <S.ProductInfoSection1>
        <S.ProductInfoSection1_1> {product?.artist}</S.ProductInfoSection1_1>
        <S.ProductInfoSection1_2>
          {' '}
          <h1>{product?.title}</h1>
          <h4>{product?.titleEn}</h4>
        </S.ProductInfoSection1_2>
        <S.ProductInfoSection1_3>
          {' '}
          <h1>
            {' '}
            {product?.salePrice ? (
              <div>
                <span>
                  {Math.floor(
                    ((product?.price - product?.salePrice) / product?.price) *
                      100,
                  )}
                  %
                </span>
                <h3>{product.salePrice.toLocaleString()}원</h3>
                <p>{product.price.toLocaleString()}원</p>
              </div>
            ) : (
              <p>{product?.price.toLocaleString()}원</p>
            )}
          </h1>
        </S.ProductInfoSection1_3>
      </S.ProductInfoSection1>
      <S.ProductInfoSection2>
        <S.ProductInfoSection2_1>
          <h1>배송 안내</h1>
          <ul>
            <li>
              <span>배송비</span> <span>3,000원 / 주문 시 결제</span>
            </li>
            <li>
              <span>&nbsp;</span>
              <span>(50,000원 이상 주문 시 무료배송)</span>
            </li>
            {product?.Checklist1 && (
              <>
                <li>
                  {' '}
                  <span>상품 확인사항(1)</span> :
                  <span>{product?.Checklist1}</span>{' '}
                </li>
                <li>
                  <span>상품 확인사항(2) </span>:{' '}
                  <span>{product?.Checklist2}</span>
                </li>
              </>
            )}
          </ul>
        </S.ProductInfoSection2_1>
        <S.ProductInfoSection2_1>
          {' '}
          <h1>상품 정보</h1>
          <ul>
            <li>
              {' '}
              <span>상품ID</span> <span>{product?.productId}</span>
            </li>
            <li>
              {' '}
              <span>발매일 </span>
              <span>2023-05-16</span>{' '}
            </li>
            {product?.Checklist1 && (
              <>
                <li>
                  {' '}
                  <span>상품 확인사항(1)</span> :
                  <span>{product?.Checklist1}</span>{' '}
                </li>
                <li>
                  <span>상품 확인사항(2) </span>:{' '}
                  <span>{product?.Checklist2}</span>
                </li>
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
              <h1>{totalPrice.toLocaleString()}원</h1>
            </S.ProductInfoSection2_2CartBoxSection2>
          </S.ProductInfoSection2_2CartBox>
        </S.ProductInfoSection2_2>
      </S.ProductInfoSection2>
      <S.ProductInfoSection2_3>
        <S.ProductP>
          <span>총 금액 </span>
          <S.ProductH1> {totalPrice.toLocaleString()}원</S.ProductH1>
        </S.ProductP>
      </S.ProductInfoSection2_3>
      <S.ProductInfoSection3>
        <S.ProductInfoSection3Btn1 onClick={addCartHandler}>
          구매하기
        </S.ProductInfoSection3Btn1>
        <S.ProductInfoSection3_1>
          <S.ProductInfoSection3Btn2 onClick={addCartHandler}>
            장바구니 담기
          </S.ProductInfoSection3Btn2>
          <S.ProductInfoSection3Btn3>
            {' '}
            ♡ 위시리스트 담기
          </S.ProductInfoSection3Btn3>
        </S.ProductInfoSection3_1>
      </S.ProductInfoSection3>
    </S.ProductInfoContainer>
  );
};

export default ProductInfo;
