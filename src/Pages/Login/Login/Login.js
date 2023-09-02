import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  toast } from 'react-hot-toast';


const Login = () => {

    const [error, setError] = useState('');

    const {login, setLoading} = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            if(user.emailVerified){
                navigate(from, {replace: true});
                toast.success('Login Successfully.!');
            }
            else{
                toast.error('Verify Your Email');
            }
            
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
        .finally( () => {
            setLoading(false);
        })


        
        
    }


    return (
        <Form onSubmit={handleLogin} className='w-75 mx-auto'>
            <h3 className="text-center">Login...!</h3>
            <Form.Group className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2} className='mx-2'>
                    Email
                </Form.Label>
                <Form.Control name='email' type="email" placeholder="example@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2} className='mx-2'>
                    Password
                </Form.Label>
                <Form.Control  className='fs-5' name="password" type="password" placeholder="********" />
            </Form.Group>
            <Form.Text className='text-danger mb-3'>
                {error}
            </Form.Text>
            <Form.Text>
                <p className='text-light mx-3'>Don't have an account.? <Link to='/register' className='text-warning'><b>Register</b></Link></p>
            </Form.Text>
            <Form.Group className="mb-3 w-25 mx-auto ">
                <Button className='mx-3 mt-5' variant='warning' type="submit">Login</Button>
            </Form.Group>
        </Form>
    );
};

export default Login;