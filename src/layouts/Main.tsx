import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'


const Main = () => {
    return (
        <Box sx={{
            position: "absolute",
            left: "250px",
            top: "100px",
            width: '80%'
        }}>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Box>
    )
}

export default Main