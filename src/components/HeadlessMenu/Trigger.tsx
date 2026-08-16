import type { ElementType } from 'react';
import { useItemContext } from './hooks';
import type { HeadlessMenuTriggerProps } from './types';

export default function Trigger(
    props: HeadlessMenuTriggerProps,
) {
    const {
        as,
        className,
        children,
        ...rest
    } = props;
    const { toggleSubmenu } = useItemContext();

    if (!as) {
        return (
            <button
                type="button"
                className={className}
                onClick={toggleSubmenu}
            >
                {children}
            </button>
        );
    }

    const LinkComponent: ElementType = as;

    return (
        <LinkComponent className={className} {...rest}>
            {children}
        </LinkComponent>
    );
}
