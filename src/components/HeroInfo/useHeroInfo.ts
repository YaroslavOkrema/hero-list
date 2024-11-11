import { useNavigate, useParams } from 'react-router-dom';
import {Hero, UseHeroInfo} from "../../interfaces";

export const useHeroInfo = (heroes: Hero[]): UseHeroInfo => {
    const { id } = useParams();
    const navigate = useNavigate();

    const hero = heroes.find((h) => h.id === parseInt(id!));

    const handleBack = () => {
        navigate('/');
    };

    return {
        hero,
        handleBack
    };
};
