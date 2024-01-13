import {MenuItems} from "../Items/MenuItems.ts";
import { ItemsProps } from '../../types';

const AddItems: React.FC<ItemsProps> = ({items}) => {
    return (
        <div>
            <h2>Add Items:</h2>
            <div className='menu-container'>
                {MenuItems.map((item) => (
                    <div className='menu-item-block'>
                        <button>
                            <div>
                                <h3 className='title-card'>{item.name}</h3>
                                <p>{item.name}</p>
                            </div>
                        </button>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default AddItems;