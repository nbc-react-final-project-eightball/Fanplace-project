import React, { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledLayout/StScrollToTop';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <S.ScrollToTopButton onClick={scrollToTop} $isVisible={isVisible}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M24 20.0001C23.6884 20.0007 23.3865 19.8922 23.1467 19.6934L16 13.7201L8.83998 19.4801C8.7036 19.5908 8.54667 19.6735 8.37822 19.7234C8.20977 19.7733 8.03311 19.7895 7.85841 19.7709C7.6837 19.7523 7.51439 19.6994 7.36021 19.6151C7.20603 19.5309 7.07001 19.417 6.95998 19.2801C6.84923 19.1437 6.76652 18.9867 6.71661 18.8183C6.6667 18.6498 6.65058 18.4732 6.66916 18.2985C6.68775 18.1238 6.74068 17.9545 6.82491 17.8003C6.90914 17.6461 7.02302 17.5101 7.15998 17.4001L15.16 10.9601C15.3986 10.7639 15.6978 10.6567 16.0066 10.6567C16.3155 10.6567 16.6147 10.7639 16.8533 10.9601L24.8533 17.6267C24.9883 17.7387 25.0999 17.8761 25.1817 18.0313C25.2635 18.1864 25.3139 18.3561 25.33 18.5308C25.3461 18.7054 25.3276 18.8815 25.2756 19.049C25.2235 19.2164 25.1389 19.372 25.0267 19.5067C24.9026 19.6597 24.7462 19.7832 24.5686 19.8685C24.3911 19.9538 24.1969 19.9988 24 20.0001Z"
          fill="var(--color-white)"
        />
      </svg>
    </S.ScrollToTopButton>
  );
};

export default ScrollToTop;
