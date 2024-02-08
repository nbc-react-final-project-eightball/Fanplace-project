import useCartList from 'hooks/useCartList';
import * as S from '../styledComponent/styledCart/StCart';
import * as P from '../styledComponent/styledPayment/stPayment';
import ProgressIndicator from 'components/Cart/ProgressIndicator';
import Address from 'components/payment/Address';
import TossApi from 'components/payment/TossApi';

import { TypeCart } from 'Type/TypeInterface';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from '@tosspayments/payment-widget-sdk';
import { RootState } from 'redux/configStore';
import { useSelector } from 'react-redux';

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const customerKey = 'HyZccn4pYtFcWyfFC1q1-';

const getSelectedTotalPrice = (selectedItems: TypeCart[]) => {
  let totalPrice = 0;
  selectedItems.forEach((cartItem) => {
    totalPrice += cartItem.price * cartItem.quantity;
  });
  return totalPrice;
};

const Paymentpage = () => {
  const { cartList, orderPaymentList } = useCartList();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedItems: TypeCart[] = location.state?.selectedItems || [];
  const title = '주문결제';
  const selectedItems1 = useSelector(
    (state: RootState) => state.cartSlice.selectedItems,
  );
  // 총 상품 금액 계산
  // 체크된 상품들만 총 금액의 합 계산
  const selectedTotalPrice = getSelectedTotalPrice(selectedItems);
  const totalPrice = selectedTotalPrice;

  // 주문금액이 5만원 이하면 배송비 3000원 추가
  const shippingCost = selectedTotalPrice <= 50000 ? 3000 : 0;
  const totalPayment = totalPrice + shippingCost;
  //TossAPi
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance['renderPaymentMethods']
  > | null>(null);
  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        '#payment-widget',
        totalPayment,
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);
  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;
    if (paymentMethodsWidget == null) {
      return;
    }
    paymentMethodsWidget.updateAmount(
      totalPayment,
      paymentMethodsWidget.UPDATE_REASON.COUPON,
    );
  }, [totalPayment]);

  const handlePaymentRequest = async () => {
    const paymentWidget = paymentWidgetRef.current;
    const orderId = await orderPaymentList(selectedItems, totalPayment);
    sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems1));
    try {
      await paymentWidget?.requestPayment({
        orderId: orderId ?? '', //주문번호
        orderName: '토스 티셔츠 외 2건', //주문명
        customerName: '김토스', //주문자명
        customerEmail: 'customer123@gmail.com', //주문자 이메일
        successUrl: `${window.location.origin}/success?orderId=${orderId}`, //성공시 이동할 url
        failUrl: `${window.location.origin}/fail`, //실패시 이동할 url
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (cartList.length === 0) return null;

  return (
    <P.PaymentContainer>
      <P.Payment>
        <ProgressIndicator title={title} />
        <S.Wrapper>
          <S.LeftContainer>
            <S.CartList>
              {selectedItems.map((cartItem) => (
                <S.CartWrapper key={cartItem.id}>
                  <S.Image src={`${cartItem.img}`}></S.Image>

                  <div className="titleWrapper">
                    <div className="title">{cartItem.title}</div>
                  </div>
                  <>
                    <div className="circleArea">
                      <div></div>
                      <div>1</div>
                      <div></div>
                    </div>
                  </>
                  <div className="productprice">
                    {cartItem.price.toLocaleString()}원
                  </div>
                </S.CartWrapper>
              ))}
            </S.CartList>
            <S.TotalAmount>
              <div>
                <div className="div1">상품금액</div>
                <div className="div2">{selectedTotalPrice.toString()}원</div>
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
                  clipRule="evenodd"
                  d="M2.3999 7.32212C2.3999 7.19266 2.45609 7.0685 2.55611 6.97696C2.65613 6.88541 2.79179 6.83398 2.93324 6.83398H13.0666C13.208 6.83398 13.3437 6.88541 13.4437 6.97696C13.5437 7.0685 13.5999 7.19266 13.5999 7.32212C13.5999 7.45158 13.5437 7.57574 13.4437 7.66728C13.3437 7.75883 13.208 7.81026 13.0666 7.81026H2.93324C2.79179 7.81026 2.65613 7.75883 2.55611 7.66728C2.45609 7.57574 2.3999 7.45158 2.3999 7.32212Z"
                  fill="#999999"
                />
              </svg>
              <div>
                <div className="div1">할인금액</div>
                <div className="div2">0원</div>
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
                  clipRule="evenodd"
                  d="M8.53324 2.93324C8.53324 2.79179 8.47705 2.65613 8.37703 2.55611C8.27701 2.45609 8.14135 2.3999 7.9999 2.3999C7.85845 2.3999 7.7228 2.45609 7.62278 2.55611C7.52276 2.65613 7.46657 2.79179 7.46657 2.93324V7.46657H2.93324C2.79179 7.46657 2.65613 7.52276 2.55611 7.62278C2.45609 7.7228 2.3999 7.85845 2.3999 7.9999C2.3999 8.14135 2.45609 8.27701 2.55611 8.37703C2.65613 8.47705 2.79179 8.53324 2.93324 8.53324H7.46657V13.0666C7.46657 13.208 7.52276 13.3437 7.62278 13.4437C7.7228 13.5437 7.85845 13.5999 7.9999 13.5999C8.14135 13.5999 8.27701 13.5437 8.37703 13.4437C8.47705 13.3437 8.53324 13.208 8.53324 13.0666V8.53324H13.0666C13.208 8.53324 13.3437 8.47705 13.4437 8.37703C13.5437 8.27701 13.5999 8.14135 13.5999 7.9999C13.5999 7.85845 13.5437 7.7228 13.4437 7.62278C13.3437 7.52276 13.208 7.46657 13.0666 7.46657H8.53324V2.93324Z"
                  fill="#999999"
                />
              </svg>
              <div>
                <div className="div1">배송비</div>
                <div className="div2">{shippingCost.toString()}원</div>
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
                <div className="div1">주문금액</div>
                <div className="div2">{totalPayment.toString()}원</div>
              </div>
            </S.TotalAmount>
          </S.LeftContainer>
          <P.PaymentSection>
            <Address />
            <P.ApiWrapper>
              <div id="payment-widget" />
            </P.ApiWrapper>
          </P.PaymentSection>
          <S.RightContainer>
            <S.PaymentInfo>결제정보</S.PaymentInfo>
            <S.BoxWrapper>
              <S.Box>
                <h3>상품수</h3>
                <span>{selectedItems.length}개</span>
              </S.Box>
              <S.Box>
                <h3>상품금액</h3>
                <span>{selectedTotalPrice.toString()}원</span>
              </S.Box>
              <S.Box>
                <h3>배송비</h3>
                <span>{shippingCost.toString()}원</span>
              </S.Box>
              <S.Box>
                <h2>
                  총 결제 금액 <span>{totalPayment.toString()}원</span>
                </h2>
              </S.Box>
            </S.BoxWrapper>
            <S.PaymentButton onClick={handlePaymentRequest}>
              구매하기
            </S.PaymentButton>
          </S.RightContainer>
        </S.Wrapper>
      </P.Payment>
    </P.PaymentContainer>
  );
};

export default Paymentpage;
