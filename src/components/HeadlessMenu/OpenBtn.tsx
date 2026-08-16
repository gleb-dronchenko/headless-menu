import { useMenuContext } from './hooks';
import type { HeadlessMenuOpenBtnProps } from './types';

export default function OpenBtn({ className, children }: HeadlessMenuOpenBtnProps) {
    const { isSidebarOpen, setIsSidebarOpen } = useMenuContext();

    return (
        <button
            type="button"
            className={className}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
            {children}
        </button>
    );
}
