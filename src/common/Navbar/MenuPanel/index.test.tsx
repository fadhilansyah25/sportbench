import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

// To Test
import MenuPanel from ".";
import { mockMenus } from "./const";
import { ListMenu } from "../const";

describe("MenuPanel Component", async () => {
  // Define a mock callback function

  const mockOnOpenSubMenu = vi.fn();

  it("should render root menu panel without sub-menu", () => {
    const { getByText, queryByText } = render(
      <MenuPanel
        typePanel="root"
        menus={mockMenus}
        subMenuActive={[]}
        onOpenSubmenu={mockOnOpenSubMenu}
      />,
      {
        wrapper: BrowserRouter,
      },
    );

    // check if the component renders the menu item
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    // Ensure sub-menu items are not visible
    expect(queryByText("Mission")).toBeNull();
    expect(queryByText("Vision")).toBeNull();
  });

  it("should render sub menu panel with sub-menu items", () => {
    const { getByText } = render(
      <MenuPanel
        typePanel="sub"
        menus={mockMenus[1].subListMenu as ListMenu[]}
        subMenuActive={["About"]}
        onOpenSubmenu={mockOnOpenSubMenu}
        subMenuTitle="About"
      />,
      {
        wrapper: BrowserRouter,
      },
    );

    // Check if the component renders the sub-menu items
    expect(getByText("Mission")).toBeInTheDocument();
    expect(getByText("Vision")).toBeInTheDocument();
  });

  it("should call onOpenSubMenu when a root-menu item is clicked", async () => {
    await render(
      <MenuPanel
        typePanel="root"
        menus={mockMenus}
        subMenuActive={[]}
        onOpenSubmenu={mockOnOpenSubMenu}
      />,
      {
        wrapper: BrowserRouter,
      },
    );

    const aboutLink = screen.getByText("About");
    const aboutChevronButton = aboutLink.nextSibling;

    expect(aboutChevronButton).toBeInTheDocument();

    if (aboutChevronButton) {
      fireEvent.click(aboutChevronButton);
    }

    expect(mockOnOpenSubMenu).toHaveBeenCalledOnce();
  });

  it("should handle the case when no menus are provided", () => {
    const { queryByText } = render(
      <MenuPanel
        menus={[]}
        subMenuActive={[]}
        onOpenSubmenu={mockOnOpenSubMenu}
        typePanel="root"
      />,
    );

    // Ensure that no menu items are rendered
    expect(queryByText("Home")).toBeNull();
    expect(queryByText("About")).toBeNull();
  });
});
