import { test } from "node:test";
import assert from "node:assert/strict";
import { awardMonth, awardDateUpdate, awardDateLabel } from "./honors";
import { minimizeAIContext } from "./ai-context";

test("award month and year persist as MM/YYYY with the compatible year field", () => {
  assert.deepEqual(awardDateUpdate("2025-05"), { award_date: "05/2025", year: 2025 });
  assert.deepEqual(awardDateUpdate(""), { award_date: null, year: null });
});
test("existing award dates and year-only records remain readable", () => {
  assert.equal(awardMonth("05/2025"), "2025-05");
  assert.equal(awardMonth("2025-05"), "2025-05");
  assert.equal(awardDateLabel("05/2025", 2025), "05/2025");
  assert.equal(awardDateLabel(null, 2024), "2024");
});
test("AI receives freely written placement and the detailed award fields", () => {
  const award = { name: "Mathematics competition", role: "Top 10 finalist", placement: "Top 10 finalist", awarding_institution: "EdUHK", award_date: "05/2025", year: 2025, country_region: "Hong Kong", level: "International", subject: "Math" };
  const context = minimizeAIContext({ profile: {}, ap_exams: [], olympiads_honors: [award], extracurriculars: [] });
  assert.deepEqual(context.olympiads_honors[0], award);
});