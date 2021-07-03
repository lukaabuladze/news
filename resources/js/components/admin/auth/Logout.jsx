import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../contexts/UserContext";
import {useHistory} from "react-router";

export default function () {
  const context = useContext(UserContext);
  const [logout,setLogout] = useState(false);

  const history = useHistory();

  useEffect(()=> {
    context.resetUser();

    setLogout(true);
  },[]);

  if(logout) history.push('/admin/login');

  return (
    <div>
      Logout ...
    </div>
  );
}
