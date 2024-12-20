export interface Hero {
    id: number;
    name: string;
    description: string;
}

export interface HeroListProps {
    heroes: Hero[];
    remove: (hero: Hero) => void;
}

export interface HeroItemProps {
    hero: Hero;
    number: number;
    remove: (hero: Hero) => void;
}

export interface HeroFormProps {
    add: (newHero: Hero) => void;
}

export interface HeroInfoProps {
    heroes: Hero[];
}

export interface UseHeroInfo {
    hero: Hero | undefined;
    handleBack: () => void;
}

export interface UseHeroItem {
    handleOpen: () => void;
}