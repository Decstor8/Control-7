import React from 'react';
import { OrderProps } from '../../types';

const OrderDetails: React.FC<OrderProps> = ({ orderItems, removeItem }) => {
    const resultPrice = () => {
        return orderItems.reduce((acc, item) => {
            return acc + (item.quantity || 1) * item.price;
        }, 0);
    };

    return (
        <div>
            <h2>Order Details:</h2>
                <div>
                    {orderItems.map((item) => (
                        <div key={item.name} className='order-item'>
                            <div>
                                <h3 className='title-card'>{item.name}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price}</p>
                                <button className='btn-delete' onClick={() => removeItem(item.name)}></button>
                            </div>
                        </div>
                    ))}
                    <p>Итого к оплате: {resultPrice()}</p>
                </div>

            {orderItems.length === 0 && <p>Order is empty! Please add some items!</p>}
        </div>
    );
};

export default OrderDetails;
