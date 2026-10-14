import { test } from "node:test";
import assert from "node:assert/strict";
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, readLanguage } from "./i18n";

test("first visit uses English", () => {
  assert.equal(DEFAULT_LANGUAGE, "en");
  assert.equal(readLanguage(null), "en");
});
test("language selection uses app_language", () => {
  assert.equal(LANGUAGE_STORAGE_KEY, "app_language");
});
test("saved Russian selection is restored", () => {
  assert.equal(readLanguage("ru"), "ru");
  assert.equal(readLanguage("en"), "en");
  assert.equal(readLanguage("unexpected"), "en");
});