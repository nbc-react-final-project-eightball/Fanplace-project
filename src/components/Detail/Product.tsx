import React, { useCallback, useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
import { typeProduct } from '../../Type/TypeInterface';
import ProductInfo from './ProductInfo';
import {
  DocumentData,
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';
import { nanoid } from '@reduxjs/toolkit';
import StarRate from './StarRate';

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
      setReviews(['']);
    }
  }, [product?.productId]);

  useEffect(() => {
    getReviews();
  }, [newReview === '']);
  useEffect(() => {
    console.log('리뷰', reviews);
  }, []);
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo?.uid) {
      alert('로그인 후 이용해주세요.');
      return;
    }
    if (!rating) {
      alert('별점을 선택해주세요.');
      return;
    }
    try {
      const productRef = doc(db, 'reviews', String(product?.productId));
      const productSnap = await getDoc(productRef);
      console.log('프로덕트스냅', productSnap);
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

        const confirmDelete = window.confirm('정말로 리뷰를 삭제하시겠습니까?');
        if (confirmDelete) {
          await updateDoc(productRef, {
            reviews: newReviews,
          });
          setReviews(newReviews);
          alert('리뷰가 성공적으로 삭제되었습니다.');
        }
      } else {
        alert('리뷰를 찾을 수 없습니다.');
      }
    } catch (error) {
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
          <span
            style={{
              borderBottom:
                productReviewOpen == false ? '1px solid #000' : 'none',
            }}
            onClick={() => {
              setProductReviewOpen(false);
            }}
          >
            상세설명
          </span>
          <span
            style={{
              borderBottom:
                productReviewOpen == true ? '1px solid #000' : 'none',
            }}
            onClick={() => {
              setProductReviewOpen(true);
            }}
          >
            상품리뷰({reviews.length})
          </span>
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
                        alert('100자 이내로 작성해주세요.');
                        return;
                      }
                      setNewReview(e.target.value);
                    }}
                    maxLength={100}
                  />

                  <S.DetailReviewBtn type="submit">저 장</S.DetailReviewBtn>
                </S.DetailReviewFormSection1>
              </S.DetailReviewForm>
              <S.DetailReviewList>
                {reviews.map((review: Review) => (
                  <S.DetailReviewContent key={review.productId}>
                    <S.DetailReviewImg src={review.photoURL} alt="" />
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
                        {/* <p>{review.reviewsId}</p> */}
                      </S.DetailReviewContentSection2>
                    </S.DetailReviewContentSectionContainer>
                  </S.DetailReviewContent>
                ))}
              </S.DetailReviewList>
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
          </>
        )}
      </S.ProductSection2>
    </S.ProductContainer>
  );
};

export default Product;
