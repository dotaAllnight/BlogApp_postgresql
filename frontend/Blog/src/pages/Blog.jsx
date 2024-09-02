import React from 'react'

const Blog = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col w-[60%] overflow-hidden'>
                <h1 className='mt-1 text-4xl font-extrabold'>Is is worth investing in real estate ?</h1>

                <div className='flex mt-4 mb-4'>
                    <small>Jan 20 2024</small>
                </div>
                <img className='rounded-lg' src="https://picsum.photos/id/206/300/200" alt=''></img>

                <div>
                    <h2 className='text-1xl mt-2 mb-2'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose injected humour and the like Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Blog