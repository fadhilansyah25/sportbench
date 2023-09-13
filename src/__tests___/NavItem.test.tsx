// Imports
import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// To Test
import NavItem from "@/common/navbar/navitem/NavItem";

// Tests
describe("Renders NavItem component correctly", async () => {
  /**
   * Render main menu item
   */
  it("Should renders a main menu item", async () => {
    await render(<NavItem title="Home" uri="/home" />, {
      wrapper: BrowserRouter,
    });

    const linkElement = await screen.getByText("Home");

    expect(linkElement).toBeInTheDocument();
  });

  /**
   * Render a sub-menu item
   */
  it("Should renders a sub-menu item", async () => {
    await render(<NavItem isSubItem title="Submenu Item" uri="/submenu" />, {
      wrapper: BrowserRouter,
    });

    const linkElement = screen.getByText("Submenu Item");

    expect(linkElement).toBeInTheDocument();
  });

  /**
   * Render a menu item with a sub-menu
   */
  it("renders a menu item with a sub-menu", async () => {
    const mockOpenSubMenu = vi.fn();
    await render(
      <NavItem
        hasSubItem
        handleOpenSubMenu={mockOpenSubMenu}
        title="Menu with Submenu"
        uri="/menu"
      />,
      { wrapper: BrowserRouter },
    );
    const linkElement = await screen.getByText("Menu with Submenu");
    expect(linkElement).toBeInTheDocument();

    // Click the button to open the sub-menu
    const buttonElement = await screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockOpenSubMenu).toHaveBeenCalledTimes(1);
  });
});
