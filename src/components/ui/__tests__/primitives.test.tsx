import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SectionHeading } from "../SectionHeading";
import { Badge } from "../Badge";
import { Chip } from "../Chip";
import { SkipLink } from "../SkipLink";

describe("ui primitives", () => {
  it("SectionHeading renders label and a heading with id", () => {
    render(<SectionHeading id="work-heading" label="Selected work" title="Work" />);
    expect(screen.getByText("Selected work")).toBeInTheDocument();
    const h = screen.getByRole("heading", { name: "Work" });
    expect(h).toHaveAttribute("id", "work-heading");
  });

  it("Badge renders its children", () => {
    render(<Badge>Featured</Badge>);
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });

  it("Chip renders its children", () => {
    render(<Chip>React</Chip>);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("SkipLink points to #main", () => {
    render(<SkipLink />);
    expect(screen.getByRole("link", { name: /skip to content/i })).toHaveAttribute("href", "#main");
  });
});
