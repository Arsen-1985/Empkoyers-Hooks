import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NewsId = () => {
    const location = useLocation();
    const postId = new URLSearchParams(location.search).get('postId');
    const content = new URLSearchParams(location.search).get('content');
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`,
                );
                const postData = await response.json();
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        if (postId) {
            fetchPost();
        }
    }, [postId]);

    return (
        <div>
            {post && (
                <div>
                    {content === 'title' && <h2>{post.title}</h2>}
                    {content === 'body' && <p>{post.body}</p>}
                </div>
            )}
        </div>
    );
};

export default NewsId;
