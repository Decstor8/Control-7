import {Menu} from "../../types";
import pizza from '../../assets/pizza.png';
import caesar from '../../assets/cezar.png';
import cutlets from '../../assets/cotleta.png';
import syrniki from '../../assets/Medium.png';
import dumplings from '../../assets/pelmen.png';
import rolls from '../../assets/roll.png';

export const MenuItems: Menu[] = [
    {name: 'Пицца Куриная "большая"', price: 868, image: pizza},
    {name: 'Котлеты с рисом и грибами', price: 398, image: cutlets},
    {name: 'Салат "Цезарь"', price: 398, image: caesar},
    {name: 'Сырники', price: 288, image: syrniki},
    {name: 'Пельмени с бульоном', price: 228, image: dumplings},
    {name: 'Цезарь Ролл', price: 228, image: rolls},
];
