import { useContext } from 'react';
import { ItemContext, MenuContext } from './context';

export function useMenuContext() {
    const menuContext = useContext(MenuContext);

    if (!menuContext) {
        throw new Error("Component must be used inside HeadlessMenu");
    }
    
    return menuContext;
}

export function useItemContext() {
    const itemContext = useContext(ItemContext);

    if (!itemContext) {
        throw new Error("Component must be used inside HeadlessMenu.Item");
    }

    return itemContext;
}