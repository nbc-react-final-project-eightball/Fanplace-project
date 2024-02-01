import React, { useState } from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { typeProduct } from 'Type/TypeInterface';
import { useDispatch } from 'react-redux';
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
            <h3>{product?.price.toLocaleString()}원</h3>
          )}
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
              <span>발매일</span>
              <span>{product?.releaseDate || '2024-02-12'}</span>{' '}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_277_366)">
                <path
                  d="M5.14294 5.14296V3.42868C5.14294 2.67091 5.44396 1.94419 5.97978 1.40837C6.5156 0.872553 7.24232 0.571533 8.00008 0.571533C8.75784 0.571533 9.48457 0.872553 10.0204 1.40837C10.5562 1.94419 10.8572 2.67091 10.8572 3.42868V5.14296M14.7201 14.1601C14.7381 14.3204 14.7219 14.4828 14.6727 14.6364C14.6234 14.7901 14.5422 14.9315 14.4344 15.0515C14.3262 15.1714 14.1939 15.2669 14.0462 15.3319C13.8985 15.3969 13.7386 15.4299 13.5772 15.4287H2.42294C2.26154 15.4299 2.1017 15.3969 1.95397 15.3319C1.80623 15.2669 1.67393 15.1714 1.5658 15.0515C1.45795 14.9315 1.37673 14.7901 1.32748 14.6364C1.27824 14.4828 1.26208 14.3204 1.28008 14.1601L2.2858 5.14296H13.7144L14.7201 14.1601Z"
                  stroke="#999"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_277_366">
                  <rect width="16" height="16" fill="var(--color-white)" />
                </clipPath>
              </defs>
            </svg>
            장바구니 담기
          </S.ProductInfoSection3Btn2>
          <S.ProductInfoSection3Btn3>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.00016 2.66675C2.97516 2.66675 1.3335 4.30842 1.3335 6.33342C1.3335 10.0001 5.66683 13.3334 8.00016 14.1087C10.3335 13.3334 14.6668 10.0001 14.6668 6.33342C14.6668 4.30842 13.0252 2.66675 11.0002 2.66675C9.76016 2.66675 8.6635 3.28242 8.00016 4.22475C7.66206 3.74315 7.21288 3.35011 6.69067 3.07891C6.16846 2.80771 5.58859 2.66633 5.00016 2.66675Z"
                stroke="#8f86ff"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{' '}
            위시리스트 담기
          </S.ProductInfoSection3Btn3>
        </S.ProductInfoSection3_1>
      </S.ProductInfoSection3>
    </S.ProductInfoContainer>
  );
};

export default ProductInfo;
