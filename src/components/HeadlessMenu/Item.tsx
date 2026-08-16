import { useRef, useState, useEffect } from 'react';
import type { HeadlessMenuItemProps } from './types';
import { useMenuContext } from './hooks';

export default function Item(
    props: HeadlessMenuItemProps,
) {
    const {
        as: LinkComponent = 'a',
        label,
        icon,
        classNames = {
            item: '',
            link: '',
            icon: '',
            label: '',
            submenuAccordion: '',
            submenuFlyout: '',
        },
        children,
        ...rest
    } = props;

    const { isSidebarOpen } = useMenuContext();
    const hasSubmenu = Boolean(children);
    const [isOpen, setIsOpen] = useState(false);
    const itemRef = useRef<HTMLLIElement>(null);

    const Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null = icon ?? null;

    // закрывать сабменю при изменении состояния sidebar
    useEffect(() => {
        setIsOpen(false);
    }, [isSidebarOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const onClickHandler = (event: MouseEvent) => {
            if (!itemRef.current) return;
            if (!itemRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // закрывать сабменю при клике вне него
        document.addEventListener("click", onClickHandler);
        return () => 
            document.removeEventListener("click", onClickHandler);
    }, [isOpen, isSidebarOpen]);

    const itemBody = (
        <>
            {Icon ? <Icon className={classNames.icon}/> : null}
            {
                isSidebarOpen ? 
                    <span 
                        className={classNames.label}
                    >
                        {label}
                    </span> :
                    null
            }
        </>
    );
    
    return (
        <li ref={itemRef} className={classNames?.item ?? ''}>
            {
                hasSubmenu ? (
                    <button 
                        type="button"
                        className={classNames.link}
                        onClick={() => setIsOpen((open) => !open)}
                    >
                        {itemBody}
                    </button>

                ) : (
                    <LinkComponent 
                        {...rest}
                        className={classNames?.link}
                    >
                        {itemBody}
                    </LinkComponent>
                )
            }
            
            {hasSubmenu && isOpen ? (
                <ul
                    className={isSidebarOpen ? classNames?.submenuAccordion : classNames?.submenuFlyout }
                >
                    {children}
                </ul>
            ) : null}
        </li>
    );
}
