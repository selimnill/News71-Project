import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import {  GoogleAuthProvider } from 'firebase/auth';
import './right.css';



const RightSideNav = () => {
    const {googleSignIn, } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handlegoogleSignIn = () => {
        googleSignIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }

    // const githubProvider = new GithubAuthProvider();

    // const handleGithubSignIn = () => {
    //     githubSignIn(githubProvider)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //     })
    // }


    return (
        <div className='right-container'>
            <ButtonGroup vertical>
                <Button onClick={handlegoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                {/* <Button onClick={handleGithubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button> */}
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup className='list'>
                    <ListGroup.Item className='mb-2 items'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 items'><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2 items'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 items'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 items'><FaTwitch/> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;