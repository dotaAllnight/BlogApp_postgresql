import React from 'react'
import { Link } from 'react-router-dom';

const Blogcard = (props) => {
    let blogdata = props.blogdata;
    return (
        <div className='bg-white shadow-md overflow-hidden rounded-xl'>
            <Link to='/blog'>
                <div className='flex flex-col w-full'>
                    <img src={blogdata.image} alt="" />
                    <div className='p-1'>
                        <h3 className='mt-1 text-xl text-left'>{blogdata.title}</h3>
                        <p className='text-sm text-left opacity-70'>{blogdata.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Blogcard;