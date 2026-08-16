import type { HeadlessMenuSubItemProps } from "./types";
import { NavLink } from 'react-router-dom';

export default function SubItem({
  label,
  href,
  classNames = {
    item: '',
    link: '',
    label: '',
  },
}: HeadlessMenuSubItemProps) {

    return (
        <li className={classNames.item}>
            <NavLink to={href ?? ''} className={classNames.link ?? ''}>
                <span className={classNames.label}>{label}</span>
            </NavLink>
        </li>
    );
}