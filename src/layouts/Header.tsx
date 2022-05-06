import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setOpen } from '../store/slice/configsSlice'

const Header = (): JSX.Element => {
  const open = useAppSelector(state => state.configs.open)
  const dispatch = useAppDispatch()

  const handleOpen = (): void =>{
    dispatch(setOpen(!open))
  }
  return (
    <AppBar >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI 
        </Typography>
        <Button color="inherit" onClick={handleOpen}>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header