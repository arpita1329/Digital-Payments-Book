import { userFullName, userEmail, isAdmin } from '../utils/tokenHandler';
// ----------------------------------------------------------------------

const account = {
  displayName: userFullName,
  email: userEmail,
  photoURL: '/assets/images/avatars/avatar_default.jpg',
  role: isAdmin ? 'Retailer' : 'Customer',
};

export default account;
