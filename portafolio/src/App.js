import React from 'react';

import Navbar from './components/Navbar';
import Intro from './components/Intro';

class App extends React.Component{

    render() {
        return (
            <main>
                <Navbar />
                <Intro />
            </main>
        );
    }
}

export default App