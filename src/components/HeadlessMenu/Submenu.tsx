import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useItemContext, useMenuContext } from './hooks';
import type { HeadlessMenuSubmenuProps } from './types';

export default function Submenu(
    props: HeadlessMenuSubmenuProps,
) {
    const { 
        overlay,
        title,
        close,
        children,
        ...rest
    } = props;
    const { isSubmenuOpen } = useItemContext();
    const { isSidebarOpen, isMobile } = useMenuContext();

    // мобильное подменю открывается поверх страницы,
    // поэтому блокируем прокрутку body.
    useEffect(() => {
        if (!isMobile || !isSubmenuOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMobile, isSubmenuOpen]);

    if (!isSubmenuOpen) {
        return null;
    }

    if (isMobile) {
        // мобильный вариант отрисовывается в портале.
        return createPortal(
            <div
                {...rest}
                data-open=""
                // `sheet` — мобильный полноэкранный вариант в портале.
                data-variant="sheet"
            >
                {overlay}
                <div data-part="panel">
                    {(title || close) && (
                        <div data-part="header">
                            {title}
                            {close}
                        </div>
                    )}
                    <ul data-part="list">
                        {children}
                    </ul>
                </div>
            </div>,
            document.body,
        );
    }

    return (
        <ul
            {...rest}
            data-open=""
            // `inline` — вложенный список в раскрытом сайдбаре,
            // `flyout` — попап рядом со свёрнутым сайдбаром.
            data-variant={isSidebarOpen ? 'inline' : 'flyout'}
        >
            {children}
        </ul>
    );
}
