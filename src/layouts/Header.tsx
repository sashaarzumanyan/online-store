import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { checkLogin, setOpen } from '../store/slice/configsSlice'

const Header = (): JSX.Element => {
  const { open, isLogin } = useAppSelector(state => state.configs)
  let navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(checkLogin())
  },[isLogin])

  const handleOpen = (): void => {
    navigate(`/login`)
  }
  return (
    <AppBar >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI
        </Typography>
        { !isLogin && <Button color="inherit" onClick={handleOpen}>Login</Button>}
      </Toolbar>
    </AppBar>
  )
}

export default Header