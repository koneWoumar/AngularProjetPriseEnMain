export interface IData{
    id: number;
    category: string;
    name: string;
    description: string
    common_locations: string[]
    image: string
    drops?: string[]
    hearts_recovered?: number
    cooking_effect?: string
}
