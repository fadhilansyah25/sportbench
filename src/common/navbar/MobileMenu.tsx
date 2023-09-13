import React from "react";
import { ListMenu, menus, subMenu } from "./const";
import NavItem from "./navitem/NavItem";
import "./style.css";

type Props = {
  isClose?: boolean;
  toggleNavbar: (s: boolean) => void;
};

export default function MobileMenu({ isClose = true, toggleNavbar }: Props) {
  const [subMenuActive, setSubMenuActive] = React.useState<Array<string>>([]);
  const [isClosed, setIsClosed] = React.useState(isClose);

  const handleOpenSubMenu = (item: ListMenu) => {
    if (subMenu.has(item.title)) {
      setSubMenuActive([...subMenuActive, item.title]);
      return;
    }
  };

  const handleClose = (state: boolean) => {
    setIsClosed(state);
    if (toggleNavbar) {
      toggleNavbar(state);
    }
    setSubMenuActive([]);
  };

  return (
    <nav>
      <div
        className={`pre-scrim ${isClose ? "" : "open_menu"}`}
        onClick={() => handleClose(!isClosed)}
      />
      <div className={`mobile_menu ${isClose ? "" : "open_menu"}`}>
        {/* Back and Close Button */}
        <div className="mb-4 flex w-full justify-between px-4 py-8">
          <button
            className={`material-symbols-outlined text-xl ${
              subMenuActive.length ? "" : "invisible"
            }`}
            onClick={() => setSubMenuActive(subMenuActive.slice(0, -1))}
          >
            arrow_back_ios_new
          </button>
          <button
            onClick={() => handleClose(!isClosed)}
            className="material-symbols-outlined"
          >
            close
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="relative ">
          {/* Root Panel */}
          <div
            className={`pre_panel pre_panel_root ${
              subMenuActive.length ? "pre_hide_left" : ""
            }`}
          >
            {menus.map((item, index) => (
              <React.Fragment key={`${item.title}-${index}`}>
                {/* Main Menu */}
                <NavItem
                  title={item.title}
                  uri={item.uri}
                  hasSubItem={item.subListMenu ? true : false}
                  handleOpenSubMenu={() => handleOpenSubMenu(item)}
                />
              </React.Fragment>
            ))}
          </div>

          {/* Sub menu */}
          {Array.from(subMenu.entries()).map(([key, value]) => (
            <div
              className={`pre_panel pre_panel_sub ${
                subMenuActive.at(-1) === key ? "" : "pre_hide_right"
              }`}
              id={key}
              key={key}
            >
              <p className="mb-6 text-xl capitalize">{key}</p>
              <div className="flex flex-col gap-4">
                {value.map((item, index) => (
                  <NavItem
                    isSubItem
                    key={`${item.title}-${index}`}
                    title={item.title}
                    uri={item.uri}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
