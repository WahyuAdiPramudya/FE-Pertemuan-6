import Navbar from "../components/Navbar/Navbar.js"
import Hero from "../components/Hero/Hero.js"
import Movies from "../components/Movies/Movies.js"
import AddFormMovie from "../components/AddFormMovie/AddFormMovie.js"
import Footer from "../components/Footer/Footer.js"

function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Movies/>
            <AddFormMovie/>
            <Footer />   
        </div>
    )
}

export default Home;