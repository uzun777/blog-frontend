import React, {Fragment} from 'react'
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {About} from "./pages/About";
import {Home} from "./pages/Home";

function App() {
    return (<Fragment>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
    </Fragment>);
}

export default App;
