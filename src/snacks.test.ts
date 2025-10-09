import { describe, it, expect } from "vitest";
import { snacksList } from "./snacks.ts";

describe("snacksList", () => {
  it("should have at least 3 items", () => {
    expect(snacksList.length).toBeGreaterThanOrEqual(3);
  });
  it("should include 'Oreos'", () => {
    expect(snacksList).toContain("Oreos");
  });
});


