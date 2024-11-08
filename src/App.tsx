import React, {useState} from 'react';
import './App.css';
import HeroList from "./components/HeroList/HeroList";

function App() {
    const [heroes, setHeroes] = useState([
        { id: 12, name: 'Dr. Nice' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr. IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ]);

    return (
        <div className="App">
            <HeroList heroes={heroes}/>
        </div>
    );

}

export default App;
