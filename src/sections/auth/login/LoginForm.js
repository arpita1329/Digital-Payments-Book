import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// API
import { loginCheck } from '../../../utils/apiCalls';
// components
import Iconify from '../../../components/iconify';
// ----------------------------------------------------------------------

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [utype, setUType] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = () => {
    const data = { email, password, utype };
    if (!data.email) return toast.error('Email Required');
    if (!validateEmail(data.email)) return toast.error('Invalid Email');
    if (!data.password) return toast.error('Password Required');
    if (!data.utype) return toast.error('User Type Required');
    return loginCheck(data);
  };

  const handleUTypeChange = (event) => {
    setUType(event.target.value);
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
      <Stack justifyContent="space-between" sx={{ mb: 1 }} fontSize={20} fontStyle={'italic'}>
        Signing in as:
        <RadioGroup row aria-label="usertype" name="usertype" onChange={handleUTypeChange}>
          <FormControlLabel value="customer" control={<Radio />} label="Customer" />
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />
        </RadioGroup>
      </Stack>
      <Stack spacing={3}>
        <TextField id="email" name="email" label="Email address" onChange={handleEmailChange} />
        <TextField
          name="password"
          label="Password"
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
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleSubmit}>
        Login
      </LoadingButton>
    </>
  );
}
