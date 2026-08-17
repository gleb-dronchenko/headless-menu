import type { ElementType } from 'react';
import { useItemContext, useMenuContext } from './hooks';
import { getViewport } from './helpers';
import type { HeadlessMenuTriggerProps } from './types';

export default function Trigger(
    props: HeadlessMenuTriggerProps,
) {
    const {
        asComponent,
        className,
        children,
        ...rest
    } = props;
    const { toggleSubmenu } = useItemContext();
    const { isMobile } = useMenuContext();
    const viewport = getViewport(isMobile);

    if (!asComponent) {
        // для открытия сабменю
        return (
            <button
                type="button"
                className={className}
                data-viewport={viewport}
                onClick={toggleSubmenu}
            >
                {children}
            </button>
        );
    }

    const LinkComponent: ElementType = asComponent;

    return (
        <LinkComponent className={className} {...rest} data-viewport={viewport}>
            {children}
        </LinkComponent>
    );
}
