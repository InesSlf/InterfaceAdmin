import { useState, ChangeEvent, FormEvent } from "react";
import logo from '../assets/logo.jpg';
import img from '../assets/image.png';
import '../styles/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

export default function Login() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matricule: user.userName, 
          annéeBac: user.password,  
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Login successful! Welcome to USTHB.");
      } else {
        setErrorMessage(data.message || "Invalid username or password.");
      }
    } catch (error) {
      setErrorMessage("Server error. Please try again later.");
    }
  };
  

  return (
    <div className="container">
      <div className="login-section">
        <div className="logo">
          <img src={logo} alt="USTHB" />
        </div>
        <h2>Université des Sciences et Technologies Houari Boumediene</h2>
        <h3>Student Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              id="userName"
              type="text"
              name="userName"
              placeholder="Login Name"
              value={user.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-key"></i>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
      <div className="image-section">
        <img src={img} alt="USTHB Campus" />
      </div>
    </div>
  );
}
