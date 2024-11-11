import React from 'react';
import {HeroFormProps} from "../../interfaces";
import {useHeroForm} from "./useHeroForm";

const HeroForm: React.FC<HeroFormProps> = ({add}) => {
    const {hero, setHero, addHero} = useHeroForm({add});

    return (
        <form>
            <input
                value={hero.name}
                onChange={event => setHero({...hero, name: event.target.value})}
                type="text"
                placeholder="Hero name"
                className="hero__input"
            />
            <input
                value={hero.description}
                onChange={event => setHero({...hero, description: event.target.value})}
                type="text"
                placeholder="Hero description"
                className="hero__input"
            />
            <button className="hero__btn" onClick={addHero}>Add hero</button>
        </form>
    );
};

export default HeroForm;