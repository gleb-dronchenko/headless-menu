import { useRef, useState, useEffect } from 'react';
import type { HeadlessMenuItemProps } from './types';
import { useMenuContext } from './hooks';

export default function Item(
    props: HeadlessMenuItemProps,
) {
    const {
        label,
        icon,
        href,
        classNames = {
            item: '',
            link: '',
            icon: '',
            label: '',
        },
        children,
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
                        <a 
                            href={href} 
                            className={classNames?.link}
                        >
                            {itemBody}
                        </a>
                    )
                }
                
                {hasSubmenu && isOpen ? (
                    <ul
                        className={[
                            isSidebarOpen ? "flex flex-col gap-0.5 mt-1 pl-6" : "absolute left-full top-full z-50 ml-2 min-w-[12rem] rounded-lg border border-zinc-200 bg-white shadow-lg px-4 py-2 ",
                        ].join(" ")}
                    >
                        {children}
                    </ul>
                ) : null}
            </li>
        
    );
}
