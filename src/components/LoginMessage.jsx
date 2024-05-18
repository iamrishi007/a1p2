// src/components/LoginMessage.jsx



function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn ?<p>Hello, User!</p>:<p>Access Denied</p>}</div>;
}

export default LoginMessage;
