import { useContext } from 'react';
import { MenuContext } from './context';

export function useMenuContext() {
    const menuContext = useContext(MenuContext);

    if (!menuContext) {
        throw new Error("Component must be used inside HeadlessMenu");
    }
    
    return menuContext;
}