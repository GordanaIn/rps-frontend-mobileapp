import React, {createContext, useEffect, useState} from "react";
import {fetchToken} from "../fetch/FetchToGame";

export const TokenContext = createContext("");

export default ({children}) =>{
    const [token, setToken] = useState("");
    useEffect(()=>{
        fetchToken()
            .then((newToken) => {
                setToken(newToken)
                console.log("token", newToken);
            })
            .catch((error) => console.error(error));
    }, [])
    return (
        <TokenContext.Provider value={token}>
            {children}
        </TokenContext.Provider>
    )
}
