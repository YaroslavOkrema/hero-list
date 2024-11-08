import React from 'react';
import HeroItem from "../HeroItem/HeroItem";
import {HeroListProps} from "../../interfaces";
import './HeroList.css'

const HeroList: React.FC<HeroListProps> = ({heroes}) => {
    return (
        <div>
            <h1 className="hero__title">Hero List</h1>
            {heroes.map((hero) => (
                <HeroItem hero={hero} key={hero.id}/>
            ))}
        </div>
    );
};

export default HeroList;