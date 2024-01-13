import { Menu } from '../../types';

export const addOrder = (
    menuItem: Menu,
    orderItems: Menu[],
    setOrderItems: React.Dispatch<React.SetStateAction<Menu[]>>
) => {
    const element = orderItems.find(({ name }) => name === menuItem.name);


    if (element) {
        setOrderItems(
            orderItems.map((item) =>
                item.name === menuItem.name ? {
                ...item,
                    quantity: (item.quantity || 1) + 1
            } : item
            )
        );
    } else {
        setOrderItems([
            ...orderItems,
            { ...menuItem,
                quantity: 1
            }]);
    }
};

export const removeItem = (
    itemName: string,
    orderItems: Menu[],
    setOrderItems: React.Dispatch<React.SetStateAction<Menu[]>>
) => {
    setOrderItems(orderItems.filter((item) => item.name !== itemName));
};
