import React from 'react';
import { ItemsProps } from '../../types';

const AddItems: React.FC<ItemsProps> = ({items, addItem}) => {
    return (
        <div>
            <h2 className='main-title'>Империя пиццы рады приветствовать вас!</h2>
            <div className='menu-container'>
                {items.map((item) => (
                    <div>
                        <button className='btn-menu' onClick={() => addItem(item)}>
                            <div className='card-menu'>
                                <img src={item.image} alt={item.image} />
                                <h3 className='title-card'>{item.name}</h3>
                                <p className='money'>{item.price} KGS</p>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddItems;
