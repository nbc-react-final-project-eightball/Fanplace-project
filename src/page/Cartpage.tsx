import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import * as S from '../../src/styledComponent/styledCart/StCart';

//Cart Type들
interface TypeCart {
  id: string;
  category: string; //카테고리
  img: string; //이미지
  artist: string; //아티스트
  title: string; //상품이름
  price: number; //가격
  quantity: number; // 선택된수량
  selected: boolean;
  productId: number;
}

const Cartpage = () => {
  const [cartList, setCartList] = useState<TypeCart[]>([]);
  const auth = getAuth();
  const user: string | undefined = auth.currentUser?.uid;
  const navigate = useNavigate();
  const paymentHandeler = () => {
    navigate('/payment', { state: { totalPrice } });
  };
  const [selectAll, setSelectAll] = useState<boolean>(false);

  //체크박스 변하는 핸들러
  const checkboxChangeHanlder = (itemId: string) => {
    const updatedCartList = cartList.map((item) =>
      item.id == itemId ? { ...item, selected: !item.selected } : item,
    );
    console.log('itemId :', itemId);
    setCartList(updatedCartList);
  };
  //체크박스 전체선택
  const selectAllChangeHandler = () => {
    const updatedCartList = cartList.map((item) => ({
      ...item,
      selected: !selectAll,
    }));
    setCartList(updatedCartList);
    setSelectAll(!selectAll);
  };
  //장바구니 수량 추가
  const increaseQuantityHandler = (itemId: string) => {
    const updatedCartList = cartList.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCartList(updatedCartList);
  };
  //장바구니 수량 감소
  const decreaseQuantityHandler = (itemId: string) => {
    const updatedCartList = cartList.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCartList(updatedCartList);
  };
  //fireBase CartList Collction가져오기
  useEffect(() => {
    const fetch = async () => {
      //user정보가 없으면 리턴하기
      //추후 로그인정보가 없으면 로그인시키기 추가예정
      if (!user) return;
      try {
        const docRef = doc(db, 'cartList', user);
        const docSnap = await getDoc(docRef);
        const docSnapData = docSnap.data();
        console.log('docSnapData', docSnapData);
        console.log('docSnap.id :', docSnap.id);

        if (docSnap.exists()) {
          if (docSnapData) {
            const cartDataArray = docSnapData.cartList;
            console.log('cartDataArray:', cartDataArray);
            setCartList(cartDataArray as TypeCart[]);
          }
        } else {
          console.log('Document does not exist!');
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetch();
  }, []);
  //cartList에 담긴게 없으면 0
  if (cartList.length === 0) return null;

  console.log('cartList', cartList);
  console.log('cartList[0].productId', cartList[0].productId);
  //총금액을 계산하는 로직
  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price * cartList[i].quantity;
  }
  const shippingCost = totalPrice <= 80000 ? 3000 : 0;
  const totalPayment = totalPrice + shippingCost;

  return (
    <S.CartContainer>
      <S.Cart>
        <S.CartTitle>
          <span className="span1">장바구니</span>
          <S.Process>
            <span>장바구니</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.00022 12C5.99991 11.8442 6.05416 11.6932 6.15355 11.5733L9.14022 7.99996L6.26022 4.41996C6.20484 4.35177 6.16348 4.27331 6.13853 4.18908C6.11358 4.10485 6.10551 4.01653 6.11481 3.92917C6.1241 3.84182 6.15056 3.75717 6.19268 3.68008C6.2348 3.60298 6.29173 3.53498 6.36022 3.47996C6.42841 3.42458 6.50687 3.38323 6.5911 3.35828C6.67532 3.33332 6.76365 3.32526 6.851 3.33455C6.93836 3.34384 7.02301 3.37031 7.1001 3.41242C7.17719 3.45454 7.2452 3.51148 7.30022 3.57996L10.5202 7.57996C10.6183 7.69925 10.6719 7.84888 10.6719 8.00329C10.6719 8.15771 10.6183 8.30734 10.5202 8.42663L7.18688 12.4266C7.13092 12.4941 7.06218 12.5499 6.98462 12.5908C6.90705 12.6317 6.82218 12.6569 6.73486 12.665C6.64755 12.673 6.5595 12.6638 6.47576 12.6378C6.39203 12.6117 6.31425 12.5694 6.24688 12.5133C6.17041 12.4513 6.10862 12.3731 6.06597 12.2843C6.02333 12.1955 6.00087 12.0984 6.00022 12Z"
                fill="#999999"
              />
            </svg>
            <span>주문결제</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.00022 12C5.99991 11.8442 6.05416 11.6932 6.15355 11.5733L9.14022 7.99996L6.26022 4.41996C6.20484 4.35177 6.16348 4.27331 6.13853 4.18908C6.11358 4.10485 6.10551 4.01653 6.11481 3.92917C6.1241 3.84182 6.15056 3.75717 6.19268 3.68008C6.2348 3.60298 6.29173 3.53498 6.36022 3.47996C6.42841 3.42458 6.50687 3.38323 6.5911 3.35828C6.67532 3.33332 6.76365 3.32526 6.851 3.33455C6.93836 3.34384 7.02301 3.37031 7.1001 3.41242C7.17719 3.45454 7.2452 3.51148 7.30022 3.57996L10.5202 7.57996C10.6183 7.69925 10.6719 7.84888 10.6719 8.00329C10.6719 8.15771 10.6183 8.30734 10.5202 8.42663L7.18688 12.4266C7.13092 12.4941 7.06218 12.5499 6.98462 12.5908C6.90705 12.6317 6.82218 12.6569 6.73486 12.665C6.64755 12.673 6.5595 12.6638 6.47576 12.6378C6.39203 12.6117 6.31425 12.5694 6.24688 12.5133C6.17041 12.4513 6.10862 12.3731 6.06597 12.2843C6.02333 12.1955 6.00087 12.0984 6.00022 12Z"
                fill="#999999"
              />
            </svg>
            <span>주문완료</span>
          </S.Process>
        </S.CartTitle>
        <div className="allArea">
          <S.LeftArea>
            <div className="artistName">
              <input
                type="checkbox"
                id="checkboxTop"
                checked={selectAll}
                onChange={selectAllChangeHandler}
              />
              <label htmlFor="checkboxTop" />
              <span>전체선택</span>
            </div>
            <S.CartList>
              {cartList.map((cartItem) => (
                <S.CartWrapper key={cartItem.id}>
                  <input
                    type="checkbox"
                    id={`checkbox${cartItem.id}`}
                    checked={cartItem.selected}
                    onChange={() => checkboxChangeHanlder(cartItem.id)}
                  />
                  <label htmlFor={`checkbox${cartItem.id}`} />
                  <S.Image src={`${cartItem.img}`}></S.Image>
                  <div className="titleWrapper">
                    <div className="title">{cartItem.title}</div>
                    {/* <div>옵션</div> */}
                  </div>
                  <div className="circleArea">
                    <div
                      className="circle"
                      onClick={() => decreaseQuantityHandler(cartItem.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.7998 6.0001C1.7998 5.89401 1.84195 5.79227 1.91696 5.71726C1.99198 5.64224 2.09372 5.6001 2.1998 5.6001H9.79981C9.90589 5.6001 10.0076 5.64224 10.0826 5.71726C10.1577 5.79227 10.1998 5.89401 10.1998 6.0001C10.1998 6.10618 10.1577 6.20793 10.0826 6.28294C10.0076 6.35795 9.90589 6.4001 9.79981 6.4001H2.1998C2.09372 6.4001 1.99198 6.35795 1.91696 6.28294C1.84195 6.20793 1.7998 6.10618 1.7998 6.0001Z"
                          fill="#999999"
                        />
                      </svg>
                    </div>
                    <div>{cartItem.quantity}</div>
                    <div
                      className="circle"
                      onClick={() => increaseQuantityHandler(cartItem.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.39981 2.20005C6.39981 2.09396 6.35766 1.99222 6.28265 1.91721C6.20763 1.84219 6.10589 1.80005 5.9998 1.80005C5.89372 1.80005 5.79198 1.84219 5.71696 1.91721C5.64195 1.99222 5.59981 2.09396 5.59981 2.20005V5.60005H2.1998C2.09372 5.60005 1.99198 5.64219 1.91696 5.71721C1.84195 5.79222 1.7998 5.89396 1.7998 6.00005C1.7998 6.10614 1.84195 6.20788 1.91696 6.28289C1.99198 6.35791 2.09372 6.40005 2.1998 6.40005H5.59981V9.80005C5.59981 9.90614 5.64195 10.0079 5.71696 10.0829C5.79198 10.1579 5.89372 10.2 5.9998 10.2C6.10589 10.2 6.20763 10.1579 6.28265 10.0829C6.35766 10.0079 6.39981 9.90614 6.39981 9.80005V6.40005H9.79981C9.90589 6.40005 10.0076 6.35791 10.0826 6.28289C10.1577 6.20788 10.1998 6.10614 10.1998 6.00005C10.1998 5.89396 10.1577 5.79222 10.0826 5.71721C10.0076 5.64219 9.90589 5.60005 9.79981 5.60005H6.39981V2.20005Z"
                          fill="#999999"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="productprice">
                    {cartItem.price.toLocaleString()}원
                  </div>
                </S.CartWrapper>
              ))}
            </S.CartList>
            <S.TotalAmount>
              <div className="amount1">
                <div>상품금액</div>
                <div>{totalPrice.toLocaleString()}원</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.3999 7.32212C2.3999 7.19266 2.45609 7.0685 2.55611 6.97696C2.65613 6.88541 2.79179 6.83398 2.93324 6.83398H13.0666C13.208 6.83398 13.3437 6.88541 13.4437 6.97696C13.5437 7.0685 13.5999 7.19266 13.5999 7.32212C13.5999 7.45158 13.5437 7.57574 13.4437 7.66728C13.3437 7.75883 13.208 7.81026 13.0666 7.81026H2.93324C2.79179 7.81026 2.65613 7.75883 2.55611 7.66728C2.45609 7.57574 2.3999 7.45158 2.3999 7.32212Z"
                  fill="#999999"
                />
              </svg>
              <div>
                <div>할인금액</div>
                <div>0원</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.53324 2.93324C8.53324 2.79179 8.47705 2.65613 8.37703 2.55611C8.27701 2.45609 8.14135 2.3999 7.9999 2.3999C7.85845 2.3999 7.7228 2.45609 7.62278 2.55611C7.52276 2.65613 7.46657 2.79179 7.46657 2.93324V7.46657H2.93324C2.79179 7.46657 2.65613 7.52276 2.55611 7.62278C2.45609 7.7228 2.3999 7.85845 2.3999 7.9999C2.3999 8.14135 2.45609 8.27701 2.55611 8.37703C2.65613 8.47705 2.79179 8.53324 2.93324 8.53324H7.46657V13.0666C7.46657 13.208 7.52276 13.3437 7.62278 13.4437C7.7228 13.5437 7.85845 13.5999 7.9999 13.5999C8.14135 13.5999 8.27701 13.5437 8.37703 13.4437C8.47705 13.3437 8.53324 13.208 8.53324 13.0666V8.53324H13.0666C13.208 8.53324 13.3437 8.47705 13.4437 8.37703C13.5437 8.27701 13.5999 8.14135 13.5999 7.9999C13.5999 7.85845 13.5437 7.7228 13.4437 7.62278C13.3437 7.52276 13.208 7.46657 13.0666 7.46657H8.53324V2.93324Z"
                  fill="#999999"
                />
              </svg>
              <div>
                <div>배송비</div>
                <div>{shippingCost.toLocaleString()}원</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.25 10C14.25 10.1989 14.171 10.3897 14.0303 10.5303C13.8897 10.671 13.6989 10.75 13.5 10.75H2.5C2.30109 10.75 2.11032 10.671 1.96967 10.5303C1.82902 10.3897 1.75 10.1989 1.75 10C1.75 9.80109 1.82902 9.61032 1.96967 9.46967C2.11032 9.32902 2.30109 9.25 2.5 9.25H13.5C13.6989 9.25 13.8897 9.32902 14.0303 9.46967C14.171 9.61032 14.25 9.80109 14.25 10ZM2.5 6.75H13.5C13.6989 6.75 13.8897 6.67098 14.0303 6.53033C14.171 6.38968 14.25 6.19891 14.25 6C14.25 5.80109 14.171 5.61032 14.0303 5.46967C13.8897 5.32902 13.6989 5.25 13.5 5.25H2.5C2.30109 5.25 2.11032 5.32902 1.96967 5.46967C1.82902 5.61032 1.75 5.80109 1.75 6C1.75 6.19891 1.82902 6.38968 1.96967 6.53033C2.11032 6.67098 2.30109 6.75 2.5 6.75Z"
                  fill="#999999"
                />
              </svg>
              <div>
                <div>주문금액</div>
                <div>{totalPayment.toLocaleString()}원</div>
              </div>
            </S.TotalAmount>
          </S.LeftArea>

          <S.RightArea>
            <S.PaymentInfo>결제정보</S.PaymentInfo>
            <S.BoxWrapper>
              <S.Box>
                <h3>상품수</h3>
                <span>2개</span>
              </S.Box>
              <S.Box>
                <h3>상품금액</h3>
                <span>{totalPrice.toLocaleString()}원</span>
              </S.Box>
              <S.Box>
                <h3>배송비</h3>
                <span>{shippingCost}</span>
              </S.Box>
              <S.Box>
                <h2>
                  총 결제 금액 <span>{totalPayment.toLocaleString()}원</span>
                </h2>
              </S.Box>
            </S.BoxWrapper>
            <S.PaymentButton onClick={paymentHandeler}>
              구매하기
            </S.PaymentButton>
          </S.RightArea>
        </div>
      </S.Cart>
    </S.CartContainer>
  );
};

export default Cartpage;
