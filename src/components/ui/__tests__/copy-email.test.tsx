import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CopyEmail } from "../CopyEmail";

describe("CopyEmail", () => {
  beforeEach(() => {
    Object.assign(navigator, { clipboard: { writeText: vi.fn().mockResolvedValue(undefined) } });
  });

  it("shows the email and copies it on click", async () => {
    const user = userEvent.setup();
    render(<CopyEmail email="nihalpuse44@gmail.com" />);
    expect(screen.getByText("nihalpuse44@gmail.com")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /copy email/i }));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("nihalpuse44@gmail.com");
    expect(await screen.findByText(/copied/i)).toBeInTheDocument();
  });
});
