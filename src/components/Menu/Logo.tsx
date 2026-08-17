import { useMenuContext } from './hooks';
import type { MenuLogoProps } from './types';

export function ShortLogo(
    { children }: MenuLogoProps,
) {
    const { isSidebarOpen, isMobile } = useMenuContext();
    
    if (isMobile || isSidebarOpen) {
        return null;
    }

    return (
        <>{ children }</>
    );
}

export function FullLogo(
    { children }: MenuLogoProps,
) {
    const { isSidebarOpen, isMobile } = useMenuContext();
    
    if (isMobile || !isSidebarOpen) {
        return null;
    }

    return (
        <>{ children }</>
    );
}
