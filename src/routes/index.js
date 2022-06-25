import Following from '../components/Pages/Following';
import Home from '../components/Pages/Home';
import Profile from '../components/Pages/Profile';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
