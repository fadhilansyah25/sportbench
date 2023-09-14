import React from "react";
import { ListMenu, menus, subMenu } from "./const";
import "./style.css";
import { MenuPanel } from "./MenuPanel";

type Props = {
  initClose?: boolean;
  toggleNavbar: (s: boolean) => void;
};

export default function MobileMenu({ initClose = true, toggleNavbar }: Props) {
  const [subMenuActive, setSubMenuActive] = React.useState<Array<string>>([]);
  const [isClosed, setIsClosed] = React.useState(initClose);

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
      {/* Scrim Layer */}
      <ScrimLayer
        isClosed={initClose}
        handleClose={() => handleClose(!isClosed)}
      />

      {/* Mobile Menu Container */}
      <div className={`mobile_menu ${initClose ? "" : "open_menu"}`}>
        {/* Back And Close Button container */}
        <div className="mb-4 flex w-full justify-between px-4 py-8">
          <BackButton
            isVisible={subMenuActive.length != 0}
            handlePress={() => setSubMenuActive(subMenuActive.slice(0, -1))}
          />
          <CloseButton handleClose={() => handleClose(!isClosed)} />
        </div>

        {/* Panel Container */}
        <div className="relative">
          {/* Root Menu Panel */}
          <MenuPanel
            typePanel="root"
            menus={menus}
            subMenuActive={subMenuActive}
            onOpenSubmenu={handleOpenSubMenu}
          />

          {/* Render All Sub Menu Panel */}
          {Array.from(subMenu.entries()).map(([key, value]) => (
            <MenuPanel
              typePanel="sub"
              menus={value}
              subMenuTitle={key}
              subMenuActive={subMenuActive}
              onOpenSubmenu={handleOpenSubMenu}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

const ScrimLayer = (props: { isClosed: boolean; handleClose: () => void }) => {
  return (
    <div
      className={`pre-scrim ${!props.isClosed ? "open_menu" : ""}`}
      onClick={props.handleClose}
    />
  );
};

const BackButton = (props: { isVisible: boolean; handlePress: () => void }) => (
  <button
    className={`material-symbols-outlined text-xl ${
      !props.isVisible ? "invisible" : ""
    }`}
    onClick={props.handlePress}
  >
    arrow_back_ios_new
  </button>
);

const CloseButton = (props: { handleClose: () => void }) => (
  <button onClick={props.handleClose} className="material-symbols-outlined">
    close
  </button>
);