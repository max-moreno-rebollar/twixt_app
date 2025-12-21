import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "../styles/ui.css";

const Login = () => {
  const [userNameLogin, setUserNameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [userNameRegister, setUserNameRegister] = useState("");
  const [userPasswordRegister, setPasswordRegister] = useState("");

  const handleLoginSubmit = function () {};

  const handleRegisterSubmit = () => {};

  const handleUserNameLoginChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setUserNameLogin(event?.target.value);
  };

  return (
    <Container maxWidth="lg" className="auth-page">
      <Stack spacing={3} alignItems="center">
        <Stack spacing={0.5} className="auth-hero" textAlign="center">
          <Typography
            className="auth-kicker"
            variant="overline"
            fontWeight={700}
            textAlign="center"
          >
            Welcome back to Twixt
          </Typography>
          <Typography
            variant="h4"
            fontWeight={800}
            color="primary.light"
            textAlign="center"
          >
            Jump into your next match
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Sign in or create an account to start connecting your bridges and
            claim the board.
          </Typography>
        </Stack>

        <Stack
          spacing={2.5}
          direction={{ xs: "column", md: "row" }}
          alignItems="stretch"
          justifyContent="center"
          width="100%"
        >
          <Box flex={1} minWidth={0} maxWidth={520} width="100%">
            <Paper
              elevation={8}
              className="app-card"
              component="form"
              onSubmit={handleLoginSubmit}
            >
              <Stack spacing={2} height="100%">
                <Stack spacing={0.2}>
                  <Typography variant="overline" color="text.secondary">
                    Returning player
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    color="text.primary"
                  >
                    Sign in
                  </Typography>
                </Stack>

                <Stack spacing={1.5} flex={1}>
                  <TextField
                    label="Username"
                    placeholder="e.g. bluefox"
                    value={userNameLogin}
                    onChange={handleUserNameLoginChange}
                    name="username"
                    autoComplete="username"
                    fullWidth
                  />
                  <TextField
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={passwordLogin}
                    onChange={(event) => setPasswordLogin(event.target.value)}
                    name="password"
                    autoComplete="current-password"
                    fullWidth
                  />
                </Stack>

                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Enter the lobby
                </Button>
              </Stack>
            </Paper>
          </Box>

          <Box flex={1} minWidth={0} maxWidth={520} width="100%">
            <Paper
              elevation={8}
              className="app-card"
              component="form"
              onSubmit={handleRegisterSubmit}
            >
              <Stack spacing={2} height="100%">
                <Stack spacing={0.2}>
                  <Typography variant="overline" color="text.secondary">
                    New challenger
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    color="text.primary"
                  >
                    Create account
                  </Typography>
                </Stack>

                <Stack spacing={1.5} flex={1}>
                  <TextField
                    label="Username"
                    placeholder="Pick a handle"
                    value={userNameRegister}
                    onChange={(event) =>
                      setUserNameRegister(event.target.value)
                    }
                    name="username"
                    autoComplete="username"
                    fullWidth
                  />
                  <TextField
                    label="Password"
                    placeholder="Create a password"
                    type="password"
                    value={userPasswordRegister}
                    onChange={(event) =>
                      setPasswordRegister(event.target.value)
                    }
                    name="password"
                    autoComplete="new-password"
                    fullWidth
                  />
                </Stack>

                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Join the game
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Login;
