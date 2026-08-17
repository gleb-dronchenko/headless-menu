import { useEffect } from 'react';
import { useItemContext, useMenuContext } from './hooks';
import { getViewport } from './helpers';
import type { HeadlessMenuLabelProps } from './types';

export default function Label(
    props: HeadlessMenuLabelProps,
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

    if (!isMobile && !isSidebarOpen) {
        return null;
    }

    return (
        <span {...rest} data-viewport={getViewport(isMobile)}>
            {children}
        </span>
    );
}
