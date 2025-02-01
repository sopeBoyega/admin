import React from "react";
import './index.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const url = "https://foodproj-backend-4y4z.onrender.com"
  return (
    <>
    <ToastContainer/>
      <Navbar />
      <hr/>
    <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add url={url}/>}/>
        <Route path="/list" element={<List url={url}/>}/>
        <Route path="/Orders" element={<Orders url={url}/>}/>
      </Routes>
    </div>
    </>
  );
};

export default App;
