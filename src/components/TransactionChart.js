import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Paper } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            // position: 'top',
        },
        title: {
            display: true,
            // text: 'Transactions',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August","September","October","November","December"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Transactions',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 70 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};
const TransactionChart = () => {

    return (
        <Paper sx={{ boxShadow: 6, display: 'flex', justifyContent: "center" }}>
            <Line options={options} data={data} height="190px" width={800}/>
        </Paper>
    );
}

export default TransactionChart