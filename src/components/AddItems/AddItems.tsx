import React from 'react';
import { ItemsProps } from '../../types';

const AddItems: React.FC<ItemsProps> = ({items, addItem}) => {
    return (
        <div>
            <h2>Add Items:</h2>
            <div className='menu-container'>
                {items.map((item) => (
                    <div className='menu-item-block'>
                        <button onClick={() => addItem(item)}>
                            <div>
                                <h3 className='title-card'>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddItems;
