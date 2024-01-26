import React from 'react';
import * as S from '../../styledComponent/styledLayout/StPrepareLayout';

const PrepareLayout = () => {
  return (
    <S.PrepareWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M8 13.3333H18.6667M56 13.3333H29.3333M8 31.9999H40M56 31.9999H50.6667M8 50.6666H13.3333M56 50.6666H24"
          stroke="black"
          stroke-width="5.33333"
          stroke-linecap="round"
        />
        <path
          d="M24.0003 18.6667C26.9458 18.6667 29.3337 16.2789 29.3337 13.3333C29.3337 10.3878 26.9458 8 24.0003 8C21.0548 8 18.667 10.3878 18.667 13.3333C18.667 16.2789 21.0548 18.6667 24.0003 18.6667Z"
          stroke="black"
          stroke-width="5.33333"
          stroke-linecap="round"
        />
        <path
          d="M45.3333 37.3334C48.2789 37.3334 50.6667 34.9456 50.6667 32.0001C50.6667 29.0546 48.2789 26.6667 45.3333 26.6667C42.3878 26.6667 40 29.0546 40 32.0001C40 34.9456 42.3878 37.3334 45.3333 37.3334Z"
          stroke="black"
          stroke-width="5.33333"
          stroke-linecap="round"
        />
        <path
          d="M18.6663 55.9999C21.6119 55.9999 23.9997 53.6121 23.9997 50.6666C23.9997 47.7211 21.6119 45.3333 18.6663 45.3333C15.7208 45.3333 13.333 47.7211 13.333 50.6666C13.333 53.6121 15.7208 55.9999 18.6663 55.9999Z"
          stroke="black"
          stroke-width="5.33333"
          stroke-linecap="round"
        />
      </svg>
      <h2>
        “현재 페이지는 <span>서비스 준비중</span>입니다.”
      </h2>
      <p>
        보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다. <br />
        빠른 시일 내에 준비하여 찾아뵙겠습니다.
      </p>
    </S.PrepareWrapper>
  );
};

export default PrepareLayout;
