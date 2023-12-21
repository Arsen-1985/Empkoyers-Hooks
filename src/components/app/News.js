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
/*
import * as React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'userId ', width: 210 },
    { field: 'title', headerName: 'title', width: 210 },

    {
        field: 'body',
        headerName: 'body',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, title: 'Snow', userId: 'Jon' },
    { id: 2, title: 'Lannister', userId: 'Cersei' },
    { id: 3, title: 'Lannister', userId: 'Jaime' },
    { id: 4, title: 'Stark', userId: 'Arya' },
    { id: 5, title: 'Targaryen', userId: 'Daenerys' },
    { id: 6, title: 'Melisandre', userId: null },
    { id: 7, title: 'Clifford', userId: 'Ferrara' },
    { id: 8, title: 'Frances', userId: 'Rossini' },
    { id: 9, title: 'Roxie', userId: 'Harvey' },
];

export default function News() {
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
}
*/
/*
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';

const News = () => {
    const getResourse = async (url) => {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Ошибка по адресу ${url}, статус ошибки ${response}`,
            );
        }
        return await response.json();
    };

    getResourse('https://jsonplaceholder.typicode.com/posts').then((data) =>
        console.log(data),
    );

    return (
        <div>
            <ResponsiveAppBar />
        </div>
    );
};

export default News;

*/
