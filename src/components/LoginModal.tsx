import { Modal, Typography, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import React from 'react'
import { setOpen } from '../store/slice/configsSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const LoginModal: React.FC = () => {
    const open = useAppSelector(state => state.configs.open)
    const dispatch = useAppDispatch()

    const handleClose = (): void => {
        dispatch(setOpen(!open))
    }
    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography>Login</Typography>
            </Box>
        </Modal>
    )
}

export default LoginModal