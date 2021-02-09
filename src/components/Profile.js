import React from "react";

// 프로필에서 사용할 데이터
export const profileData = [
  {
    id: 1,
    username: "velopert",
    name: "김민준",
    description:
      "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
  },
  {
    id: 2,
    username: "gildong",
    name: "홍길동",
    description: "전래동화의 주인공",
  },
  {
    id: 3,
    username: "shinichi",
    name: "조대형",
    description: "랜드솔 마스터",
  },
];

const Profile = ({ match }) => {
  // 패러미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { username } = match.params;
  const profile = profileData.find((user) => user.username === username);
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
