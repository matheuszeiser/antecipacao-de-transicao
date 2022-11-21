import React from "react";
import "./App.css";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContainerSimulation from "./components/ContainerSimulation";

function App() {
    return (
        <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ContainerSimulation />
        </div>
    );
}

export default App;
