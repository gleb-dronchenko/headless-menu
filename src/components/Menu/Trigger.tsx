import type { ElementType } from 'react';
import { useItemContext, useMenuContext } from './hooks';
import { getViewport } from './helpers';
import type { MenuTriggerProps } from './types';

export default function Trigger(
    props: MenuTriggerProps,
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
        // без внешнего компонента Trigger сам управляет открытием подменю
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

    // если снаружи передали любой другой компонент для роутинга
    // меню только прокидывает props 
    const LinkComponent: ElementType = asComponent;

    return (
        <LinkComponent className={className} {...rest} data-viewport={viewport}>
            {children}
        </LinkComponent>
    );
}
