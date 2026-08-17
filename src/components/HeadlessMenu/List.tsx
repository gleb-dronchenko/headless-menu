import { useMenuContext } from './hooks';
import { getViewport } from './helpers';
import type { HeadlessMenuListProps } from './types';

export default function List(
    props: HeadlessMenuListProps,
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
