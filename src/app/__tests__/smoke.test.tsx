import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../page";

describe("Home page", () => {
  it("renders the placeholder marker", () => {
    render(<Home />);
    expect(screen.getByText(/~\/nihal/)).toBeInTheDocument();
  });
});
