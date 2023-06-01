// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConf = [
  {
    title: 'dashboard',
    path: '/customer/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'retailer',
    path: '/customer/retailer',
    icon: icon('ic_user'),
  },
  {
    title: 'contact',
    path: '/customer/contact',
    icon: icon('ic_blog'),
  },
];

export default navConf;
