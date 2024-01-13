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
            <div className='menu-container'>
                <AddItems items={MenuItems}
                          addItem={(menuItem) => addOrder(menuItem, orderItems, setOrderItems
                )}/>
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
