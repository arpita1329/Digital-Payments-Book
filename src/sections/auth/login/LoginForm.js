import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    if(value === 'admin'){
      navigate('/dashboard', { replace: true });
    }
    else if(value === 'customer'){
      navigate('/customer', { replace: true });
    }
    else{
      window.alert('Please fill all the necessary details');
    }
  };

  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Stack justifyContent="space-between" sx={{ my: 2 }} fontSize={20} fontStyle={'italic'}>
            Signing in as:
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="customer" control={<Radio />} label="Customer" />
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />

        </RadioGroup>
      </Stack>
      <Stack spacing={3}>

        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
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

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>


        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
