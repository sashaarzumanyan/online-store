import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { CardMedia, Paper } from '@mui/material';

const TransactionTable = ({ rows }) => {

    const columns = [
        {
            field: 'image',
            headerName: 'ID',
            sortable: false,
            width: 100,
            renderCell: (params) => (
                <CardMedia
                    component="img"
                    height="auto"
                    image={params.row.image}
                    sx={{ borderRadius: "50%", width: "50px", height: "50px" }}
                />
            )
        },
        { field: 'company', headerName: 'Company', width: 200 },
        { field: 'name', headerName: 'Benefit', width: 200 },
        { field: 'date', headerName: "Date", width: 200 },
        { field: 'location', headerName: "Location", width: 200 },
        { field: 'price', headerName: 'Price', type: 'number', width: 150, }
    ];

    return (
        <Paper sx={{ height: 400, width: '100%', boxShadow: 6 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </Paper>
    )
}

export default TransactionTable