import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <div>
            <h3 className="text-center">Our Terms And Conditions</h3>
            <p className='text-center mt-5'>Back to  <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default TermsConditions;