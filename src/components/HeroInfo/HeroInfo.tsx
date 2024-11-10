import React from 'react';
import {HeroInfoProps} from "../../interfaces";
import {useHeroInfo} from "./useHeroInfo";
import './HeroInfo.css';


const HeroInfo: React.FC<HeroInfoProps> = ({heroes}) => {
    const {hero, handleBack} = useHeroInfo(heroes);

    return (
        <div className="hero__info">
            <h1>{hero?.name}</h1>
            <p className="hero__description">{hero?.description}</p>
            <button className="hero__btn" onClick={handleBack}>Back</button>
        </div>
    );
};

export default HeroInfo;