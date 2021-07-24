import React from 'react';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from "./components/Skills";

class App extends React.Component{

    render() {
        return (
            <main>
                <Navbar />
                <Intro />
                <Skills />
            </main>
        );
    }
}

export default App