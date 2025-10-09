import { describe, it, expect } from "vitest";
import { musicList } from "./music.ts";

describe("musicList", () => {
  it("should have at least 3 items", () => {
    expect(musicList.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Ordinary'", () => {
    expect(musicList).toContain("Ordinary");
  });
});
