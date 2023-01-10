//import { IData } from "./IData";

import { IData } from "./IData";

export const DATA: IData[] = [
    {id:1 , category:'monster', name:'silver lizalfos', description:`These Lizalfos have been influenced by Ganon's fiendish magic to become the strongest Lizalfos of all. They're called \"silver\" for their unique coloring and also to denote their rarity. Their purple pattern makes them even more distinct.` , common_locations:[] , image:'https://botw-compendium.herokuapp.com/api/v2/entry/silver_lizalfos/image' ,drops:['lizalfos horn', 'amber'] },
    {id:2 , category:'monster', name:'ice keese', description:`The intense frost that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of freezing anything they touch.` , common_locations:['Hebra Mountains', 'Gerudo Highlands' ] , image:'https://botw-compendium.herokuapp.com/api/v2/entry/ice_keese/image' ,drops:['ice keese wing', 'keese eyeball'] },
    {id:3 , category:'monster', name:'lynel', description:`These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you're very well prepared.` , common_locations:['Hyrule Field', 'Lanayru Great Spring'] , image:'https://botw-compendium.herokuapp.com/api/v2/entry/lynel/image' ,drops:['lynel horn', 'lynel guts', 'lynel hoof'] },
    {id:4 , category:'creatureFood', name:'armored porgy', description:`This porgy's body is covered in armor-hard scales. The compounds in its scales, when cooked into a dish, fortify your bones and temporarily boost your defense.` , common_locations:['Necluda Sea', 'Lanayru Sea'] , image:'https://botw-compendium.herokuapp.com/api/v2/entry/armored_porgy/image' ,hearts_recovered: 1, cooking_effect:'defense up'},
    {id:5 , category:'creatureFood', name:'hightail lizard', description:`A lizard found throughout Hyrule. It's a but slow to react at times, but it given a chance to escape, it will dart off quickly. Cook it with monster parts for a speed-boosting elixir.` , common_locations:['West Necluda', 'East Necluda'] , image:'https://botw-compendium.herokuapp.com/api/v2/entry/hightail_lizard/image' ,hearts_recovered: 0, cooking_effect:'speed up'},
    {id:6 , category:'creatureFood', name:'bladed rhino beetle', description:`This beetle's razor-sharp horns demand that you handle it with care. Boil the horns alongside monster parts to concoct an elixir that will raise your attack power.` , common_locations:['West Necluda', 'East Necluda'] , image:'https://botw-compendium.herokuapp.com/api/v2/entry/bladed_rhino_beetle/image' ,hearts_recovered: 0, cooking_effect:'attack up'},
    {id:7 , category:'creatureNoFood', name:'eldin ostrich', description:`This large bird makes its home in the volcanic region of Eldin. Their heat-resistant feathers and skin are evolutionary traits produced by the harsh environment. Their wings are too small to facilitate flight, but their long legs make them pretty speedy runners.` , common_locations:['Eldin Canyon', 'Eldin Mountains'] , image:'https://botw-compendium.herokuapp.com/api/v2/entry/eldin_ostrich/image' ,drops:['raw bird thigh', 'raw whole bird'] },
    {id:8 , category:'creatureNoFood', name:'lord of the mountain', description:`This noble creature watches over all animals that make their homes in the forest. Legends say this holy creature is a reincarnation of a sage that died on the lands it now protects. It has an acute awareness of its surroundings, so it seldom appears before people. It's sometimes known by its other name, Satori` , common_locations:['Satori Mountain'] , image:'https://botw-compendium.herokuapp.com/api/v2/entry/lord_of_the_mountain/image' ,drops:[] },
    {id:9 , category:'creatureNoFood', name:'cucco', description:`Villages often raise these birds for their eggs, but some people actually keep them as pets. They can't fly, but can flap their wings mighty furiously if picked up. They're usually calm creatures, but if you're persistent in your torment of them... Well...` , common_locations:['West Necluda', 'East Necluda'] , image:'https://botw-compendium.herokuapp.com/api/v2/entry/cucco/image' ,drops:['bird egg'] }
];