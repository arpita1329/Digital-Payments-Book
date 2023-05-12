import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { userFirstName } from '../utils/tokenHandler';
// components
import Iconify from '../components/iconify';
// sections
import { AppTasks, AppNewsUpdate, AppOrderTimeline } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function CustomerDashboard() {
  const theme = useTheme();
  console.log(userFirstName);
  return (
    <>
      <Helmet>
        <title> Digital Payments Book </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, {userFirstName}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Your Orders"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Order #198378 delivered',
                  '8 invoices to be paid',
                  'Order #37745 from September',
                  'New order packaged #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Retailer Contacted"
              list={[...Array(4)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.fullName(),
                description: [
                  'Thank you for clearing all payments',
                  'Mailed you receipt',
                  'Clear all payments asap',
                  'Mailed you the link to report the issue',
                  'Fixed your payment issue',
                ][index],
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Clear all due payments' },
                { id: '2', label: 'Contact to retailer' },
                { id: '3', label: 'Attend the meeting to review the retailers business' },
                { id: '4', label: 'Check mail to fix payment issue' },
                { id: '5', label: 'Buy products in bulk' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
