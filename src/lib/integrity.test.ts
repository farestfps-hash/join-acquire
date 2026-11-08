import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { minimizeAIContext } from "./ai-context";
import { UNIVERSITIES } from "./universities";
import { DEMO_LEADERBOARD } from "./demo-leaderboard";
import { estimateOdds } from "./match";

test("AI context excludes direct identifiers and session secrets while retaining academics", () => {
  const context = minimizeAIContext({
    profile: { full_name: "Excluded", high_school: "Excluded", city: "Excluded", id: "Excluded", bio: "Excluded", email: "Excluded", access_token: "Excluded", password: "Excluded", sat_score: 1510, annual_budget: 10000 },
    ap_exams: [{ id: "Excluded", user_id: "Excluded", subject: "Calculus", score: 5 }],
    olympiads_honors: [{ user_id: "Excluded", name: "Math", placement: "Finalist", role: "Participant", award_date: "05/2025" }],
    extracurriculars: [{ user_id: "Excluded", title: "Robotics", role: "Lead" }],
  });
  assert.equal(JSON.stringify(context).includes("Excluded"), false);
  assert.equal(context.profile.sat_score, 1510);
  assert.equal(context.profile.annual_budget, 10000);
  assert.equal(context.ap_exams[0]?.score, 5);
  assert.equal(context.olympiads_honors[0]?.placement, "Finalist");
  assert.equal(context.extracurriculars[0]?.role, "Lead");
});

test("all 70 demo profiles are retained, closed and distinguishable from registrations", () => {
  assert.equal(DEMO_LEADERBOARD.length, 70);
  assert.equal(new Set(DEMO_LEADERBOARD.map((r) => r.user_id)).size, 70);
  assert.ok(DEMO_LEADERBOARD.every((r) => r.user_id.startsWith("demo-") && r.is_public === false));
});

test("172 universities retain identity without fabricated QS placeholders", () => {
  assert.equal(UNIVERSITIES.length, 172);
  assert.equal(new Set(UNIVERSITIES.map((u) => u.id)).size, 172);
  assert.ok(UNIVERSITIES.every((u) => u.qs !== 1200 && u.qsVerified === false));
});

test("unverified deadlines are estimates and random campus images are removed", () => {
  assert.ok(UNIVERSITIES.every((u) => u.photos.length === 0));
  assert.ok(UNIVERSITIES.flatMap((u) => u.deadlines).every((d) => d.estimated === true));
});

test("missing QS rank yields finite heuristic odds without inventing a rank", () => {
  const university = UNIVERSITIES.find((u) => u.qs === null);
  assert.ok(university);
  assert.equal(estimateOdds(university, {}).probability, 47);
});

test("existing evaluator algorithm retains 620 deterministic synthetic points", () => {
  const source = readFileSync(new URL("../routes/evaluator.tsx", import.meta.url), "utf8");
  const body = source.match(/function benchmarkCloud\(\) \{([\s\S]*?)\n\}\n/);
  assert.ok(body);
  const generate = new Function(body[1]?.replace("const pts: { gpa: number; score: number }[]", "const pts"));
  const points = generate();
  assert.equal(points.length, 620);
  assert.deepEqual(points, generate());
  assert.ok(points.every((p: { gpa: number; score: number }) => p.gpa >= 2.4 && p.gpa <= 4 && p.score >= 15 && p.score <= 99));
});