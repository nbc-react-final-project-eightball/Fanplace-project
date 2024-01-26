import React from 'react';
import * as S from '../styledComponent/styledLayout/StPrepareLayout';
const NotFound = () => {
  return (
    <S.NotFoundWrapper>
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
        />
      </svg>
      <h2>
        “죄송합니다. 현재 페이지는 <span>찾을 수 없는 페이지</span>입니다.”
      </h2>
      <p>
        존재하지 않는 주소를 입력하셨거나
        <br />
        요청하신 페이지의 주소가 변경, 삭제 되어 찾을 수 없습니다.
      </p>
      <S.ToHomeLink to={'/'}>메인으로 가기</S.ToHomeLink>
    </S.NotFoundWrapper>
  );
};

export default NotFound;
