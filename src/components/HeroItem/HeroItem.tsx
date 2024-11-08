import React from 'react';
import {HeroItemProps} from "../../interfaces";
import './HeroItem.css'

const HeroItem: React.FC<HeroItemProps> = ({hero}) => {
    return (
        <div className="hero">
            <div className="hero__content">
                <strong>{hero.id} {hero.name}</strong>
                <div>
                    description
                </div>
            </div>
            <div className="hero__btn">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default HeroItem;