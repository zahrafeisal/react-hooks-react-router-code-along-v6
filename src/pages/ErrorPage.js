import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

// useRouteError allows us to interact with the error itself, including the error status and its message.
// We can add this ErrorPage to each of our routes using the errorElement field within our route objects.

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
          <header>
            <NavBar />
          </header>
          <main>
            <h1>Whoops! Something went wrong!</h1>
          </main>
        </>
    );
};

export default ErrorPage;