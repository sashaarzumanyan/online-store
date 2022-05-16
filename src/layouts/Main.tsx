import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Transactions from '../pages/Transactions'


const Main = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/transactions' element={<Transactions />} />
            </Routes>
        </>
    )
}

export default Main