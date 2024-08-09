import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/profile/:id", // ---> URL parameter — a segment of our URL that can change and contains data we use in our components.
        element: <UserProfile />,
        errorElement: <ErrorPage />
    }
];

export default routes;