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
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
// import ForgotPassword from './ForgotPassword';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from '../shared-theme/ColorModeSelect';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        maxWidth: '850px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
    backgroundColor: "#FFF"
}));

const AppointmentContainer = styled(Stack)(({ theme }) => ({
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

const BookAppointment = (props) => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [loginDetails, setLoginDetails] = React.useState({
        email: "",
        password: ""
    });

    const handleLoginInput = e => {
        const { name, value } = e.target;
        setLoginDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
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
    return (
        <AppointmentContainer direction="column" justifyContent="space-between">
            <Card variant="outlined">
                <Typography variant="h4" sx={{ color: "#0099d7", textAlign: "center" }}>
                    Book an Appointment
                </Typography>
                <div
                    style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}
                >
                    <div style={{ margin: "10px" }}>
                        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Hello World"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-disabled"
                                    label="Disabled"
                                    defaultValue="Hello World"
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <Typography>
                            Available Time Slots
                        </Typography>
                        <Grid container rowSpacing={3}>
                            <Grid item xs={4}>
                                <Button variant="outlined">9:00 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined">9:30 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined">9:30 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined">9:30 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined">9:30 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined">9:30 AM</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Card>
        </AppointmentContainer>
    );
};

export default BookAppointment;