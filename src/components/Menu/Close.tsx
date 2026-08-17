import type { MouseEvent } from 'react';
import { useItemContext } from './hooks';
import type { MenuCloseProps } from './types';

export default function Close(
    props: MenuCloseProps,
) {
    const {
        children,
        onClick: onClickHandler,
        ...rest
    } = props;
    const { closeSubmenu } = useItemContext();

    return (
        <button
            type="button"
            {...rest}
            data-part="close"
            onClick={(event: MouseEvent<HTMLButtonElement>) => {
                if (typeof onClickHandler === 'function') {
                    onClickHandler(event);
                }

                closeSubmenu();
            }}
        >
            {children}
        </button>
    );
}
