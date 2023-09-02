import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import './Register.css';
import { toast } from 'react-hot-toast';



const Register = () => {

    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);

    const { createUser, updateUser , verifyEmail} = useContext(AuthContext);


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUserProfile(name, photoURL);
                handleVerify();
                toast.success('We sent a link to your mail. Please verify your email address.');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });

        }
        const handleUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUser(profile)
            .then((result) => {})
            .catch(e => console.error(e));
    }


    const handleVerify = () => {
        verifyEmail()
        .then(() => {})
        .catch(e => console.error(e));
    }


    const handleAccept = (e) => {
        setAccept(e.target.checked);
    }

    return (
        <Form onSubmit={handleRegister} className='w-75 mx-auto'>
            <h3 className='text-center'>Register...!</h3>
            <Form.Group className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Name
                </Form.Label>
                <Form.Control name='name' type="text" placeholder="Isaac Newton" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Photo URL
                </Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="https://www.example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Form.Control name='email' type="email" placeholder="Example@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Form.Control name="password" type="password" placeholder="********" />
            </Form.Group>
            <Form.Text className='text-warning mb-4 fw-bolder'>
                {error}
            </Form.Text>
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check onClick={handleAccept} type="checkbox"
                    label={
                        <>
                        Accept <Link to='/terms' className='text-white'>Terms And Conditions</Link>
                        </>
                    }
                />
            </Form.Group>
            <Form.Text>
                <p className='text-light mx-3'>Already have an account.? <Link to='/login' className='text-warning'><b>Login</b></Link></p>
            </Form.Text>
            <Form.Group className="mb-3 w-25 mx-auto" >
                <Button className='mx-3 mt-5 buton' variant='warning'  disabled={!accept} type="submit">Register</Button>
            </Form.Group>
        </Form>
    );
};

export default Register;