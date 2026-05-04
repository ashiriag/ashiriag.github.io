import React, {useState, useEffect, useCallback} from "react";
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

const getViewFromUrl = () => {
    const project = new URLSearchParams(window.location.search).get('project');
    return project === 'temporal' || project === 'pingpong' ? project : 'home';
};

const HOME_SCROLL_KEY = 'homeScrollY';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [currentView, setCurrentView] = useState<string>(getViewFromUrl);

    const navigateToView = useCallback((view: string) => {
        const nextView = view === 'temporal' || view === 'pingpong' ? view : 'home';
        const nextUrl = nextView === 'home' ? '/' : `/?project=${nextView}`;

        if (currentView === 'home' && nextView !== 'home') {
            sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
        }

        window.history.pushState({ view: nextView }, '', nextUrl);
        setCurrentView(nextView);
    }, [currentView]);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        if (currentView === 'home') {
            const savedScrollY = sessionStorage.getItem(HOME_SCROLL_KEY);

            if (savedScrollY) {
                requestAnimationFrame(() => {
                    window.scrollTo({top: Number(savedScrollY), left: 0, behavior: 'auto'});
                    sessionStorage.removeItem(HOME_SCROLL_KEY);
                });
            }

            return;
        }

        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [currentView]);

    useEffect(() => {
        window.history.replaceState({ view: currentView }, '', window.location.href);

        const handlePopState = () => {
            setCurrentView(getViewFromUrl());
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [currentView]);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        {currentView === 'home' ? (
            <FadeIn transitionDuration={700}>
                <Main/>
                <Education/>
                <Experience/>
                <Project onProjectClick={navigateToView}/>
            </FadeIn>
        ) : currentView === 'temporal' ? (
            <FadeIn transitionDuration={700}>
                <TemporalProjectDetail onBack={() => navigateToView('home')}/>
            </FadeIn>
        ) : (
            <FadeIn transitionDuration={700}>
                <PingPongProjectDetail onBack={() => navigateToView('home')}/>
            </FadeIn>
        )}
        <Footer />
    </div>
    );
}

export default App;
