import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// @mui
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// API
import { registerApi } from '../../../utils/apiCalls';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [utype, setUType] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleUTypeChange = (event) => {
    setUType(event.target.value);
  };
  const handleRePasswordChange = (event) => {
    setRePassword(event.target.value);
  };
  const passwordMatch = password === rePassword;

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = () => {
    const data = { email, password, name, utype };
    if (!data.email) return toast.error('Email Required');
    if (!validateEmail(data.email)) return toast.error('Invalid Email');
    if (!data.password) return toast.error('Password Required');
    if (!passwordMatch) return toast.error('Passwords does not Match');
    if (!data.name) return toast.error('Name Required');
    if (!data.utype) return toast.error('User Type Required');
    return registerApi(data);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Stack spacing={1.7} fontSize={18}>
        Creating account for
        <Stack fontStyle={'italic'}>
          <RadioGroup row aria-label="usertype" name="usertype" onChange={handleUTypeChange}>
            <FormControlLabel value="customer" control={<Radio />} label="Customer" />
            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          </RadioGroup>
        </Stack>
        <TextField name="Name" label="Name" onChange={handleNameChange} />
        <TextField name="email" label="Email address" onChange={handleEmailChange} />
        <TextField
          name="password"
          label="New Password"
          type={showPassword ? 'text' : 'password'}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField label="Retype Password" type="password" error={!passwordMatch} onChange={handleRePasswordChange} />
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Agree to terms-and-condition" />
        Agree to terms and conditions
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleSubmit}>
        Register
      </LoadingButton>
    </>
  );
}
