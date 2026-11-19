import { test } from "node:test";
import assert from "node:assert/strict";
import { CAMPUS_PHOTOS, universityFlag, universityMonogram } from "./university-media";
import { UNIVERSITIES } from "./universities";

test("campus photos resolve to existing universities and include sources and licenses", () => {
  const ids = new Set(UNIVERSITIES.map((uni) => uni.id));
  assert.equal(Object.keys(CAMPUS_PHOTOS).length, 11);
  for (const [id, photo] of Object.entries(CAMPUS_PHOTOS)) {
    assert.ok(ids.has(id), id);
    assert.ok(photo.url.startsWith("/__l5e/assets-v1/"));
    assert.ok(photo.source.startsWith("https://commons.wikimedia.org/wiki/File:"));
    assert.ok(photo.author.length > 0);
    assert.ok(photo.licenseUrl.startsWith("https://creativecommons.org/licenses/"));
  }
});
test("unverified campuses remain without photos", () => {
  assert.equal(CAMPUS_PHOTOS["astana-it-university"], undefined);
});
test("academic monograms use existing names rather than fabricated crests", () => {
  assert.equal(universityMonogram("Massachusetts Institute of Technology (MIT)"), "MIT");
  assert.equal(universityMonogram("University of Oxford"), "UO");
});
test("flags retain country identity in both catalogue languages", () => {
  assert.equal(universityFlag("Europe", "Zurich, Швейцария"), "🇨🇭");
  assert.equal(universityFlag("Europe", "Zurich, Switzerland"), "🇨🇭");
  assert.equal(universityFlag("Hong Kong", "Hong Kong"), "🇭🇰");
});