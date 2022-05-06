import React, { useRef, useState } from 'react';
import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormType } from '../types/formType';
import { Link } from 'react-router-dom';
import { useFormError } from '../hooks/fromHook';



const Login = () => {
  const [showPass, setShowPass] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormType>()
  const [erroredFields] = useFormError(errors)
  const onSubmit: SubmitHandler<FormType> = data => console.log(data)
  console.log(errors)

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant='h3'>Login</Typography>
        <Box sx={{ m: 4, width: '35%', textAlign: 'center' }}>
          <form style={{ display: "flex", flexDirection: 'column' }}>
            <TextField
              label="email"
              sx={{ mb: 4 }}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <TextField
              label="Password"
              {...register('password', { required: true })}
              type={showPass ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            {erroredFields && <Typography color='error'>{erroredFields}</Typography>}
            <Button
              onClick={handleSubmit(onSubmit)}
              variant='contained'
              color='success'
              sx={{ mt: 4, mb: 4 }}
            >
              Log In
            </Button>
          </form>
          <Typography>Don't have account <Link to='/register'>Sing Up?</Link></Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Login