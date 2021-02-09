import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile, { profileData } from "./Profile";
import RouterHookSample from "./RouterHookSample";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        {profileData.map((user) => (
          <li key={user.id}>
            <NavLink
              to={`/profiles/${user.username}`}
              activeStyle={{ background: "black", color: "white" }}
            >
              {user.username}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <RouterHookSample />
    </div>
  );
};

export default Profiles;
