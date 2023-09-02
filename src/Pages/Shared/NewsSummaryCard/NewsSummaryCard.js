import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsSummaryCard = ({ news }) => {
    const { _id, author, details, image_url,rating,  title, total_view } = news;
    return (
        <Card className="">
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            roundedCircle
                            src={author?.img}
                            style={{ height: '70px' }}
                        ></Image>
                        <div className='mx-2 fs-6'>
                            <p>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div className='me-2'>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250
                            ?
                            <span>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></span>
                            :
                            <span>{details}</span>
                    }

                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div className='d-flex justify-content-center align-items-center'>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;