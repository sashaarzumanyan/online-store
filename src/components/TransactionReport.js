import React from 'react'
import { Divider, Grid, LinearProgress, Paper, Typography } from '@mui/material'

const TransactionReport = ({ balance, benefit }) => {
    const usedSum = benefit.reduce((acc, obj) => acc + obj.price, 0)
    const progress = 100 / ((balance + usedSum) / usedSum)
    console.log(progress);
    return (
        <Paper sx={{ textAlign: 'center', boxShadow: 6 }}>
            <Typography variant='h5'>Your Balance</Typography>
            <Typography variant='h6' color="primary.main">{balance}$</Typography>
            <Divider sx={{ width: "100%", mt: 3, mb: 3 }} />
            <Grid container>
                <Grid item
                    xs={6}
                    sx={{
                        pb: 3,
                        display: 'flex',
                        alignItems: "center",
                        flexDirection: "column"
                    }}
                >
                    <Typography color="secondary">{usedSum}$</Typography>
                    <Typography>Expenses</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="secondary"
                        value={progress}
                        sx={{ width: "80%", borderRadius: 5 }}
                    />
                </Grid>
                <Grid item
                    xs={6}
                    sx={{
                        pb: 3,
                        display: 'flex',
                        alignItems: "center",
                        flexDirection: "column"
                    }}
                >
                    <Typography color="success.main">{benefit.length}</Typography>
                    <Typography>Expenses</Typography>
                    <LinearProgress
                        variant="determinate"
                        color="success"
                        value={benefit.length}
                        sx={{ width: "80%", borderRadius: 5 }}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TransactionReport