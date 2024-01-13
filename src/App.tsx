import React, { useState } from 'react';
import AddItems from './components/AddItems/AddItems';
import OrderDetails from './components/OrderDetails/OrderDetails';
import { Menu } from './types';
import { MenuItems } from './components/Items/MenuItems.ts';
import { addOrder, removeItem } from './components/AddAndRemove/ProductAddDel';
import './App.css';

const App: React.FC = () => {
    const [orderItems, setOrderItems] = useState<Menu[]>([]);

    return (
        <div className='app'>
            <header className="header">
                <nav className="head-nav">
                    <ul className="head-nav-list">
                        <li className="nav-item"><a href="#" className="link">Главная</a></li>
                        <li className="nav-item"><a href="#" className="link">О нас</a></li>
                        <li className="nav-item"><a href="#" className="link">Контакты</a></li>
                    </ul>
                </nav>
            </header>
            <div className='block-menu'>
            <div className='menu-container'>
                <AddItems items={MenuItems}
                          addItem={(menuItem) => addOrder(menuItem, orderItems, setOrderItems
                )}/>
            </div>
            </div>
            <div className='order-container'>
                <OrderDetails orderItems={orderItems}
                              removeItem={(itemName) => removeItem(itemName, orderItems, setOrderItems
                )}/>
            </div>
        </div>
    );
};

export default App;
