/*!

=========================================================
* Argon Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.

*/
import Buttons from './views/pages/components/buttons';
import Cards from './views/pages/components/cards';
import Components from './views/pages/forms/components';
import Dashboard from './views/pages/dashboard';
import Elements from './views/pages/forms/elements';
import Grid from './views/pages/components/grid';
import Icons from './views/pages/components/icons';
import Lock from './views/pages/examples/lock';
import Login from './views/pages/examples/login';
import Notifications from './views/pages/components/notifications';
import Pricing from './views/pages/examples/pricing';
import Profile from './views/pages/examples/profile';
import ReactBSTables from './views/pages/tables/react-bs';
import Register from './views/pages/examples/register';
import RTLSupport from './views/pages/examples/rtl-support';
import Tables from './views/pages/tables/regular';
import Timeline from './views/pages/examples/timeline';
import Typography from './views/pages/components/typography';
import Validation from './views/pages/forms/validation';

const routes = [
  {
    collapse: true,
    name: 'Dashboards',
    icon: 'ni ni-shop text-primary',
    state: 'dashboardsCollapse',
    views: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        miniName: 'D',
        component: Dashboard,
        layout: '/admin',
      },
    ],
  },
  {
    collapse: true,
    name: 'Examples',
    icon: 'ni ni-ungroup text-orange',
    state: 'examplesCollapse',
    views: [
      {
        path: '/pricing',
        name: 'Pricing',
        miniName: 'P',
        component: Pricing,
        layout: '/auth',
      },
      {
        path: '/login',
        name: 'Login',
        miniName: 'L',
        component: Login,
        layout: '/auth',
      },
      {
        path: '/register',
        name: 'Register',
        miniName: 'R',
        component: Register,
        layout: '/auth',
      },
      {
        path: '/lock',
        name: 'Lock',
        miniName: 'L',
        component: Lock,
        layout: '/auth',
      },
      {
        path: '/timeline',
        name: 'Timeline',
        miniName: 'T',
        component: Timeline,
        layout: '/admin',
      },
      {
        path: '/profile',
        name: 'Profile',
        miniName: 'P',
        component: Profile,
        layout: '/admin',
      },
      {
        path: '/rtl-support',
        name: 'RTL Support',
        miniName: 'RS',
        component: RTLSupport,
        layout: '/rtl',
      },
    ],
  },
  {
    collapse: true,
    name: 'Components',
    icon: 'ni ni-ui-04 text-info',
    state: 'componentsCollapse',
    views: [
      {
        path: '/buttons',
        name: 'Buttons',
        miniName: 'B',
        component: Buttons,
        layout: '/admin',
      },
      {
        path: '/cards',
        name: 'Cards',
        miniName: 'C',
        component: Cards,
        layout: '/admin',
      },
      {
        path: '/grid',
        name: 'Grid',
        miniName: 'G',
        component: Grid,
        layout: '/admin',
      },
      {
        path: '/notifications',
        name: 'Notifications',
        miniName: 'N',
        component: Notifications,
        layout: '/admin',
      },
      {
        path: '/icons',
        name: 'Icons',
        miniName: 'I',
        component: Icons,
        layout: '/admin',
      },
      {
        path: '/typography',
        name: 'Typography',
        miniName: 'T',
        component: Typography,
        layout: '/admin',
      },
      {
        collapse: true,
        name: 'Multi Level',
        miniName: 'M',
        state: 'multiCollapse',
        views: [
          {
            path: '#pablo',
            name: 'Third level menu',
            component: () => {},
            layout: '/',
          },
          {
            path: '#pablo',
            name: 'Just another link',
            component: () => {},
            layout: '/',
          },
          {
            path: '#pablo',
            name: 'One last link',
            component: () => {},
            layout: '/',
          },
        ],
      },
    ],
  },
  {
    collapse: true,
    name: 'Forms',
    icon: 'ni ni-single-copy-04 text-pink',
    state: 'formsCollapse',
    views: [
      {
        path: '/elements',
        name: 'Elements',
        miniName: 'E',
        component: Elements,
        layout: '/admin',
      },
      {
        path: '/components',
        name: 'Components',
        miniName: 'C',
        component: Components,
        layout: '/admin',
      },
      {
        path: '/validation',
        name: 'Validation',
        miniName: 'V',
        component: Validation,
        layout: '/admin',
      },
    ],
  },
  {
    collapse: true,
    name: 'Tables',
    icon: 'ni ni-align-left-2 text-default',
    state: 'tablesCollapse',
    views: [
      {
        path: '/tables',
        name: 'Tables',
        miniName: 'T',
        component: Tables,
        layout: '/admin',
      },
      {
        path: '/react-bs-table',
        name: 'React BS Tables',
        miniName: 'RBT',
        component: ReactBSTables,
        layout: '/admin',
      },
    ],
  },
];

export default routes;
