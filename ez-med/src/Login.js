import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';
// Inside the handleLogin function


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://localhost:8080/users/email/${username}`);
            if (!response.ok) {
                console.log('User not found');
            }
            const user = await response.json();
            if (password === user.password) {
                console.log('Login successful');
                localStorage.setItem('userid', user._id);
                history.push("/App");
            } else {
                alert('Incorrect password');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
