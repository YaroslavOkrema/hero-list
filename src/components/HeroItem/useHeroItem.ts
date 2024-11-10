import {useNavigate} from "react-router-dom";
import {Hero, UseHeroItem} from "../../interfaces";

export function useHeroItem(hero: Hero): UseHeroItem {
    const navigate = useNavigate();

    const handleOpen = () => {
        navigate(`/hero/${hero.id}`);
    }

    return {handleOpen}
}