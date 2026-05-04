import React, {useState, useEffect} from "react";
import {
  Main,
  Education,
  Experience,
  Project,
  Navigation,
  Footer,
} from "./components";
import TemporalProjectDetail from "./components/TemporalProjectDetail";
import PingPongProjectDetail from "./components/PingPongProjectDetail";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [currentView, setCurrentView] = useState<string>('home');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, [currentView]);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        {currentView === 'home' ? (
            <FadeIn transitionDuration={700}>
                <Main/>
                <Education/>
                <Experience/>
                <Project onProjectClick={setCurrentView}/>
            </FadeIn>
        ) : currentView === 'temporal' ? (
            <FadeIn transitionDuration={700}>
                <TemporalProjectDetail onBack={() => setCurrentView('home')}/>
            </FadeIn>
        ) : (
            <FadeIn transitionDuration={700}>
                <PingPongProjectDetail onBack={() => setCurrentView('home')}/>
            </FadeIn>
        )}
        <Footer />
    </div>
    );
}

export default App;