import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (username && password) {
            try {
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });
                const json = await response.json();
    
                if (response.ok) {
                    // Handle successful login
                    props.onLogin();
                    navigate('/products');
                    console.log(json);
                } else {
                    // Handle login error
                    console.error(json);
                }
            } catch (err) {
                // Handle request error
                console.error(err);
            }
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (username && password && confirmPassword && email && password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
        } else if (!username || !password || !confirmPassword || !email) {
            setErrorMessage("All fields are required")
        } else if (username && password && confirmPassword && email && password === confirmPassword) {
            setErrorMessage("");
            try {
                const response = await fetch('http://localhost:5000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password, email })
                });
    
                const json = await response.json();
    
                if (response.ok) {
                    // Handle successful signup
                    console.log(json);
                    setIsLoginPage(true);
                } else {
                    // Handle signup error
                    console.error(json);
                }
            } catch (err) {
                // Handle request error
                console.error(err);
            }
        }
    };

    if (isLoginPage) {
        return (
            <div>
                <h1>Login</h1>
                <div className='LoginForm'>
                <form onSubmit={handleLogin}>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
                <button onClick={() => setIsLoginPage(false)}>Switch to Signup</button>
                </div>
            </div>
        );
    } else {
        return (
            <div>
            <h1>Signup</h1>
            <div className='SignupForm'>
                <p>{errorMessage}</p>
                <form onSubmit={handleSignup}>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit">Signup</button>
                </form>
                <button onClick={() => setIsLoginPage(true)}>Switch to Login</button>
                </div>
            </div>
        );
    }
}

export default LoginForm;