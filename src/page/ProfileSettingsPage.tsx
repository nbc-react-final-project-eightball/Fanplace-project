import React, { useState } from 'react';
import MyPageLayout from 'components/layout/MyPageLayout';
import * as S from 'styledComponent/styledMypage/StProfileSettings';
import ProfileSettingsForm from 'components/mypage/ProfileSettingsForm';

const ProfileSettingsPage = () => {
  return (
    <MyPageLayout>
      <S.ProfileSettingsWrapper>
        <S.TitleWrapper>
          <h3>정보 수정</h3>
        </S.TitleWrapper>
        <S.ProfileSettingsContent>
          <S.GuideLetter>
            📢 소셜 로그인 시 전화번호와 기본 배송지를 새로 추가해주세요!
          </S.GuideLetter>
          <ProfileSettingsForm />
        </S.ProfileSettingsContent>
      </S.ProfileSettingsWrapper>
    </MyPageLayout>
  );
};

export default ProfileSettingsPage;
