import React from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const ProductInfo = () => {
  return (
    <S.ProductInfoContainer>
      <S.ProductInfoSection1>
        <S.ProductInfoSection1_1> 상품 태그</S.ProductInfoSection1_1>
        <S.ProductInfoSection1_2>
          {' '}
          <h1>YOASOBI - 13 アイドル / ASIA TOUR 2023-2024 OFFICIAL MD</h1>
        </S.ProductInfoSection1_2>
        <S.ProductInfoSection1_3>
          {' '}
          <h1> 30000 원 </h1>
        </S.ProductInfoSection1_3>
      </S.ProductInfoSection1>
      <S.ProductInfoSection2>
        <S.ProductInfoSection2_1>
          {' '}
          <h1>상품 정보</h1>
          <ul>
            <li> 상품 코드 ID 넣으면 될듯 ?</li>
            <li> 발매일 : 2023-05-16 </li>
            <li> 상품 확인사항(1) : ✓재고 소진시 마감 </li>
            <li>
              {' '}
              상품 확인사항(2) : ✓ 초도 한정 특전 포토카드 세트 증정 이벤트
              종료되었습니다.
            </li>
          </ul>
        </S.ProductInfoSection2_1>
        <S.ProductInfoSection2_2>
          <S.ProductInfoSection2_2CartBox>
            <S.ProductInfoSection2_2CartBoxSection1>
              트와이스 - 캔디봉 ∞
            </S.ProductInfoSection2_2CartBoxSection1>
            <S.ProductInfoSection2_2CartBoxSection2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <S.ProductInfoBtn>
                  <FontAwesomeIcon icon={faMinus} />
                </S.ProductInfoBtn>
                <p>1</p>
                <S.ProductInfoBtn>
                  <FontAwesomeIcon icon={faPlus} />
                </S.ProductInfoBtn>
              </div>
              <p>50000 원</p>
            </S.ProductInfoSection2_2CartBoxSection2>
          </S.ProductInfoSection2_2CartBox>
        </S.ProductInfoSection2_2>
        <S.ProductInfoSection2_3>총 상품 금액 50000원</S.ProductInfoSection2_3>
      </S.ProductInfoSection2>
      <S.ProductInfoSection3>
        <S.ProductInfoSection3Btn1>Buy Now</S.ProductInfoSection3Btn1>
        <S.ProductInfoSection3_1>
          <S.ProductInfoSection3Btn2>Add Cart</S.ProductInfoSection3Btn2>
          <S.ProductInfoSection3Btn2> Wish List</S.ProductInfoSection3Btn2>
        </S.ProductInfoSection3_1>
      </S.ProductInfoSection3>
    </S.ProductInfoContainer>
  );
};

export default ProductInfo;
