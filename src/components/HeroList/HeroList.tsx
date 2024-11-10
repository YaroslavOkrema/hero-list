import React from 'react';
import HeroItem from "../HeroItem/HeroItem";
import {HeroListProps} from "../../interfaces";
import './HeroList.css'
import {TransitionGroup, CSSTransition} from "react-transition-group";

const HeroList: React.FC<HeroListProps> = ({heroes, remove}) => {
    return (
        <div>
            <h1 className="hero__title">Hero List</h1>
            <TransitionGroup>
                {heroes.map((hero, index) => (
                    <CSSTransition
                        key={hero.id}
                        timeout={500}
                        classNames="hero"
                    >
                    <HeroItem remove={remove} hero={hero} key={hero.id} number={index + 1}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default HeroList;