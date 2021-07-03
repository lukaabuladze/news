import React, {createContext, useState} from 'react';

export const UserContext = createContext({
    user: JSON.parse(localStorage.getItem("user")),
    setUser: () => {}
});

export const UserContextProvider = (props) => {
    const setUser = (user) => {
        let expireMinutes = (new Date()).setMinutes((new Date()).getMinutes() + 30);

        setState({...state, user: {...user, expireMinutes: expireMinutes}});

        localStorage.setItem('user', JSON.stringify({...user, expireMinutes: expireMinutes}));
    };

    const resetUser = () => {
        setState({...state, user: null});

        localStorage.removeItem('user');
    };


    const [state, setState] = useState({
        user: JSON.parse(localStorage.getItem("user")),
        setUser: setUser,
        resetUser: resetUser,
    });

    return (
      <UserContext.Provider value={state}>
          {props.children}
      </UserContext.Provider>
    );
}
