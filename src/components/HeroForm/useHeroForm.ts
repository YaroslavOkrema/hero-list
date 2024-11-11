import React, {useState} from "react";
import {HeroFormProps} from "../../interfaces";

export function useHeroForm({add}: HeroFormProps) {
    const [hero, setHero] = useState({name: '', description: ''});

    function addHero(event: React.FormEvent) {
        event.preventDefault();

        if (!hero.name.trim() || !hero.description.trim()) {
            alert('Enter hero name and description!');
            return;
        }

        const newHero = {
            ...hero, id: Date.now(),
        }
        add(newHero);
        setHero({name: '', description: ''});
    }

    return {
        hero,
        setHero,
        add,
        addHero
    }
}