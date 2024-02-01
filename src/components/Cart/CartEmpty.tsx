import * as S from '../../styledComponent/styledLayout/StPrepareLayout';
const CartEmpty = () => {
  return (
    <S.NotFoundWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M10.9034 11V7.99999C10.9034 6.67391 11.4403 5.40214 12.3961 4.46446C13.3519 3.52678 14.6483 3 16 3C17.3517 3 18.6481 3.52678 19.6039 4.46446C20.5597 5.40214 21.0966 6.67391 21.0966 7.99999V11M27.9873 26.7799C28.0194 27.0605 27.9906 27.3446 27.9027 27.6135C27.8149 27.8824 27.67 28.1299 27.4776 28.3399C27.2847 28.5496 27.0487 28.7169 26.7852 28.8306C26.5216 28.9444 26.2365 29.0021 25.9486 28.9999H6.05138C5.76346 29.0021 5.47835 28.9444 5.21481 28.8306C4.95127 28.7169 4.71529 28.5496 4.52239 28.3399C4.33 28.1299 4.18512 27.8824 4.09728 27.6135C4.00944 27.3446 3.98062 27.0605 4.01272 26.7799L5.80674 11H26.1933L27.9873 26.7799Z"
          stroke="#585858"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h2>
        <span>E</span> / <span>M</span> / <span>P</span> / <span>T</span> /{' '}
        <span>Y</span>
      </h2>
      <p>
        장바구니가 비어있습니다.
        <br />
        장바구니에 새로운 상품으로 채워보세요.
      </p>
      <S.ToHomeLink to={'/GoodsList/New'}>실시간 신상품 확인하기</S.ToHomeLink>
    </S.NotFoundWrapper>
  );
};

export default CartEmpty;
