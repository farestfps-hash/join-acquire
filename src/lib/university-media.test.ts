import { test } from "node:test";
import assert from "node:assert/strict";
import { CAMPUS_PHOTOS, universityFlag, universityMonogram } from "./university-media";
import { UNIVERSITIES } from "./universities";

test("campus photos resolve to existing universities and include sources and licenses", () => {
  const ids = new Set(UNIVERSITIES.map((uni) => uni.id));
  assert.equal(Object.keys(CAMPUS_PHOTOS).length, 163);
  for (const [id, photo] of Object.entries(CAMPUS_PHOTOS)) {
    assert.ok(ids.has(id), id);
    assert.ok(photo.url.startsWith("/__l5e/assets-v1/"));
    assert.ok(photo.source.startsWith("https://commons.wikimedia.org/wiki/File:"));
    assert.ok(photo.author.length > 0);
    assert.ok(photo.licenseUrl.startsWith("https://creativecommons.org/licenses/") || photo.licenseUrl.startsWith("https://creativecommons.org/publicdomain/"));
  }
});
test("unverified campuses remain without photos", () => {
  assert.equal(CAMPUS_PHOTOS["turan-university"], undefined);
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
test("21 of 30 Kazakhstan universities have verified campus photos", () => {
  assert.equal(Object.keys(CAMPUS_PHOTOS).filter((id) => UNIVERSITIES.find((u) => u.id === id)?.country === "Kazakhstan").length, 21);
});
test("all 12 Hong Kong universities and the requested top US/UK/German universities have photos", () => {
  assert.equal(Object.keys(CAMPUS_PHOTOS).filter((id) => UNIVERSITIES.find((u) => u.id === id)?.country === "Hong Kong").length, 12);
  for (const id of ["princeton-university", "california-institute-of-technology", "university-of-california-berkeley", "imperial-college-london", "university-college-london", "technical-university-of-munich"]) assert.ok(CAMPUS_PHOTOS[id], id);
});
test("all 50 US universities have verified campus photos", () => {
  assert.equal(Object.keys(CAMPUS_PHOTOS).filter((id) => UNIVERSITIES.find((u) => u.id === id)?.country === "USA").length, 50);
});
test("all 80 European universities have verified campus photos", () => {
  assert.equal(Object.keys(CAMPUS_PHOTOS).filter((id) => UNIVERSITIES.find((u) => u.id === id)?.country === "Europe").length, 80);
});
