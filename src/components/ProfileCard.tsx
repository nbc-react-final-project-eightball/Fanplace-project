import React from 'react';
import { useLogout } from '../hooks/useLogout';

const ProfileCard = ({ user }: any) => {
  console.log('user displayname', user);

  const { logout } = useLogout();
  return (
    <>
      <div className="profile-card">
        <p>
          Name: <span>{user.displayName}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
      </div>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};

export default ProfileCard;
