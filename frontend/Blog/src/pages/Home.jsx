import React from 'react'
import Blogcard from '../components/Blogcard';

const Home = () => {
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
                {data.map(x => {
                    return <Blogcard blogdata={x} />

                })}
            </div>
        </div>
    );
}

export default Home;