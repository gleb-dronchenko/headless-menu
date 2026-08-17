import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ItemContext } from './context';
import { useMenuContext } from './hooks';
import { getViewport } from './helpers';
import type { MenuItemProps } from './types';

export default function Item(
    props: MenuItemProps,
) {
    const {
        children,
        className,
    } = props;
    const { isSidebarOpen, isMobile } = useMenuContext();
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [label, setLabel] = useState<ReactNode>(null);
    
    const itemRef = useRef<HTMLLIElement>(null);

    const toggleSubmenu = () => {
        setIsSubmenuOpen((open) => !open);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    /* закрываем подменю, чтобы не переносить старое состояние
       между desktop и mobile */
    useEffect(() => {
        setIsSubmenuOpen(false);
    }, [isSidebarOpen, isMobile]);

    useEffect(() => {
        if (!isSubmenuOpen || isMobile) {
            return;
        }

        const onClickHandler = (event: MouseEvent) => {
            if (!itemRef.current?.contains(event.target as Node)) {
                setIsSubmenuOpen(false);
            }
        };
        // закрываем подменю по клику вне Item
        document.addEventListener('click', onClickHandler);

        return () =>
            document.removeEventListener('click', onClickHandler);
    }, [isSubmenuOpen, isMobile]);

    return (
        <li
            ref={itemRef}
            className={className}
            data-open={isSubmenuOpen ? '' : undefined}
            data-viewport={getViewport(isMobile)}
        >
            <ItemContext.Provider value={{ isSubmenuOpen, toggleSubmenu, closeSubmenu, label, setLabel }}>
                {children}
            </ItemContext.Provider>
        </li>
    );
}
