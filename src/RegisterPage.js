import { useState } from 'react';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {

        if (password === ConfirmPassword) {

            localStorage.setItem('userData', JSON.stringify([{ email, password, name }]));

            navigate('/Login')

        }

        else {
            alert('Password & Confirm Password should be same')
        }
    }
    return (
        <div className="mainpage">
            <form >
                <div className="form">

                    <h2 className='Head'> Register Page</h2>
                    <div className='middle'>
                        <h4>Name</h4>
                        <input
                            type="text"
                            placeholder="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
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
                        <h4>Confirm Password</h4>
                        <input
                            type="password"
                            placeholder="Password"
                            value={ConfirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className='bottom'>

                        <Link to='/Login' className='link'>Already have an account</Link>

                        <button className='button' onClick={handleRegister}>Register</button>
                    </div>

                </div>
            </form>
        </div>
    )
}
export default RegisterPage;