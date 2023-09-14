// Imports
import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// To Test
import NavItem from ".";

// Tests
describe("Renders NavItem component correctly", () => {
  /**
   * Render main menu item
   */
  it("Should renders a main menu item", () => {
    render(<NavItem title="Home" uri="/home" />, {
      wrapper: BrowserRouter,
    });

    const linkElement = screen.getByText("Home");

    expect(linkElement).toBeInTheDocument();
  });

  /**
   * Render a sub-menu item
   */
  it("Should renders a sub-menu item", () => {
    render(<NavItem isSubItem title="Submenu Item" uri="/submenu" />, {
      wrapper: BrowserRouter,
    });

    const linkElement = screen.getByText("Submenu Item");

    expect(linkElement).toBeInTheDocument();
  });

  /**
   * Render a menu item with a sub-menu
   */
  it("renders a menu item with a sub-menu", () => {
    const mockOpenSubMenu = vi.fn();
    render(
      <NavItem
        hasSubItem
        handleOpenSubMenu={mockOpenSubMenu}
        title="Menu with Submenu"
        uri="/menu"
      />,
      { wrapper: BrowserRouter },
    );
    const linkElement = screen.getByText("Menu with Submenu");
    expect(linkElement).toBeInTheDocument();

    // Click the button to open the sub-menu
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockOpenSubMenu).toHaveBeenCalledTimes(1);
  });
});
