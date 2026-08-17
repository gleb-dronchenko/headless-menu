import { useItemContext } from './hooks';
import type { MenuTitleProps } from './types';

export default function Title(
    props: MenuTitleProps,
) {
    const {
        ...rest
    } = props;
    const { label } = useItemContext();

    return (
        <h2 {...rest} data-part="title">
            {label}
        </h2>
    );
}
