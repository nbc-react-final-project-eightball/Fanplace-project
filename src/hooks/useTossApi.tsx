// TossPaymentHook.ts
import { useEffect, useRef } from 'react';
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';

interface TossPaymentHookProps {
  clientKey: string;
  customerKey: string;
  defaultTotalPrice?: number;
}

interface TossPaymentMethodsWidget {
  updateAmount: (totalPrice: number, updateReason: string) => void;
}

interface TossPaymentRequestOptions {
  // userId도 추가
  orderId: string;
  orderName: string;
  customerName: string;
  customerEmail: string;
  successUrl: string;
  failUrl: string;
}

// 카트페이지에서 useTossPayment를 사용하지 말던가
const useTossPayment = ({
  clientKey,
  customerKey,
  defaultTotalPrice = 0,
}: TossPaymentHookProps) => {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<TossPaymentMethodsWidget | null>(null);

  const initializeTossPayment = async (totalPrice: number) => {
    const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      '#payment-widget',
      totalPrice,
      // { variantKey: 'widgetA' },
    );
    paymentWidgetRef.current = paymentWidget;
    paymentMethodsWidgetRef.current = paymentMethodsWidget;
  };

  useEffect(() => {
    // 카트 페이지에서 얘가 실행되지 않게 하던가
    // url이 /payment일 때만 실행되게
    initializeTossPayment(defaultTotalPrice);
  }, [defaultTotalPrice]);

  const updateTotalPrice = (newTotalPrice: number) => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget) {
      paymentMethodsWidget.updateAmount(newTotalPrice, 'COUPON');
    }
  };

  const requestTossPayment = async (options: TossPaymentRequestOptions) => {
    const paymentWidget = paymentWidgetRef.current;

    if (paymentWidget) {
      try {
        await paymentWidget.requestPayment({
          orderId: options.orderId || nanoid(),
          orderName: options.orderName,
          customerName: options.customerName,
          customerEmail: options.customerEmail,
          successUrl: options.successUrl,
          failUrl: options.failUrl,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { initializeTossPayment, updateTotalPrice, requestTossPayment };
};

export default useTossPayment;
