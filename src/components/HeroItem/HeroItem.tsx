import React from 'react';
import {HeroItemProps} from "../../interfaces";
import './HeroItem.css'

const HeroItem: React.FC<HeroItemProps> = ({hero, number, remove}) => {
    return (
        <div className="hero">
            <div className="hero__content">
                <strong>{number}. {hero.name}</strong>
                <div>
                    {hero.description}
                </div>
            </div>
            <button onClick={() => remove(hero)} className="hero__btn">Delete</button>
        </div>
    );
};

export default HeroItem;