import React from 'react'
import 'animate.css/animate.min.css'
import { Element } from 'react-scroll'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import About from './components/About'
import Works from './components/Works'
import Projects from './components/Projects'
import Footer from './components/Footer'

class App extends React.Component{

    render() {
        return (
            <main>
                <Navbar />
                <Element name='Intro'>
                    <Intro />
                </Element>
                <Element name='About me'>
                    <About />
                </Element>
                <Element name='Skills'>
                    <Skills />
                </Element>
                <Element name='Works'>
                    <Works />
                </Element>
                <Element name='Projects'>
                    <Projects />
                </Element>
                <Footer />
            </main>
        );
    }
}

export default App