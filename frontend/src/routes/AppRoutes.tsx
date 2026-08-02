import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Assistant from "../pages/assistant/Assistant";
import MainLayout from "../components/layout/Mainlayout";
import Dashboard from "../pages/dashboard/Dashoard";
import Inventory from "../pages/inventory/Inventory";



export default function AppRoutes(){

    return (

        <BrowserRouter>

            <MainLayout>

                <Routes>

                    <Route 
                        path="/" 
                        element={<Dashboard/>}
                    />


                    <Route 
                        path="/assistant" 
                        element={<Assistant/>}
                    />

                    <Route 
                        path="/inventory" 
                        element={<Inventory/>}
                    />

                </Routes>

            </MainLayout>


        </BrowserRouter>

    )
}