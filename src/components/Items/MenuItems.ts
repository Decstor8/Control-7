import {Menu} from "../../types";
import pizza from '../../assets/pizza.png';
import cezar from '../../assets/cezar.png';
import cotleta from '../../assets/cotleta.png';
import Medium from '../../assets/Medium.png';
import pelmen from '../../assets/pelmen.png';
import roll from '../../assets/roll.png';

export const MenuItems: Menu[] = [
    {name: 'Пицца Куриная', price: 868, image: pizza},
    {name: 'Котлеты с рисом и грибами', price: 398, image: cotleta},
    {name: 'Салат "Цезарь"', price: 398, image: cezar},
    {name: 'Сырники', price: 288, image: Medium},
    {name: 'Пельмени с бульонам', price: 228, image: pelmen},
    {name: 'Цезарь Ролл', price: 228, image: roll},
];
