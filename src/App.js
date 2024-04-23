import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import { Routes, Route } from "react-router-dom"
import { Header } from "./Header"
import { Plays } from "./pages/Play/Plays"
import { Movies } from "./pages/Movies/Movies"
import { Events } from "./pages/Event/Events"
import { Stream } from "./pages/Stream/Stream"
import { Footer } from "./Footer/Footer"
import { Sports } from "./pages/Sport/Sports";
import { Activites } from "./pages/Activite/Activities";
import { Shows } from "./pages/Shows/Shows";
import Corporates from "./pages/Corporate/Corporate";
import Details from "./pages/Details/Details";
import { Offers } from "./pages/Offers/Offers";
import { GiftCards } from "./pages/GiftCard/GiftCards";




function App() {
    return (
        <>
            <div className='bg-light'>
                <Header />
                <Routes>
                    <Route path="/" element={<Movies />}></Route>
                    <Route path="/activities" element={<Activites />}></Route>
                    <Route path="/events" element={<Events />}></Route>
                    <Route path="/plays" element={<Plays />}></Route>
                    <Route path="/sports" element={<Sports/>}></Route>                                                       
                    <Route path="/stream" element={<Stream />}></Route>          
                    <Route path="/offers" element={<Offers />}></Route>                   
                    <Route path="/Corporates" element={<Corporates />}></Route>
                    <Route path="/list-your-shows" element={<Shows />}></Route>
                    <Route path="/giftcards" element={<GiftCards />}></Route>
                    <Route path="/details" element={<Details />}></Route>                 
                    <Route path="*" element={<h4>Page Not Found</h4>}></Route>          
                </Routes>
                <Footer />
                
            </div>


        </>
    )
}

export default App