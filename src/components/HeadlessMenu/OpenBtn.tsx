import AngleRightIcon from '../../assets/icons/angle-right.svg';
import { useMenuContext } from './hooks';

type OpenBtnProps = {
    classNames: {
        container: string;
        button: string;
        icon: string;
        iconOpened: string;
    }    
}
export default function OpenBtn({ classNames }: OpenBtnProps) {
    const { isSidebarOpen, setIsSidebarOpen } = useMenuContext();
    
    return (
        <div className={classNames?.container}>
            <button
                type="button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={classNames?.button}
            >
                <AngleRightIcon
                    className={[
                        classNames?.icon,
                        (isSidebarOpen ? classNames?.iconOpened : {}),
                    ].join(' ')}
                />
            </button>
        </div>
    )
}
