import { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledHeader/StHeader';
import BasicHeader from './BasicHeader';
import ChangeHeader from './ChangeHeader';

const Header = () => {
  const [scrollPostion, setScrollPoistion] = useState<number>(0);
  const updateScroll = () => {
    setScrollPoistion(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <S.HeaderContainer>
      {scrollPostion < 150 ? <BasicHeader /> : <ChangeHeader />};
    </S.HeaderContainer>
  );
};

export default Header;
