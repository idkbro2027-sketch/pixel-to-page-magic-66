import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { GallerySection } from "@/components/blackwood-sections";

afterEach(cleanup);

describe("Gallery interaction", () => {
  it("keeps focus on navigation while changing photos and restores it on close", () => {
    render(<GallerySection full />);
    const opener = screen.getByRole("button", { name: "Apri foto: L’arte del dettaglio" });
    fireEvent.click(opener);
    const next = screen.getByRole("button", { name: "Foto successiva" });
    next.focus();
    fireEvent.click(next);
    expect(document.activeElement).toBe(next);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.activeElement).toBe(opener);
    expect(document.body.style.overflow).toBe("");
  });

  it("closes when clicking the backdrop", () => {
    render(<GallerySection full />);
    fireEvent.click(screen.getByRole("button", { name: "Apri foto: L’arte del dettaglio" }));
    fireEvent.click(screen.getByRole("dialog"));
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});