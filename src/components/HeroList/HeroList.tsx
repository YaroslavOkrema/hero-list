import React from 'react';
import HeroItem from "../HeroItem/HeroItem";
import {HeroListProps} from "../../interfaces";
import './HeroList.css'

const HeroList: React.FC<HeroListProps> = ({heroes, remove}) => {
    return (
        <div>
            <h1 className="hero__title">Hero List</h1>
            {heroes.map((hero, index) => (
                <HeroItem remove={remove} hero={hero} key={hero.id} number={index + 1}/>
            ))}
        </div>
    );
};

export default HeroList;