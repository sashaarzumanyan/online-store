import React from "react"
import { Grid, Box, CardMedia, TextField, Button, Typography, Divider, ButtonGroup } from "@mui/material"
import background from '../static/background.jpg'
import loginUi from '../static/loginUi.png'
import { height } from "@mui/system"


const Login = () => {

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "100%",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        borderRadius: 3,
      }}
    >
      <Grid container sx={{ display: "flex", justifyContent: "space-around", height: "100%" }} >
        <Grid item xs={6} sx={{ display: { sm: "none", lg: 'block', xs: "none", md: "block" } }} >
          <CardMedia
            component="img"
            height="auto"
            image={loginUi}
            sx={{ mt: "10px", mb: "10px" }}
          />
        </Grid>
        <Grid item
          lg={6}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              height: "50%",
              width: "70%"
            }}
          >
            <TextField
              id="email"
              label="Email"
              variant="outlined"
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="success"
            >
              Login
            </Button>
            <Typography
              sx={{ textAlign: "center", color: "white" }}
            >
              Forgot password?
            </Typography>
            <Divider />
            <Button variant="contained">
              Sing Up
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box >
  )
}

export default Login