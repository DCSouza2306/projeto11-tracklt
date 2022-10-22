import React, {useState} from "react";

export const AuthContext = React.createContext({});

export function AuthProvider (props) {
    const [dadosUsuario, setDadosUsuario] = useState({});

    return(
        <AuthContext.Provider value={{dadosUsuario, setDadosUsuario}}>
            {props.children}
        </AuthContext.Provider>
    )

}