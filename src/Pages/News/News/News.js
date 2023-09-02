import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaEye, FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const News = () => {
    const news = useLoaderData();
    const { author, details, image_url, title, total_view, rating, category_id } = news;
    return (
        <Card className="">
   
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title className='mt-3'>{title}</Card.Title>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mt-3'><b>Author:</b> {author.name}</p>
                    <p className='mt-3'><b>Publish Date </b>: {author.published_date}</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span className='fw-bold'>{rating?.number}</span>
                    </div>
                </div>

                <Card.Text>
                    {details}
                </Card.Text>
                <div className="text-center mt-5 mb-3">
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary" className='fw-bold p-2' >All News of this categories</Button>
                    </Link>
                </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div className='mx-auto'>
                    <FaEye className='me-2'></FaEye>
                    {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default News;