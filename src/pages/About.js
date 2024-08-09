import NavBar from "../components/NavBar";

function About() {
    return (
        <>
          <header>
            {/* space for navbar */}
            <NavBar />
          </header>
          <main>
            <h1>This is my about component!</h1>
          </main>
        </>
    );
};

export default About;