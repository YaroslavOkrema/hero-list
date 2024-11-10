import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {HeroInfoProps} from "../../interfaces";


const HeroInfo: React.FC<HeroInfoProps> = ({heroes}) => {
    const {id} = useParams();
    const hero = heroes.find(h => h.id === parseInt(id!));
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>{hero?.name}</h1>
            <p>{hero?.description}</p>
            <button className="hero__btn" onClick={handleBack}>Back</button>
        </div>
    );
};

export default HeroInfo;