import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Car, CarDetails, MyBooking } from "./pages";
import Footer from '@/components/Footer'
import { AddCar, Dashboard, Layout, ManageBookings, ManageCars } from "./pages/owner";

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
                <Route path='/my-bookings' element={<MyBooking/>}/>

                <Route path='/owner' element={<Layout />}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="add-car" element={<AddCar/>}/>
                    <Route path="manage-cars" element={<ManageCars/>}/>
                    <Route path="manage-bookings" element={<ManageBookings/>}/>
                </Route>
            </Routes>
            {!isOwnerPath &&  <Footer />}
           

        </>
    );
};

export default App;
