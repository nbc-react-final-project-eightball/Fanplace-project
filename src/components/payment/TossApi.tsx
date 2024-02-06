import { useEffect, useRef } from 'react';
import * as S from '../../styledComponent/styledPayment/stPayment';
import useTossPayment from '../../../src/hooks/useTossApi';

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const customerKey = 'HyZccn4pYtFcWyfFC1q1-';

const TossApi = () => {
  const { initializeTossPayment } = useTossPayment({
    clientKey,
    customerKey,
  });

  useEffect(() => {
    initializeTossPayment(0);
  }, []);

  return (
    <S.TossContainer>
      <S.TossWrapper>
        {/* 이런 div 태그를 카트페이지에도 넣어주던가 */}
        <div id="payment-widget" />
      </S.TossWrapper>
    </S.TossContainer>
  );
};

export default TossApi;
