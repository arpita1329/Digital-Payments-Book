import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import CustomerLayout from './layouts/customer/CustomerLayout';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import RegisterPage from './pages/RegisterPage';
import CustomerDashborad from './pages/CustomerDashboard';
import Retailer from './pages/Retailer';
import Contact from './pages/Contact';


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
      index: true
    },
    {
      path: 'register',
      element: <RegisterPage />
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    {
      path: 'customer',
      element: <CustomerLayout />,
      children: [
        { element: <Navigate to="/customer/dashboard" />, index: true},
        { path: 'dashboard', element: <CustomerDashborad/>},
        { path: 'retailer', element: <Retailer/> },
        { path: 'contact', element: <Contact /> },

      ]
    }
  ]);

  return routes;
}
