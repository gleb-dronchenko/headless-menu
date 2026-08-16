import { useEffect, useRef, useState } from 'react';
import { ItemContext } from './context';
import { useMenuContext } from './hooks';
import type { HeadlessMenuItemProps } from './types';

export default function Item(
    props: HeadlessMenuItemProps,
) {
    const {
        children,
        className,
    } = props;
    const { isSidebarOpen } = useMenuContext();
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const itemRef = useRef<HTMLLIElement>(null);

    const toggleSubmenu = () => {
        setIsSubmenuOpen((open) => !open);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    // закрывать сабменю при изменении состояния sidebar
    useEffect(() => {
        setIsSubmenuOpen(false);
    }, [isSidebarOpen]);

    useEffect(() => {
        if (!isSubmenuOpen) {
            return;
        }

        const onClickHandler = (event: MouseEvent) => {
            if (!itemRef.current?.contains(event.target as Node)) {
                setIsSubmenuOpen(false);
            }
        };

        // закрывать сабменю при клике вне него
        document.addEventListener('click', onClickHandler);

        return () =>
            document.removeEventListener('click', onClickHandler);
    }, [isSubmenuOpen]);

    return (
        <li ref={itemRef} className={className}>
            <ItemContext.Provider value={{ isSubmenuOpen, toggleSubmenu, closeSubmenu }}>
                {children}
            </ItemContext.Provider>
        </li>
    );
}
