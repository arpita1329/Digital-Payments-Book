import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  product: sample([
    'Nike Air Force 1 NDESTRUKT',
    'Nike Space Hippie 04',
    'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    'Nike Blazer Low 77 Vintage',
    'Nike ZoomX SuperRep Surge',
    'Zoom Freak 2',
    'Nike Air Max Zephyr',
    'Jordan Delta',
    'Air Jordan XXXV PF',
    'Nike Waffle Racer Crater',
    'Kyrie 7 EP Sisterhood',
    'Nike Air Zoom BB NXT',
    'Nike Air Force 1 07 LX',
    'Nike Air Force 1 Shadow SE',
    'Nike Air Zoom Tempo NEXT%',
    'Nike DBreak-Type',
    'Nike Air Max Up',
    'Nike Air Max 270 React ENG',
    'NikeCourt Royale',
    'Nike Air Zoom Pegasus 37 Premium',
    'Nike Air Zoom SuperRep',
    'NikeCourt Royale',
    'Nike React Art3mis',
    'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
  ]),
  price: faker.datatype.number(),
  status: sample(['clear', 'pending']),
  quantity: sample(['50', '120', '200', '40', '85', '90', '340', '230', '300', '400']),
}));

export default users;
