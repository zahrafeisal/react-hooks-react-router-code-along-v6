import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

// useParams allows us to access the data we've stored in our URL parameters and use it within our components.
import { useParams } from "react-router-dom";

function UserProfile() {
    const [user, setUser] = useState({});
    const params = useParams();
    console.log(params); // ---> Note that the key is the parameter we defined in our route, & the value is what appears in the URL.

    const userId = params.id;

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error(error))
    }, [userId]);

    if (!user.name) {
        return (
            <h1>Loading...</h1>
        );
    };

    return (
        <>
          <header>
            <NavBar />
          </header>
          <main>
            <h1>{user.name}</h1>
          </main>
        </>
    );
};

export default UserProfile;