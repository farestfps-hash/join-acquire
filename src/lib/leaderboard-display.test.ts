import { test } from "node:test";
import assert from "node:assert/strict";
import { leaderboardSubtitle } from "./leaderboard-display";

test("closed profiles show school and existing major but never city", () => {
  assert.equal(leaderboardSubtitle({ is_public: false, high_school: "NIS", city: "Almaty", target_major: "Physics" }), "NIS · Physics");
});
test("missing major is not invented", () => {
  assert.equal(leaderboardSubtitle({ is_public: false, high_school: "НИШ", city: "Астана", target_major: null }), "НИШ");
  assert.equal(leaderboardSubtitle({ is_public: false, high_school: "НИШ", target_major: "" }), "НИШ");
});
test("open profiles show school and existing major without city", () => {
  assert.equal(leaderboardSubtitle({ is_public: true, high_school: "NIS", city: "Almaty", target_major: "Physics" }), "NIS · Physics");
  assert.equal(leaderboardSubtitle({ is_public: true, high_school: "NIS", target_major: null }), "NIS");
});