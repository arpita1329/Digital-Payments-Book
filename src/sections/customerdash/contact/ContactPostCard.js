// @mui
import { Stack, TextField, Checkbox, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function ContactPostCard() {
  const handleClick = () => {
    window.alert(
      'Mail of your problem has been shared with you. Your problem has been shared with the retailer as well. You will get a response asap. Thank you for contacting'
    );
  };

  return (
    <>
      <Stack direction="row" alignItems="center" mb={4} marginTop={-10}>
        <Typography variant="h4" gutterBottom>
          Contact form
        </Typography>
      </Stack>
      <Stack spacing={3}>
        <TextField name="email" label="Your Email address" />
        <TextField name="email" label="Retailers Email address" />
        <TextField name="desc" label="Write your problem here..." />
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ my: 2 }}>
        <Checkbox />
        Want an email for the same
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Send
      </LoadingButton>
    </>
  );
}
