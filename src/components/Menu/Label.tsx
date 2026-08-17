import { useEffect } from 'react';
import { useItemContext, useMenuContext } from './hooks';
import { getViewport } from './helpers';
import type { MenuLabelProps } from './types';

export default function Label(
    props: MenuLabelProps,
) {
    const {
        children,
        ...rest
    } = props;
    const { isSidebarOpen, isMobile } = useMenuContext();
    const { setLabel } = useItemContext();

    useEffect(() => {
        setLabel(children);
    }, [children, setLabel]);

    return (
        <span
            {...rest}
            data-viewport={getViewport(isMobile)}
            /* `inline` — текст пункта в раскрытом сайдбаре и на мобиле,
               `tooltip` — подсказка сбоку при свёрнутом сайдбаре. */
            data-variant={!isMobile && !isSidebarOpen ? 'tooltip' : 'inline'}
        >
            {children}
        </span>
    );
}
