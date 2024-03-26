import React, { useState } from 'react';

function LoginForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            // Handle login
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (username && password && confirmPassword && email && password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
        } else if (!username || !password || !confirmPassword || !email) {
            setErrorMessage("All fields are required")
        } else if (username && password && confirmPassword && email && password === confirmPassword) {
            setErrorMessage("");
            // Handle signup
        }
    };

    if (isLogin) {
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
                <button onClick={() => setIsLogin(false)}>Switch to Signup</button>
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
                <button onClick={() => setIsLogin(true)}>Switch to Login</button>
                </div>
            </div>
        );
    }
}

export default LoginForm;