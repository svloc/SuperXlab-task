

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import loginImg from '../../Assets/login-img.jpg';
import { Button } from 'primereact/button';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { PATH_NAME } from '../Utils/PathName';

function Login() {
    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({});
    const [formError, setFormError] = useState({});
    const navigate = useNavigate();
    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        setFormError({});
        if (!formData.email || formData.email.trim().length === 0) {
            setFormError({ ...formError, emailError: "Email is required" });
            return;
        }
        if (!formData.password || formData.password.trim().length === 0) {
            setFormError({ ...formError, passwordError: "Password is required" });
            return;
        }
        if (!Object.keys(formError).length) {
            navigate(PATH_NAME.DASHBOARD, { replace: true });
        }
    }
    return (
        <div className="flex align-items-center justify-content-center h-screen">
            <div className="surface-card p-4 pt-0 shadow-2 border-round w-full lg:w-4">
                <div className="text-center mb-5">
                    <img src={loginImg} alt="hyper" height={50} className="login-img" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome Back!</div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" name="email" onChange={handleChange} value={formData.email} />

                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password" placeholder="Password" className="w-full mb-3" name="password" type='password' onChange={handleChange} value={formData.password} />

                    <div className="flex align-items-center justify-content-between mb-4">
                        <div className="flex align-items-center">
                            <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                            <label htmlFor="rememberme" className='m-0'>Remember me</label>
                        </div>
                        <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                    </div>

                    <Button disabled={!formData.email || !formData.password} onClick={handleSubmit} type="submit" label="Sign In" icon="pi pi-user" className="w-full" />
                </div>
            </div>
        </div>

    )
}

export default Login;
