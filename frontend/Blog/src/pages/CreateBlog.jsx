import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Createblog = () => {
    const [value, setValue] = useState('');
    const menu = [
        { text: 'Nature', path: '/' },
        { text: 'Travel', path: '/' },
        { text: 'Technology', path: '/' },
        { text: 'Politics', path: '/' },

    ]
    return (
        <div className="flex w-full items-center justify-center">
            <div className="bg-slate-300 w-[60%] p-5 rounded-xl">
                <h1 className="text-2xl mb-5"> Create Blog post</h1>
                <div className="flex flex-col">
                    <label htmlFor="" className="ml-1 text-gray-500">Title</label>
                    <input type="text" className="h-10 border border-grey-300 rounded my-2 p-2" />
                    <label htmlFor="" className="ml-1 text-gray-500">Category</label>
                    <select name="" id="" className="h-10 text-gray-500">
                        {menu.map(x => {
                            return <option value={x.text}>{x.text}</option>
                        })}
                        <option value="">Default</option>
                    </select>
                    <label htmlFor="" className="ml-1 text-gray-500">Picture</label>
                    <input type="file" className=" border-gray-300 my-2 p-2" />
                    <label htmlFor="" className="ml-1 text-gray-500">Post</label>
                    <ReactQuill className='bg-white rounded mb-2 mt-2 editinggarea' theme="snow" value={value} onChange={setValue}></ReactQuill>
                    <hr />
                    <button className="bg-slate-500 text-white h-9 w-[100px] mt-5 rounded">Submit</button>
                </div>

            </div>
        </div>
    );
}

export default Createblog;