import React, {useState} from 'react';
import './App.css';
import HeroList from "./components/HeroList/HeroList";
import {Hero} from "./interfaces";
import HeroForm from "./components/HeroForm/HeroForm";

function App() {
    const [heroes, setHeroes] = useState<Hero[]>([
        { id: 1, name: 'Dr. Nice', description: 'Has the power to heal and inspire others with his presence.' },
        { id: 2, name: 'Bombasto', description: 'Energetic and explosive, can control shockwaves with incredible precision.' },
        { id: 3, name: 'Celeritas', description: 'Possesses superhuman speed, able to move from one place to another instantly.' },
        { id: 4, name: 'Magneta', description: 'Master of magnetic fields, able to attract or repel metallic objects at will.' },
        { id: 5, name: 'RubberMan', description: 'Can stretch his body to incredible lengths, making him a difficult target to catch.' },
        { id: 6, name: 'Dynama', description: 'Has electric abilities, can create lightning and generate powerful electric charges.' },
        { id: 7, name: 'Dr. IQ', description: 'A genius with an analytical mind, known as an expert in strategy and planning.' },
        { id: 8, name: 'Magma', description: 'Controls fire and lava, can cause eruptions and manipulate temperature around him.' },
        { id: 9, name: 'Tornado', description: 'Can create tornadoes and control air currents, moves swiftly in a whirlwind.' }
    ]);

    const addHero = (newHero: Hero) => {
        setHeroes([...heroes, newHero])
    }

    const removeHero = (hero: Hero) => {
        setHeroes(heroes.filter(h => h.id !== hero.id));
    }

    return (
        <div className="App">
            <HeroForm add={addHero}/>
            {heroes.length
                ? <HeroList remove={removeHero} heroes={heroes}/>
                : <h1 className="hero__empty">Heroes not found</h1>
            }
        </div>
    );
}

export default App;
