import { ListMenu } from "../const";
import NavItem from "../NavItem";
import "./style.css";

type RootPanelProps = {
  typePanel: "root" | "sub";
  menus: ListMenu[];
  subMenuActive: string[];
  onOpenSubmenu: (item: ListMenu) => void;
  subMenuTitle?: string;
};

/**
 * Represents a menu panel component that displays a list of navigation items.
 * @param {RootPanelProps} props - The component's props.
 * @param {ListMenu[]} props.menus - An array of menu items to display.
 * @param {string[]} props.subMenuActive - An array of active submenu titles.
 * @param {function} props.onOpenSubmenu - A callback function to handle submenu opening.
 * @param {string} [props.subMenuTitle] - The title of the submenu (only used when `typePanel` is "sub").
 * @param {("root" | "sub")} props.typePanel - The type of panel ("root" for the root panel, "sub" for subpanels).
 * @returns {JSX.Element} The rendered menu panel component.
 *
 *  * @example
 * // Usage example:
 * // Render a root menu panel
 * <MenuPanel
 *   menus={rootMenus}
 *   subMenuActive={activeSubmenus}
 *   onOpenSubmenu={handleOpenSubmenu}
 *   typePanel="root"
 * />
 *
 * // Render a sub menu panel
 * <MenuPanel
 *   menus={subMenus}
 *   subMenuActive={activeSubmenus}
 *   onOpenSubmenu={handleOpenSubmenu}
 *   subMenuTitle="SubMenuTitle"
 *   typePanel="sub"
 * />
 */
export const MenuPanel = (props: RootPanelProps): JSX.Element => {
  const rootStyle = [
    "pre_panel_root",
    `${props.subMenuActive.length ? "pre_hide_left" : ""}`,
  ];

  const subStyle = [
    "pre_panel_sub",
    `${
      props.subMenuActive.at(-1) === props.subMenuTitle ? "" : "pre_hide_right"
    }`,
  ];

  const panelClassName = `pre_panel ${
    props.typePanel === "root" ? rootStyle.join(" ") : subStyle.join(" ")
  }`;

  return (
    <div className={panelClassName}>
      {props.typePanel === "sub" ? (
        <p className="text-xl capitalize">{props.subMenuTitle}</p>
      ) : null}
      {props.menus.map((item, index) => (
        <NavItem
          isSubItem={props.typePanel === "sub"}
          key={`${item.title}-${index}`}
          title={item.title}
          uri={item.uri}
          hasSubItem={item.subListMenu ? true : false}
          handleOpenSubMenu={() => props.onOpenSubmenu(item)}
        />
      ))}
    </div>
  );
};

export default MenuPanel;
