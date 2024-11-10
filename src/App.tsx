import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroList from "./components/HeroList/HeroList";
import HeroForm from "./components/HeroForm/HeroForm";
import HeroInfo from "./components/HeroInfo/HeroInfo";
import {useHeroApp} from "./hooks/useHeroApp";


function App() {
    const {addHero, heroes, removeHero} = useHeroApp();

    return (
        <Router>
            <div className="App">
                <HeroForm add={addHero}/>
                <Routes>
                    <Route
                        path="/"
                        element={
                            heroes.length ? (
                                <HeroList remove={removeHero} heroes={heroes} />
                            ) : (
                                <h1 className="hero__empty">Heroes not found</h1>
                            )
                        }
                    />
                    <Route
                        path="/hero/:id"
                        element={<HeroInfo heroes={heroes} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
