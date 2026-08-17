import { useItemContext } from './hooks';
import type { MenuOverlayProps } from './types';

export default function Overlay(
    props: MenuOverlayProps,
) {
    const { closeSubmenu } = useItemContext();

    return (
        <div
            {...props}
            data-part="overlay"
            onClick={closeSubmenu}
        />
    );
}
