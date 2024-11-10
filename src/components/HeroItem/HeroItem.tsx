import React from 'react';
import {HeroItemProps} from "../../interfaces";
import './HeroItem.css'
import {useHeroItem} from "./useHeroItem";

const HeroItem: React.FC<HeroItemProps> = ({hero, number, remove}) => {
    const {handleOpen} = useHeroItem(hero);

    return (
        <div className="hero">
            <div className="hero__content">
                <strong>{number}. {hero.name}</strong>
                <div>
                    {hero.description}
                </div>
            </div>
            <div className="buttons">
                <button onClick={handleOpen} className="hero__btn">Open</button>
                <button onClick={() => remove(hero)} className="hero__btn">Delete</button>
            </div>
        </div>
    );
};

export default HeroItem;