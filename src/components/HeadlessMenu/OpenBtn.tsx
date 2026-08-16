import { useMenuContext } from './hooks';

type OpenBtnProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    classNames: {
        container: string;
        button: string;
        icon: string;
        iconOpened: string;
    }    
}
export default function OpenBtn({ classNames, icon }: OpenBtnProps) {
    const { isSidebarOpen, setIsSidebarOpen } = useMenuContext();
    const Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> = icon;

    return (
        <div className={classNames?.container}>
            <button
                type="button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={classNames?.button}
            >
                <Icon
                    className={[
                        classNames?.icon,
                        (isSidebarOpen ? classNames?.iconOpened : ''),
                    ].join(' ')}
                />
            </button>
        </div>
    )
}
