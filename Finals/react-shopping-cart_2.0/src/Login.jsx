import React, { useState } from "react";
import Shop from "./Shop";
import AdminPanel from "./AdminPanel";

export default function Login() {
  let items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 },
  ]; //list of objects to be imported as props

  //accounts list
  let accounts = [
    { id: 1, username: "customer", password: "customer", role: "customer" },
    { id: 2, username: "admin", password: "admin", role: "admin" },
    { id: 1, username: "customer2", password: "customer", role: "customer" },
    { id: 1, username: "customer3", password: "customer", role: "customer" },
  ];

  //boolean state for logging in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //variables for user Roles
  const [role, setRole] = useState("");
  //varaibles for usernames
  const [enteredUsernames, setEnteredUsernames] = useState("");
  //variables for passwords
  const [enteredPasswords, setEnteredPasswords] = useState("");
  //functional handles for updating our username states
  function getUsernames(event) {
    setEnteredUsernames(event.target.value);
  }
  //functional handles for updating our password states
  function getPasswords(event) {
    setEnteredPasswords(event.target.value);
  }
  //functional handles for handling the login process
  function handleLogin() {
    accounts.map((account) => {
      if (account.username === enteredUsernames && account.password === enteredPasswords) {
        setIsLoggedIn(true);
        setRole(account.role);
      }
    });
  }
  //component for rendering the login page
  const renderLogin = () => {
    return(
      <div>
        <h1>Login:</h1>
        Username: <input type="text" placeholder="Username" id= "username" onChange={getUsernames} />
        Password: <input type="text" placeholder="Password" id= "Password" onChange={getPasswords} />
        <button onClick={handleLogin}>Login</button>
      </div>
    )
  };
  //component for rendering the shop
  const renderShop = () => {
    return(
      <Shop isLoggedIn = {isLoggedIn} items = {items} />
    )
  }
  //component for rendering the admin panel
  const renderAdmin = () => {
    return(
      <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts} />
    )
  }
  
  if(isLoggedIn === false){
    return renderLogin()
  }
  else{
    if(role === "customer"){
      return renderShop()
    }
    else{
      return renderAdmin()
    }
  }
 
}
