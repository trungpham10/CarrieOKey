import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"></input>
      </form>
    </div>
  );
}
