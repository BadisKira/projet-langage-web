import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BalanceIcon from "@mui/icons-material/Balance";
import Image1 from "../../assets/images/Management.png";
import Image2 from "../../assets/images/Scrum.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSigninUp, setIsSigninUp] = React.useState(false);
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    pseudo: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handelClick = () => {
    if (!isSigninUp)
      console.log({ pseudo: form.pseudo, password: form.password });
    else console.log(form);
  };
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item xs={12} md={6}>
        <Stack
          alignItems="center"
          sx={{
            padding: "30px",
            height: "100%",
          }}
        >
          {/**LOGO ET TITRE  **/}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            <Link to="/">
              <BalanceIcon sx={{ fontSize: "4em", marginRight: "10px" }} />
            </Link>
            <Typography variant="h2" fontWeight={"bolder"} component="h2">
              <Link to="/">Frello </Link>
            </Typography>
          </Box>

          {/* LE FORMUALIRE  */}
          <Container
            maxWidth={"xs"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "white",
              minHeight: "500px",

              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
            }}
          >
            <form action="" method="post">
              <Stack direction={{ xs: "column" }} spacing={{ xs: 1, sm: 2 }}>
                {isSigninUp && (
                  <>
                    <TextField
                      onChange={handleChange}
                      required
                      size="medium"
                      type={"text"}
                      placeholder="First Name"
                      name="firstName"
                    />
                    <TextField
                      onChange={handleChange}
                      required
                      size="medium"
                      type={"text"}
                      placeholder="Last Name"
                      name="lastName"
                    />
                  </>
                )}

                <TextField
                  onChange={handleChange}
                  required
                  size="medium"
                  type={"text"}
                  placeholder="Pseudo"
                  name="pseudo"
                />

                <TextField
                  onChange={handleChange}
                  required
                  size="medium"
                  placeholder="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        sx={{ cursor: "pointer" }}
                        position="end"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  variant="contained"
                  size="large"
                  sx={{ textTransform: "capitalize" }}
                  onClick={handelClick}
                >
                  Send
                </Button>

                <Box>
                  {isSigninUp ? (
                    <>
                      Do you have an account ?
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => {
                          setIsSigninUp(false);
                        }}
                      >
                        Sign-up
                      </Button>
                    </>
                  ) : (
                    <>
                      You want to create an account for free
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => {
                          setIsSigninUp(true);
                        }}
                      >
                        Sign-in
                      </Button>
                    </>
                  )}
                </Box>
              </Stack>
            </form>
          </Container>
        </Stack>
      </Grid>
      <Grid
        item
        md={6}
        display={{ xs: "none", md: "flex" }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <img
          style={{
            width: "90%",
            height: "auto",
          }}
          src={Image1}
          alt="Kanban illustation"
        />
      </Grid>
    </Grid>
  );
};
export default LoginPage;
