import React, { useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/user/actions";
import { userLoggedIn } from "../store/user/selector";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const loggedIn = useSelector(userLoggedIn)
  const history = useHistory()

  console.log("what is loggedin,", loggedIn)

  function handleSubmit(event) {
    event.preventDefault();
    //https://codaisseur-coders-network.herokuapp.com/login email=kelley@codaisseur.com password=abcd
    dispatch(login(email,password))
  }

  const logoutHandler = () => {
    console.log("please logout")
    dispatch({type: "LOGOUT"})
  }
  console.log("can i get the data from the LS???",  localStorage.getItem("lastname"))

  if(loggedIn){
    // const response = axios.get("localhost:4000/me")
    console.log("logged in??", loggedIn )
    history.push("/countries")
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email :{" "}
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>

      <button onClick={logoutHandler}>Logout </button>
    </div>
  );
}