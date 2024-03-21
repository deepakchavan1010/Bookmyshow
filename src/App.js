import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Routes, Route } from "react-router-dom"
import { Header } from "./Header"
import { Sports } from "./pages/Sports"
import { Plays } from "./pages/Plays"
import { Movies } from "./pages/Movies/Movies"
import { Events } from "./pages/Events"
import { Activities } from "./pages/Activities"
import { Stream } from "./pages/Stream/Stream"
import { Footer } from "./Footer/Footer"
function App() {
    return (
        <>
            <div className='bg-light'>
                <Header />
                <Routes>
                    <Route path="/" element={<Movies />}></Route>
                    <Route path="/activities" element={<Activities />}></Route>
                    <Route path="/events" element={<Events />}></Route>
                    <Route path="/plays" element={<Plays />}></Route>
                    <Route path="/sports" element={<Sports />}></Route>
                    <Route path="/stream" element={<Stream />}></Route>
                    <Route path="*" element={<h4>Page Not Found</h4>}></Route>
                </Routes>
                <Footer />
                
            </div>


        </>
    )
}

export default App