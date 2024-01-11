import * as S from '../../styledComponent/styledHeader/StHeader';
import { useNavigate } from 'react-router-dom';

const ChangeHeader = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('/login');
  };

  const homeClickHanlder = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <S.HeaderContainer>
      <S.ChangeBrandTitle>
        <span></span>
      </S.ChangeBrandTitle>
      <S.ChangeWrapper>
        <S.ChangeHeader>
          <S.ChangeBrandLogo onClick={homeClickHanlder}>
            FancyPlace
          </S.ChangeBrandLogo>
        </S.ChangeHeader>
        <S.ChangeHeader>
          <S.ChangeHeaderButton>
            <button onClick={loginHandler}>로그인</button>
            <button>장바구니</button>
            <button>KoR \</button>
          </S.ChangeHeaderButton>
        </S.ChangeHeader>
      </S.ChangeWrapper>
    </S.HeaderContainer>
  );
};

export default ChangeHeader;
