import type { ElementType, MouseEvent } from 'react';
import { useItemContext, useMenuContext } from './hooks';
import type { MenuSubItemProps } from './types';

export default function SubItem(
    props: MenuSubItemProps,
) {
    const {
        asComponent = 'a',
        className,
        children,
        onClick: onClickHandler,
        ...rest
    } = props;
    const { closeSubmenu } = useItemContext();
    const { isMobile } = useMenuContext();
    const LinkComponent: ElementType = asComponent;

    return (
        <li>
            <LinkComponent
                className={className}
                {...rest}
                onClick={(event: MouseEvent<HTMLElement>) => {
                    if (typeof onClickHandler === 'function') {
                        onClickHandler(event);
                    }

                    // в мобильной версии закрываем после перехода
                    if (isMobile) {
                        closeSubmenu();
                    }
                }}
            >
                {children}
            </LinkComponent>
        </li>
    );
}
