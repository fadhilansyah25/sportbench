// Imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// To Test
import NavItem from "@/common/navbar/navitem/NavItem";

// Tests
describe("Renders NavItem component correctly", async () => {
  /**
   * Passes - shows title correctly
   */
  it("Should renders a main menu item", async () => {
    // Setup
    await render(<NavItem title="Home" uri="/home" />, {
      wrapper: BrowserRouter,
    });
    const linkElement = await screen.getByText("Home");

    // Post Expectations
    expect(linkElement).toBeInTheDocument();
  });

  //   /**
  //    * Passes - shows the button count correctly present
  //    */
  //   it("Should show the button count set to 0", async () => {
  //     await render(<App />);
  //     const button = await screen.getByText("count is 0");

  //     // Expectations
  //     expect(button).not.toBeNull();
  //   });
});
