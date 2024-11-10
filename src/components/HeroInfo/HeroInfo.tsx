import React from 'react';
import {HeroInfoProps} from "../../interfaces";
import {useHeroInfo} from "./useHeroInfo";


const HeroInfo: React.FC<HeroInfoProps> = ({heroes}) => {
    const {hero, handleBack} = useHeroInfo(heroes);

    return (
        <div>
            <h1>{hero?.name}</h1>
            <p>{hero?.description}</p>
            <button className="hero__btn" onClick={handleBack}>Back</button>
        </div>
    );
};

export default HeroInfo;