import React from 'react';
import "animate.css/animate.min.css"

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from "./components/Skills";
import About from "./components/About";

class App extends React.Component{

    render() {
        return (
            <main>
                <Navbar />
                <Intro />
                <About />
                <Skills />
            </main>
        );
    }
}

export default App