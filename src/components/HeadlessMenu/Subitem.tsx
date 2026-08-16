import type { HeadlessMenuSubItemProps } from "./types";

export default function SubItem({
    as: LinkComponent = 'a',
    label,
    classNames = {
        item: '',
        link: '',
        label: '',
    },
    ...rest
}: HeadlessMenuSubItemProps) {
    return (
        <li className={classNames.item}>
            <LinkComponent 
                {...rest}
                className={classNames.link ?? ''}
            >
                <span className={classNames.label}>{label}</span>
            </LinkComponent>
        </li>
    );
}