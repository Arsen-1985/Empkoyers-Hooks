import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'userId ', width: 70 },
    { field: 'title', headerName: 'title', width: 210 },
    { field: 'body', headerName: 'body', width: 210 },
];

const News = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts',
                );
                const data = await response.json();

                const formattedRows = data.map((post) => ({
                    id: post.id,
                    userId: post.userId,
                    title: post.title,
                    body: post.body,
                }));
                setRows(formattedRows);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <ResponsiveAppBar />
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
};

export default News;
