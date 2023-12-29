import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`,
                );
                const data = await response.json();
                setPost(data.body);
            } catch (error) {
                console.error('Error while receiving data:', error);
            }
        };

        fetchPost();
    }, [id]);

    return (
        <div>
            <h2>Full text of the post</h2>
            <p>{post}</p>
            <Link to="/news">Return to news</Link>
        </div>
    );
};

export default PostDetails;
