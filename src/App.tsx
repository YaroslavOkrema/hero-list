import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // імпортуємо маршрутизацію
import './App.css';
import HeroList from "./components/HeroList/HeroList";
import { Hero } from "./interfaces";
import HeroForm from "./components/HeroForm/HeroForm";
import HeroInfo from "./components/HeroInfo/HeroInfo";


function App() {
    const [heroes, setHeroes] = useState<Hero[]>([
        { id: 1, name: 'Dr. Nice', description: 'Has the power to heal and inspire others with his presence.' },
        { id: 2, name: 'Bombasto', description: 'Energetic and explosive, can control shockwaves with incredible precision.' },
        { id: 3, name: 'Celeritas', description: 'Possesses superhuman speed, able to move from one place to another instantly.' },
        { id: 4, name: 'Magneta', description: 'Master of magnetic fields, able to attract or repel metallic objects at will.' },
        { id: 5, name: 'RubberMan', description: 'Can stretch his body to incredible lengths, making him a difficult target to catch.' },
    ]);

    const addHero = (newHero: Hero) => {
        setHeroes([...heroes, newHero])
    }

    const removeHero = (hero: Hero) => {
        setHeroes(heroes.filter(h => h.id !== hero.id));
    }

    return (
        <Router>
            <div className="App">
                <HeroForm add={addHero}/>
                <Routes>
                    <Route path="/" element={heroes.length ? <HeroList remove={removeHero} heroes={heroes}/> : <h1 className="hero__empty">Heroes not found</h1>} />
                    <Route path="/hero/:id" element={<HeroInfo heroes={heroes} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
