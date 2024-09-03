import React from 'react'
import { Link } from 'react-router-dom';
import { IoApps } from 'react-icons/io5';

const Blogcard = (props) => {
    let blogdata = props.blogdata;
    const apiURL = 'http://localhost:3000/'
    console.log(blogdata);
    return (
        <div className='bg-white shadow-md overflow-hidden rounded-xl'>
            <Link to={`/blog/${blogdata.id}`}>
                <div className='flex flex-col w-full'>
                    <img height={'250px'} src={apiURL + blogdata.image} alt="" />
                    <div className='p-1'>
                        <h5 className='mt-1 text-xl text-left'>{blogdata.title}</h5>
                        <p className='flex justify-start    items-center opacity-70'>
                            <IoApps />
                            <span className='text-sm text-left ml-2'>
                                {blogdata.category}
                            </span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Blogcard;