import { useMenuContext } from './hooks';
import { getViewport } from './helpers';
import type { MenuListProps } from './types';

export default function List(
    props: MenuListProps,
) {
    const {
        children,
        ...rest
    } = props;
    const { isMobile } = useMenuContext();

    return (
        <ul
            {...rest}
            data-viewport={getViewport(isMobile)}
        >
            {children}
        </ul>
    );
}
