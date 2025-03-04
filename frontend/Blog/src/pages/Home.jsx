import React, { useEffect, useState } from 'react'
import Blogcard from '../components/Blogcard';
import { getBlogs } from '../api/Api';
import { useSearchParams } from 'react-router-dom';

const Home = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const allBlogs = await getBlogs();
            setBlogs(allBlogs.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            /*        let category = searchParams.get('category');*/
            const allBlogs = await getBlogs(searchParams.get('category'));
            setBlogs(allBlogs.data);
        }
        fetchData();
    }, [searchParams]);


    const data = [
        {
            title: 'Is is worth investing in real estate ?',
            image: 'https://picsum.photos/id/206/300/200',
            description: 'Lorem Ipsum is simply',
            createdon: '24 Jan 2024',
            comments: '0'
        },
        {
            title: 'Is is worth investing in real ',
            image: 'https://picsum.photos/id/208/300/200',
            description: 'Lorem Ipsum is simply',
            createdon: '24 Jan 2024',
            comments: '0'
        },
        {
            title: 'Is is worth investing in real ',
            image: 'https://picsum.photos/id/209/300/200',
            description: 'Lorem Ipsum is simply',
            createdon: '24 Jan 2024',
            comments: '0'
        },
        {
            title: 'Is is worth investing in real ',
            image: 'https://picsum.photos/id/212/300/200',
            description: 'Lorem Ipsum is simply',
            createdon: '24 Jan 2024',
            comments: '0'
        },
        {
            title: 'Is is worth investing in real ',
            image: 'https://picsum.photos/id/201/300/200',
            description: 'Lorem Ipsum is simply',
            createdon: '24 Jan 2024',
            comments: '0'
        },
        {
            title: 'Is is worth investing in real ',
            image: 'https://picsum.photos/id/202/300/200',
            description: 'Lorem Ipsum is simply',
            createdon: '24 Jan 2024',
            comments: '0'
        },
    ]

    return (
        <div>

            <div className="grid sm:grid-cols- md:grid-cols-3 gap-5">
                {blogs && blogs.map((x, i) => {
                    return <Blogcard key={i} blogdata={x} />

                })}
            </div>
        </div>
    );
}

export default Home;