export interface Hero {
    id: number;
    name: string;
}

export interface HeroListProps {
    heroes: Hero[];
}

export interface HeroItemProps {
    hero: Hero;
}