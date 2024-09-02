import axios from 'axios';

const apiURL = 'http://localhost:3000';

export const getBlogs = () => {
    //return 
    return axios.get(apiURL + '/blog')
        .then(result => {
            return result.data
        })
        .catch(error => {
            return error
        });
}

export const createBlog = (data) => {
    //return
    return axios.post(apiURL + '/blog', data)
        .then(result => {
            return result.data
        })
        .catch(error => {
            return error
        })
}

export const getBlogbyid = () => {

}