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
          <ProfileSettingsForm />
        </S.ProfileSettingsContent>
      </S.ProfileSettingsWrapper>
    </MyPageLayout>
  );
};

export default ProfileSettingsPage;
