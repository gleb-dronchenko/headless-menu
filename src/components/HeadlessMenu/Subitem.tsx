import type { ElementType, MouseEvent } from 'react';
import { useItemContext, useMenuContext } from './hooks';
import type { HeadlessMenuSubItemProps } from './types';

export default function Subitem(
    props: HeadlessMenuSubItemProps,
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
                    // проверяем наличие обработчика onClick в props (поле опциональное)
                    if (typeof onClickHandler === 'function') {
                        onClickHandler(event);
                    }

                    // закрыть сабменю в мобильной версии
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
