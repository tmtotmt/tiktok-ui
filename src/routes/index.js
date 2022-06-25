//Import components
import Following from "../components/Pages/Following";
import Home from "../components/Pages/Home";
import Profile from "../components/Pages/Profile";
import Search from "../components/Pages/Search";

// Import Layout
import { DefaultLayout, HeaderOnly } from "../components/Layout";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/following", component: Following, layout: DefaultLayout },
  { path: "/profile", component: Profile, layout: DefaultLayout },
  { path: "/search", component: Search, layout: HeaderOnly },
];
