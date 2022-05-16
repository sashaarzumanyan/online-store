import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TransactionChart from '../components/TransactionChart'
import TransactionReport from '../components/TransactionReport'
import TransactionTable from '../components/TransactionTable'
import { useAppSelector } from '../hooks/redux'

const Transactions = () => {
  const { benefit, user } = useAppSelector(state => state)
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TransactionReport
            benefit={benefit}
            balance={user.balance}
          />
        </Grid>
        <Grid item xs={9}>
          <TransactionChart />
        </Grid>
        <Grid item xs={12}>
          <TransactionTable rows={benefit}/>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Transactions