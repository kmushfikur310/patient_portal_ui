import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { get, post } from '../Utils/api';
import toastr from 'toastr';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 90dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

export default function SignUp(props) {
    const navigate = useNavigate();
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [signupDetails, setSignupDetails] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "patient",
        gender: "Male",
        age: 30
    });
    const [userDetails, setUserDetails] = React.useState(null);

    const handleSignUpInput = e => {
        const { name, value } = e.target;
        setSignupDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };
    console.log(signupDetails);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        if (emailError || passwordError) {
            event.preventDefault();
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    const registerUser = async () => {
        if (signupDetails.firstname === "") {
            return toastr.success("First name is required");
        }
        if (signupDetails.email === "") {
            return toastr.success("Email is required");
        }
        if (signupDetails.phoneNumber === "") {
            return toastr.success("Phone number is required");
        }
        if (signupDetails.password === "") {
            return toastr.success("Password is required");
        }
        try {
            const response = await post('/api/auth/signup', JSON.stringify(signupDetails));
            setUserDetails(response.data)
            toastr.success(response.data.message);
            navigate("/login");
        } catch (err) {
            console.error(err);
        } finally {

        }
    };

    const userLogin = () => {
        navigate("/dashboard");
    }

    const takeToLogin = () => {
        navigate("/login");
    }

    return (
        <SignInContainer direction="column" justifyContent="space-between">
            {/* <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} /> */}
            <Card variant="outlined">
                <div style={{ textAlign: "center" }}>
                    <img src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg" width='75' alt="Logo" />
                </div>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: "center", color: "#0099d7" }}
                >
                    Sign Up
                </Typography>
                <Box
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    <FormControl>
                        <FormLabel htmlFor="email">First Name</FormLabel>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id="firstname"
                            type="firstname"
                            name="firstname"
                            value={signupDetails.firstname}
                            placeholder="First Name"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            onChange={e => handleSignUpInput(e)}
                            color={emailError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Last Name</FormLabel>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id="email"
                            type="lastname"
                            name="lastname"
                            value={signupDetails.lastname}
                            placeholder="Last Name"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            onChange={e => handleSignUpInput(e)}
                            color={emailError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id="email"
                            type="email"
                            name="email"
                            value={signupDetails.email}
                            placeholder="your@email.com"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            onChange={e => handleSignUpInput(e)}
                            color={emailError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">phone Number</FormLabel>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id="phoneNumber"
                            type="number"
                            name="phoneNumber"
                            value={signupDetails.phoneNumber}
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            onChange={e => handleSignUpInput(e)}
                            color={emailError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <TextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            name="password"
                            placeholder="••••••"
                            type="password"
                            id="password"
                            value={signupDetails.password}
                            autoComplete="current-password"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            onChange={e => handleSignUpInput(e)}
                            color={passwordError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: "#8bc63f", color: "#FFF" }}
                        onClick={registerUser}
                    >
                        Sign Up
                    </Button>
                    <Link
                        component="button"
                        type="button"
                        onClick={takeToLogin}
                        variant="body2"
                        sx={{ alignSelf: 'center', color: "#0099d7" }}
                    >
                        Already have an Account? Login here
                    </Link>
                </Box>
            </Card>
        </SignInContainer>
    );
}