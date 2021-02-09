import React from "react";
import { useLocation, useRouteMatch, useHistory } from "react-router-dom";

const RouterHookSample = () => {
  const location = useLocation(),
    match = useRouteMatch(),
    history = useHistory();
  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <br />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

export default RouterHookSample;
