import { test } from "node:test";
import assert from "node:assert/strict";
import { UNIVERSITIES } from "./universities";

const byId = (id: string) => UNIVERSITIES.find((u) => u.id === id);

test("official QS 2027 ranks are shown as published", () => {
  assert.equal(byId("massachusetts-institute-of-technology")?.qsLabel, "1");
  assert.equal(byId("princeton-university")?.qsLabel, "=25");
  assert.equal(byId("al-farabi-kazakh-national-university")?.qsLabel, "166");
  assert.equal(byId("toraighyrov-university")?.qsLabel, "1401+");
});
test("band ranks sort by their lower bound", () => {
  assert.equal(byId("d-serikbayev-east-kazakhstan-technical-university")?.qs, 1001);
  assert.equal(byId("princeton-university")?.qs, 25);
});
test("universities QS does not rank get no invented rank", () => {
  assert.equal(byId("nazarbayev-university")?.qs, null);
  assert.equal(byId("williams-college")?.qsVerified, false);
  assert.equal(UNIVERSITIES.filter((u) => u.qsVerified).length, 149);
});
