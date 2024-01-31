import React, { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
import { typeProduct } from '../../Type/TypeInterface';
import ProductInfo from './ProductInfo';

interface ProductProps {
  product: typeProduct | null;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
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
    <S.ProductContainer>
      <S.ProductSection1>
        <S.ProductImgContainer>
          <S.ProductImgContainerSection1>
            <S.ProductImg src={`${product?.img}`} alt="대표이미지" />
            {/* 큰 대표이미지 */}
          </S.ProductImgContainerSection1>
          <S.ProductImgContainerSection2>
            <S.ProductSideImg src={`${product?.img}`} alt="대표이미지 작은거" />
            {/* 대표이미지 작은거 */}
          </S.ProductImgContainerSection2>
        </S.ProductImgContainer>
      </S.ProductSection1>
      {/* 모바일사이즈 일때만 나오는 인포  */}
      {isMobile && (
        <>
          <div style={{ marginTop: '20px' }}></div>
          <ProductInfo product={product} />
        </>
      )}
      <S.ProductSection2>
        <S.ProductTitle>
          <button className="active">상세설명</button>
          <button>상품리뷰(0)</button>
        </S.ProductTitle>
        {/* 디테일 이미지1개는 무조건 들어가서 뒤에껏들은  있으면 나오게 해둿습니다*/}
        <S.ProductDetailImg src={`${product?.contentImg1}`} alt="상품이미지1" />
        {product?.contentImg2 && (
          <>
            <S.ProductDetailImg
              src={`${product?.contentImg2}`}
              alt="상품이미지2"
            />
            {product?.contentImg3 && (
              <S.ProductDetailImg
                src={`${product?.contentImg3}`}
                alt="상품이미지3"
              />
            )}
          </>
        )}
        <S.DetailInfo>
          <S.PWrapper>
            <h3>배송안내</h3>
            <p>
              배송 방법 : 택배 (CJ대한통<sup>​</sup>운 or 우체국택배)
            </p>
            <p>배송 지역 : 전국지역</p>
            <p>배송 비용 : 3,000원</p>
            <p>배송 기간 : 주문일 기준 영업일 2일 ~ 7일</p>
            <p>
              - 산간벽지나 도서지방은 기본 금액 외 별도의 추가 금액을 지불하셔야
              합니다. 고객님께서 주문하신 상품은 결제 완료 후 배송이 시작됩니다.
              상품 준비 기간 및 재고 상황에 따라 배송 기간이 다소 지연될 수도
              있습니다.&nbsp;
            </p>
            <p>
              <span>
                - 예약 판매 상품은 상세페이지 내 표시 된 출시일 이후부터
                순차적으로 배송이 진행되며, 주문 순서에 따라 전체 물량 출고까지
                주말·공휴일(대체공휴일 포함)을 제외한 평일 기준 7일 이상 소요될
                수 있습니다.
              </span>
            </p>
            <p>
              - 각 상품의 발매일(출시일) 기준으로 합배송 됩니다. 출시일이 다른
              경우 합배송이 불가합니다.
            </p>
          </S.PWrapper>
          <S.PWrapper>
            <h3>교환 및 반품안내</h3>
            <p>
              <b>・교환 및 반품 시 유의사항</b>
            </p>
            <p>
              상품의 색상은 모니터 사양에 따라 실제 색상과는 다소 차이가 있을 수
              있으며, 상품 라벨의 위치나 색상은 이미지와 다를 수 있습니다.
            </p>
            <p>
              <span>
                교환 반품 신청 시 반품 택배 발송 전 고객센터 또는 1:1 게시판에
                문의글 작성 및 내용 확인 부탁드립니다. 고객 임의로 반품 택배
                발송하는 경우 배송비가 청구될 수 있습니다.
              </span>
            </p>
            <p>&nbsp;</p>
            <p>
              <b>・교환∙반품 가능기간</b>
            </p>
            <p>
              - 단순변심 : 상품을 공급 받으신 날로부터 7일 이내 위드뮤 고객센터,
              1:1 문의 게시판으로 연락 주시면 신속하게 처리해 드립니다.
            </p>
            <p>
              &nbsp;- 배송 오류, 파손, 불량 등 상품 결함 : 상품 하자, 오배송의
              경우 수령일로부터 90일 이내, 그 사실을 알 수 있었던 날로부터
              30일이내까지 교환 및 반품이 가능합니다.
            </p>
            <p>&nbsp;</p>
            <p>
              <b>・교환 및 반품 방법</b>
            </p>
            <p>- 1: 교환∙반품 기간확인</p>
            <p>- 2: 고객센터(1544-4205)또는 1:1문의로 교환∙반품접수</p>
            <p>
              - 3: CS담당자의 안내 후 지정 반품지 및 지정 반품수단으로 교환∙반품
              배송
            </p>
            <p>- 4: 반품지에 상품 입고 및 검품 후 교환∙반품 진행</p>
            <p>- 5: 교환∙반품 완료</p>
            <p>&nbsp;</p>
            <p>
              <b>・교환 및 반품 비용</b>
            </p>
            <p>
              - 단순 변심 : 구매자의 변심으로 반품을 원할 경우 구매자가
              왕복배송비 지불
            </p>
            <p>- 배송 오류, 파손, 불량 등 상품 결함 : 판매자가 배송비 지불</p>
            <p>
              - 정확한 교환 및 반품 비용은 1:1 문의 또는 고객센터를 이용해
              주시기 바랍니다.
            </p>
          </S.PWrapper>
        </S.DetailInfo>
      </S.ProductSection2>
    </S.ProductContainer>
  );
};

export default Product;
