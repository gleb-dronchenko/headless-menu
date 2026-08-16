import type { HeadlessMenuSubItemProps } from "./types";

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
      <a href={href} className={classNames.link}>
        <span className={classNames.label}>{label}</span>
      </a>
    </li>
  );
}