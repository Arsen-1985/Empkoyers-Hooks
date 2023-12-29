import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ResponsiveAppBar from './ResponsiveAppBar';
import CommentDialog from './CommentDialog';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'userId ', width: 70 },
    { field: 'title', headerName: 'title', width: 210 },
    { field: 'body', headerName: 'body', width: 210 },
    {
        field: 'comments',
        headerName: 'Comments',
        width: 210,
        editable: true,
    },
];

const News = () => {
    const [rows, setRows] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts',
                );
                const data = await response.json();

                const formattedRows = await Promise.all(
                    data.map(async (post) => {
                        const commentsResponse = await fetch(
                            `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`,
                        );
                        const commentsData = await commentsResponse.json();

                        const comments = commentsData
                            .map((comment) => `(${comment.id})`)
                            .join('\n');

                        return {
                            id: post.id,
                            userId: post.userId,
                            title: post.title,
                            body: post.body,
                            comments:
                                comments ||
                                localStorage.getItem(`comments-${post.id}`) ||
                                '',
                        };
                    }),
                );

                setRows(formattedRows);
            } catch (error) {
                console.error('Error while receiving data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCellClick = async (params) => {
        if (params.field === 'comments') {
            const postId = params.id;
            setSelectedPost(postId);
        } else if (params.field === 'title' || params.field === 'body') {
            const postId = params.id;
            const post = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${postId}`,
            );
            const postData = await post.json();
            if (postData) {
                const content =
                    params.field === 'title' ? postData.title : postData.body;
                setModalContent(content);
                setOpenModal(true);
            }
        }
    };

    const handleCommentDialogClose = () => {
        setSelectedPost(null);
    };

    const handleAddComment = (comment) => {
        const updatedRows = rows.map((row) =>
            row.id === selectedPost
                ? { ...row, comments: row.comments + '\n' + comment }
                : row,
        );
        setRows(updatedRows);

        localStorage.removeItem(`comments-${selectedPost}`);

        handleCommentDialogClose();
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
            <ResponsiveAppBar />
            <DataGrid
                rows={rows}
                columns={columns.map((column) => ({
                    ...column,
                    renderCell: (params) => (
                        <div
                            onClick={() => handleCellClick(params)}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                cursor: 'pointer',
                            }}
                        >
                            {params.value}
                        </div>
                    ),
                }))}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                onCellClick={handleCellClick}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
            />
            <CommentDialog
                open={!!selectedPost}
                onClose={handleCommentDialogClose}
                onAddComment={handleAddComment}
            />
            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>{'Post Content'}</DialogTitle>
                <DialogContent>{modalContent}</DialogContent>
            </Dialog>
        </div>
    );
};

export default News;
