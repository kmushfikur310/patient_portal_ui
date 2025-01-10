import * as React from 'react';
import Box from '@mui/material/Box';
import { 
        Button,
        FormControl,
        InputLabel,
        Select,
        MenuItem
        } from '@mui/material/';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { get, post } from '../Utils/api';

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
    const [timeSlot, setTimeSlot] = React.useState("");
    const [appointmentDetails, setAppointmentDetails] = React.useState({
        doctorName: "",
        patientId: "",
        doctorId: "",
        timeslot: "",
        appointmentDescription: "",
        additionalInfo: ""
    });
    const [doctors, setDoctors] = React.useState([]);
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);  // Storing the date in state
        console.log('Selected Date:', newDate?.format('YYYY-MM-DD')); // Optional logging
    };

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setAppointmentDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const getTimeSlot  = (slot) => {
        debugger
        setTimeSlot(slot);
    }

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
    const getDoctors = async() => {
        debugger
        try {
            const response = await get('/api/auth/signup');
            setDoctors(response.data);
            navigate("/login");
        } catch (err) {
            console.error(err);
        } 
    }
    React.useEffect(() => {
        getDoctors();
    }, []);
    // console.log(appointmentDetails, timeSlot, selectedDate);
    console.log(doctors);
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
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Doctor</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="doctorName"
                                        value={appointmentDetails.doctorName}
                                        label="Age"
                                        onChange={e => handleChangeInput(e)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
                                        <DatePicker 
                                            label="Basic date picker" 
                                            sx={{ width: '100%' }} 
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <Typography variant="subtitle1" sx={{ marginBottom: "20px" }}>
                            Available Time Slots
                        </Typography>
                        <Grid container rowSpacing={3}>
                            <Grid item xs={4}>
                                <Button onClick={e => getTimeSlot("09:00-09:30")} variant="outlined">9:00 AM - 9:30 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={e => getTimeSlot("09:30-10:00")} variant="outlined">9:30 AM - 10:100 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={e => getTimeSlot("10:00-10:30")} variant="outlined">10:00 AM - 10:30 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={e => getTimeSlot("10:30-11:00")} variant="outlined">10:30 AM - 11:00 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={e => getTimeSlot("11:00-11:30")} variant="outlined">11:0 AM - 11:30 AM</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={e => getTimeSlot("11:30-12:00")} variant="outlined">11:30 AM - 12:00 PM</Button>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Reason for Visit"
                                    style={{ width: "100%" }}
                                    multiline
                                    name="appointmentDescription"
                                    value={appointmentDetails.appointmentDescription}
                                    onChange={e => handleChangeInput(e)}
                                    rows={3}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Additional Notes (Optional)"
                                    style={{ width: "100%" }}
                                    multiline
                                    name="additionalInfo"
                                    value={appointmentDetails.additionalInfo}
                                    onChange={e => handleChangeInput(e)}
                                    rows={3}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button style={{ width: "100%" }} variant="contained">
                                    Confirm Booking
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Card>
        </AppointmentContainer>
    );
};

export default BookAppointment;