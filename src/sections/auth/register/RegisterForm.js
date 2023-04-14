import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox,  RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';



// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Stack spacing={3}  fontSize={20} fontStyle={'italic'}>
        Creating account for 
      <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
         
        >
          <FormControlLabel value="customer" control={<Radio />} label="Customer" />
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />

        </RadioGroup>
        <TextField name="username" label="UserName" />
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="New Password"
          type={showPassword ? 'text' : 'password'}
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

        <TextField
          name="rpassword"
          label="Retype Password"
          type={showPassword ? 'text' : 'password'}
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

      <Stack direction="row" alignItems="center" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Agree to terms-and-condition" />
        Agree to terms and conditions
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Register
      </LoadingButton>
    </>
  );
}
