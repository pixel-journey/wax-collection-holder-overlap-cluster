import { describe, expect, it } from "vitest";
import { jaccard } from "./jaccard";

describe("jaccard", () => {
  it("counts shared accounts once and divides by the union", () => {
    const row = jaccard(["alice", "bob", "bob"], ["bob", "carol"]);
    expect(row).toEqual({ ok: true, intersection: 1, union: 3, score: 1 / 3 });
  });

  it("is 1 for the same set and 0 when nothing is shared", () => {
    expect(jaccard(["alice"], ["alice"])).toMatchObject({ score: 1, intersection: 1, union: 1 });
    expect(jaccard(["alice"], ["bob"])).toMatchObject({ score: 0, intersection: 0, union: 2 });
  });

  it("refuses an empty list, a 65th name, and a bad account", () => {
    expect(jaccard([], ["alice"])).toEqual({ ok: false, reason: "left must list 1 to 64 accounts" });
    expect(jaccard(["alice"], Array.from({ length: 65 }, () => "bob"))).toEqual({
      ok: false,
      reason: "right must list 1 to 64 accounts",
    });
    expect(jaccard(["Alice"], ["bob"])).toEqual({ ok: false, reason: "Alice is not an account" });
  });
});
