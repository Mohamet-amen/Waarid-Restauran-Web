import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // meesha uu userka ka soo galaayo websiteka 
    if (username === 'GroupC','amiin','abdi' && password === 'GRP6','123','UNDO','2312') {
      navigate('/home'); // Redirect to the Home page
    } else {
      alert('Wax baa khaldan fadlan dib usax!!');
    }
  };
  return (
    <>
   <nav className="navigation">
      <div className="logo">🔒</div>
    </nav>
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login 🔐</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}
export default Login;
