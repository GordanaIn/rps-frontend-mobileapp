import React from "react";


export const fetchToken = () =>
    fetch("http://localhost:8080/auth/token")
        .then((response) => response.text());
;

export const startGame = (token) =>
    fetch("http://localhost:8080/games/start", {
        method: "GET",
        headers: {token: token, 'Content-Type': 'application/json'}
    })
        .then(response => response.json())
;
export const setNameToPlayer = (token, name) =>
   fetch("http://localhost:8080/users/name", {
        method: "POST",
        headers: {token: token,'Content-Type': 'application/json'},
       body: JSON.stringify({name: name})
    })
        .then(response => response.text())
;
export const allGames = (token) =>
    fetch("http://localhost:8080/games", {
        method: "GET",
        headers:{'Content-Type': 'application/json',
            token: token}
    })
        .then(response => response.json())
;
export const joinGame = (token, gameId) =>
  fetch("http://localhost:8080/games/join/" + gameId, {
        method: "GET",
        headers: {token: token,"Content-Type": "application/json"}
    })
        .then(response => response.json())
;
export const move = (token,sign) =>
    fetch("http://localhost:8080/games/move/" + sign, {
        method: "GET",
        headers: { token:token, "Content-Type": "application/json" }
    })
        .then(response => response.json())

;
export const getGameStatus = (token) =>
    fetch("http://localhost:8080/games/status", {
        method: "GET",
        headers: {token: token,"Content-Type": "application/json"}
    })
        .then(response => response.json())
;




