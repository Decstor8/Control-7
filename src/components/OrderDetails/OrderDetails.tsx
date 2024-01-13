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
            <h2>Информация для заказа:</h2>
                <div>
                    {orderItems.map((item) => (
                        <div className='order-item'>
                            <div>
                                <img className='img-card-result' src={item.image} alt={item.image} />
                                <h3 className='title-card'>{item.name}</h3>
                                <p className='info'>Количество: {item.quantity}</p>
                                <p className='info'>Цена за порцию: {item.price}</p>
                                <button className='btn-delete' onClick={() => removeItem(item.name)}></button>
                            </div>
                        </div>
                    ))}
                    <p className='description-price'>Итого к оплате: {resultPrice()}</p>
                </div>

            {orderItems.length === 0 && <p className='error-description-price'>Order is empty! Please add some items!</p>}
        </div>
    );
};

export default OrderDetails;
