import React, { useCallback, useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
import { typeProduct } from '../../Type/TypeInterface';
import ProductInfo from './ProductInfo';
import {
  DocumentData,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';
import { nanoid } from '@reduxjs/toolkit';
import StarRate from './StarRate';
import Swal from 'sweetalert2';
import { Link, Navigate, useNavigate } from 'react-router-dom';

interface ProductProps {
  product: typeProduct | null;
}
interface Review {
  displayName?: string;
  userId?: string;
  review?: string;
  content?: string;
  productId?: string;
  createdAt?: Date | string;
  photoURL?: string;
  rating?: number;
  reviewsId: string;
}
const Product: React.FC<ProductProps> = ({ product }) => {
  const userInfo = useSelector(
    (state: RootState) => state.signUpSlice.userInfo,
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [productReviewOpen, setProductReviewOpen] = useState(false);
  const [reviews, setReviews] = useState<DocumentData>([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = React.useState<number>(0);

  const id = nanoid();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getReviews = useCallback(async () => {
    const productRef = doc(db, 'reviews', String(product?.productId));
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
      const reviewsList =
        productSnap.data()?.reviews?.map((review: Review) => {
          return {
            ...review,
            createdAt: review.createdAt
              ? review.createdAt.toLocaleString()
              : 'N/A',
          };
        }) || [];
      setReviews(reviewsList);
    } else {
      setReviews([]);
    }
  }, [product?.productId]);
  const navigate = useNavigate();
  useEffect(() => {
    getReviews();
  }, [newReview === '']);
  useEffect(() => {}, []);
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo?.uid) {
      Swal.fire({
        icon: 'warning',
        title: '로그인이 필요한 서비스입니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#000',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
      return;
    }
    if (!rating) {
      Swal.fire({
        icon: 'warning',
        title: '별점을 선택해주세요!',
        confirmButtonText: '확인',
        confirmButtonColor: '#000',
      });
      return;
    }
    try {
      const productRef = doc(db, 'reviews', String(product?.productId));
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        await updateDoc(productRef, {
          reviews: arrayUnion({
            displayName: userInfo?.displayName,
            review: newReview,
            userId: userInfo?.uid ? userInfo.uid : null,
            createdAt: new Date().toLocaleString(),
            photoURL: userInfo?.photoURL,
            rating: rating,
            reviewsId: id,
          }),
        });
      } else {
        await setDoc(productRef, {
          reviews: [
            {
              displayName: userInfo?.displayName,
              review: newReview,
              userId: userInfo?.uid ? userInfo.uid : null,
              createdAt: new Date().toLocaleString(),
              photoURL: userInfo?.photoURL,
              rating: rating,
              reviewsId: id,
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);
    }
    setNewReview('');
  };
  const handleReviewDelete = async (reviewId: string) => {
    try {
      const productRef = doc(db, 'reviews', String(product?.productId));
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        const productData = productSnap.data();

        const newReviews = productData.reviews.filter(
          (review: any) => review.reviewsId !== reviewId,
        );

        const confirmDelete = await Swal.fire({
          title: '정말로 리뷰를 삭제하시겠습니까?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '네, 삭제합니다',
          cancelButtonText: '아니요',
        });

        if (confirmDelete.isConfirmed) {
          await updateDoc(productRef, {
            reviews: newReviews,
          });
          setReviews(newReviews);
          Swal.fire({
            icon: 'success',
            title: '리뷰가 삭제 되었습니다!',
            confirmButtonText: '확인',
            confirmButtonColor: '#000',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: '리뷰 삭제 실패!',
          confirmButtonText: '확인',
          confirmButtonColor: '#000',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '리뷰 삭제 실패!',
        confirmButtonText: '확인',
        confirmButtonColor: '#000',
      });
      console.error('리뷰 삭제 오류:', error);
    }
  };

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
          <button
            style={{
              borderBottom:
                productReviewOpen === false
                  ? '1px solid var(--color-primary)'
                  : 'none',
              fontWeight: productReviewOpen === false ? '500' : 'normal',
            }}
            onClick={() => {
              setProductReviewOpen(false);
            }}
          >
            상세설명
          </button>
          <button
            style={{
              borderBottom:
                productReviewOpen === true
                  ? '1px solid var(--color-primary)'
                  : 'none',
              fontWeight: productReviewOpen === false ? 'normal' : '500',
            }}
            onClick={() => {
              setProductReviewOpen(true);
            }}
          >
            상품리뷰({reviews.length === 0 ? 0 : reviews?.length})
          </button>
        </S.ProductTitle>
        {/* 디테일 이미지1개는 무조건 들어가서 뒤에껏들은  있으면 나오게 해둿습니다*/}
        {productReviewOpen === true && (
          <>
            <S.DetailReviewContainer>
              <S.DetailReviewForm onSubmit={handleReviewSubmit}>
                <>
                  <h1>사용 해보셧나요? 후기를 작성해주세요!</h1>
                  <S.DetailReviewRating>
                    <StarRate rating={rating} setRating={setRating} />
                  </S.DetailReviewRating>
                </>
                <S.DetailReviewFormSection1>
                  <S.DetailReviewInPut
                    value={newReview}
                    onChange={(e) => {
                      if (e.target.value.length >= 100) {
                        Swal.fire({
                          title: '100자 이내로 작성해주세요.',
                          icon: 'warning',
                          confirmButtonText: 'OK',
                          confirmButtonColor: '#000',
                        });

                        return;
                      }
                      setNewReview(e.target.value);
                    }}
                    maxLength={100}
                  />
                  <S.DetailReviewBtn type="submit" aria-label="리뷰 저장">
                    저 장
                  </S.DetailReviewBtn>
                </S.DetailReviewFormSection1>
              </S.DetailReviewForm>

              {reviews.length === 0 ? (
                ''
              ) : (
                <S.DetailReviewList>
                  {reviews.map((review: Review) => (
                    <S.DetailReviewContent key={review.productId}>
                      <S.DetailReviewImg
                        src={review.photoURL}
                        alt="프로필 이미지"
                        referrerPolicy="no-referrer"
                      />
                      <S.DetailReviewContentSectionContainer>
                        <S.DetailReviewContentSection1>
                          <S.DetailReviewContentSection1_1>
                            <S.DetailReviewerNameH1>
                              {review.displayName}
                            </S.DetailReviewerNameH1>
                            <S.DetailReviewercreatedAtP>
                              {review.createdAt?.toLocaleString()}
                            </S.DetailReviewercreatedAtP>
                            {userInfo?.uid === review?.userId && (
                              <S.DetailReviewDeleteBtn
                                onClick={() => {
                                  handleReviewDelete(review.reviewsId);
                                }}
                              >
                                X
                              </S.DetailReviewDeleteBtn>
                            )}
                          </S.DetailReviewContentSection1_1>
                          <S.DetailReviewContentSection1_2>
                            <p style={{ textAlign: 'left' }}>
                              {Array.from(
                                { length: review.rating || 0 },
                                (_, idx) => (
                                  <svg
                                    key={idx}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 14 13"
                                    fill="#FFD700"
                                  >
                                    {
                                      <path
                                        id={`${idx}Star`}
                                        d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                                        transform="translate(-2 -2)"
                                      />
                                    }
                                  </svg>
                                ),
                              )}
                            </p>
                          </S.DetailReviewContentSection1_2>
                        </S.DetailReviewContentSection1>
                        <S.DetailReviewContentSection2>
                          <p>{review.review}</p>
                        </S.DetailReviewContentSection2>
                      </S.DetailReviewContentSectionContainer>
                    </S.DetailReviewContent>
                  ))}
                </S.DetailReviewList>
              )}
            </S.DetailReviewContainer>
          </>
        )}

        {productReviewOpen === false && (
          <>
            <S.ProductDetailImg
              src={`${product?.contentImg1}`}
              alt="상품이미지1"
            />
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
                  - 산간벽지나 도서지방은 기본 금액 외 별도의 추가 금액을
                  지불하셔야 합니다. 고객님께서 주문하신 상품은 결제 완료 후
                  배송이 시작됩니다. 상품 준비 기간 및 재고 상황에 따라 배송
                  기간이 다소 지연될 수도 있습니다.&nbsp;
                </p>
                <p>
                  <span>
                    - 예약 판매 상품은 상세페이지 내 표시 된 출시일 이후부터
                    순차적으로 배송이 진행되며, 주문 순서에 따라 전체 물량
                    출고까지 주말·공휴일(대체공휴일 포함)을 제외한 평일 기준 7일
                    이상 소요될 수 있습니다.
                  </span>
                </p>
                <p>
                  - 각 상품의 발매일(출시일) 기준으로 합배송 됩니다. 출시일이
                  다른 경우 합배송이 불가합니다.
                </p>
              </S.PWrapper>
              <S.PWrapper>
                <h3>교환 및 반품안내</h3>
                <p>
                  <b>・교환 및 반품 시 유의사항</b>
                </p>
                <p>
                  상품의 색상은 모니터 사양에 따라 실제 색상과는 다소 차이가
                  있을 수 있으며, 상품 라벨의 위치나 색상은 이미지와 다를 수
                  있습니다.
                </p>
                <p>
                  <span>
                    교환 반품 신청 시 반품 택배 발송 전 고객센터 또는 1:1
                    게시판에 문의글 작성 및 내용 확인 부탁드립니다. 고객 임의로
                    반품 택배 발송하는 경우 배송비가 청구될 수 있습니다.
                  </span>
                </p>
                <p>&nbsp;</p>
                <p>
                  <b>・교환∙반품 가능기간</b>
                </p>
                <p>
                  - 단순변심 : 상품을 공급 받으신 날로부터 7일 이내 위드뮤
                  고객센터, 1:1 문의 게시판으로 연락 주시면 신속하게 처리해
                  드립니다.
                </p>
                <p>
                  &nbsp;- 배송 오류, 파손, 불량 등 상품 결함 : 상품 하자,
                  오배송의 경우 수령일로부터 90일 이내, 그 사실을 알 수 있었던
                  날로부터 30일이내까지 교환 및 반품이 가능합니다.
                </p>
                <p>&nbsp;</p>
                <p>
                  <b>・교환 및 반품 방법</b>
                </p>
                <p>- 1: 교환∙반품 기간확인</p>
                <p>- 2: 고객센터(1544-4205)또는 1:1문의로 교환∙반품접수</p>
                <p>
                  - 3: CS담당자의 안내 후 지정 반품지 및 지정 반품수단으로
                  교환∙반품 배송
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
                <p>
                  - 배송 오류, 파손, 불량 등 상품 결함 : 판매자가 배송비 지불
                </p>
                <p>
                  - 정확한 교환 및 반품 비용은 1:1 문의 또는 고객센터를 이용해
                  주시기 바랍니다.
                </p>
              </S.PWrapper>
            </S.DetailInfo>
          </>
        )}
      </S.ProductSection2>
    </S.ProductContainer>
  );
};

export default Product;
