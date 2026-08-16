import type { ElementType } from 'react';
import type { HeadlessMenuSubItemProps } from './types';

export default function Subitem(
    props: HeadlessMenuSubItemProps,
) {
    const {
        as,
        className,
        children,
        ...rest
    } = props;
    const LinkComponent: ElementType = as ?? 'a';

    return (
        <li>
            <LinkComponent className={className} {...rest}>
                {children}
            </LinkComponent>
        </li>
    );
}
