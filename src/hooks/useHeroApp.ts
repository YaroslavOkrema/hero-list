import {useState} from "react";
import {Hero} from "../interfaces";

export function useHeroApp() {
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

    return {
        heroes,
        addHero,
        removeHero
    }
}