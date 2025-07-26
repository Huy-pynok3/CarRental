import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Car, CarDetails, MyBooking } from "./pages";
import Footer from '@/components/Footer'

const App = () => {

    const [showLogin, setShowLogin] = useState(false);
    const isOwnerPath = useLocation().pathname.startsWith("/owner");
    
    return (
        <>
            { !isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cars' element={<Car/>}/>
                <Route path='/car-details/:id' element={<CarDetails/>}/>
                <Route path='/my-booking' element={<MyBooking/>}/>
            </Routes>
            {!isOwnerPath &&  <Footer />}
           

        </>
    );
};

export default App;
