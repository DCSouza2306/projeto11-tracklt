import React, {useState} from "react";

export const AuthContext = React.createContext({});


export function AuthProvider (props) {
    const [dadosUsuario, setDadosUsuario] = useState({});
    const [percentual, setPercentual ]= useState({})

    return(
        <AuthContext.Provider value={{dadosUsuario, setDadosUsuario, percentual, setPercentual}}>
            {props.children}
        </AuthContext.Provider>
    )

}
