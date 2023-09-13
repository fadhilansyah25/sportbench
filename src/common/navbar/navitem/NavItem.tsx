import { Link } from "react-router-dom";

type NavItemProps = {
  title: string;
  uri: string;
  isSubItem?: boolean;
  hasSubItem?: boolean;
  handleOpenSubMenu?: () => void;
};

/**
 * Represents a navigation item in the menu.
 *
 * @component
 *
 * @param {NavItemProps} props - The component's properties.
 * @param {string} props.title - The title of the navigation item.
 * @param {string} props.uri - The URI or link destination of the navigation item.
 * @param {boolean} [props.isSubItem=false] - Indicates if the item is a sub-menu item.
 * @param {boolean} [props.hasSubItem=false] - Indicates if the item has a sub-menu.
 * @param {function} [props.openSubMenu] - A callback function to open the sub-menu.
 *
 * @example
 * // Example of a main menu item
 * <NavItem title="Home" uri="/home" />
 *
 * // Example of a sub-menu item
 * <NavItem isSubItem title="Submenu Item" uri="/submenu" />
 *
 * // Example of a menu item with a sub-menu
 * <NavItem hasSubItem openSubMenu={handleSubMenu} title="Menu with Submenu" uri="/menu" />
 */
const NavItem = (props: NavItemProps) => {
  return (
    <div className={`flex items-center justify-between`}>
      <Title {...props} />
      <SubMenuButton {...props} />
    </div>
  );
};

type TitleProps = Pick<NavItemProps, "title" | "uri" | "isSubItem">;

const Title = ({ title, uri, isSubItem }: TitleProps) => {
  return (
    <Link
      className={`${isSubItem ? "text-sm" : "text-xl"} capitalize`}
      to={uri}
    >
      {title}
    </Link>
  );
};

type SubMenuButtonProps = Pick<
  NavItemProps,
  "handleOpenSubMenu" | "hasSubItem"
>;

const SubMenuButton = (props: SubMenuButtonProps) => {
  return (
    <button
      onClick={props.handleOpenSubMenu}
      className={`material-icons-outlined ${
        props.hasSubItem ? "" : "invisible"
      }`}
    >
      chevron_right
    </button>
  );
};

export default NavItem;
