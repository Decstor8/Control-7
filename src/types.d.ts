
export interface Menu {
    name: string;
    price: number
    quantity?: number
}

export interface ItemsProps {
    items: Menu[];
    addItem: (item: Menu) => void;
}

export interface OrderProps {
    orderItems: Menu[];
    removeItem: (itemName: string) => void;
}