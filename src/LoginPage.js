import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleLogin = () => {

        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData && userData[0].email === email && userData[0].password === password) {
            navigate('./HomePage')
        }

        else {
            alert('Invalid username or password')
        }
    };

    return (
        <div className="mainpage">

            <div className="form form_2">

                <h2 className='Head'> Login Page</h2>
                <div className='middle middle_2 '>
                    <h4>Email</h4>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <h4>Password</h4>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="bottom">

                    <Link to='/' className='link'>Don't have an account? Register</Link>

                    <button className='button' onClick={handleLogin}>Login</button>
                </div>

            </div>
        </div>)
}

export default LoginPage;