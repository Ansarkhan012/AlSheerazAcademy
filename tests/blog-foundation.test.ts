import test from "node:test";
import assert from "node:assert/strict";
import { isAuthorizedProfile } from "../lib/blog/authorization.ts";
import { isEditorDocument, isPostStatus, isValidBlogSlug } from "../lib/blog/validation.ts";

test("authorizes only active admin and editor profiles", () => {
  assert.equal(isAuthorizedProfile({ role: "admin", is_active: true }), true);
  assert.equal(isAuthorizedProfile({ role: "editor", is_active: true }), true);
  assert.equal(isAuthorizedProfile({ role: "editor", is_active: false }), false);
  assert.equal(isAuthorizedProfile({ role: "admin", is_active: false }), false);
  assert.equal(isAuthorizedProfile({ role: "owner", is_active: true }), false);
  assert.equal(isAuthorizedProfile(null), false);
});

test("accepts only supported post statuses", () => {
  for (const status of ["draft", "published", "archived"]) assert.equal(isPostStatus(status), true);
  for (const status of ["scheduled", "deleted", "admin", ""]) assert.equal(isPostStatus(status), false);
});

test("validates canonical lowercase blog slugs", () => {
  for (const slug of ["tajweed", "learn-quran-101"]) assert.equal(isValidBlogSlug(slug), true);
  for (const slug of ["Tajweed", "learn_quran", "-tajweed", "tajweed-", "two--hyphens", ""]) assert.equal(isValidBlogSlug(slug), false);
});

test("requires a structured editor document", () => {
  assert.equal(isEditorDocument({ type: "doc", content: [] }), true);
  assert.equal(isEditorDocument({ type: "doc", content: [], schemaVersion: 1 }), true);
  assert.equal(isEditorDocument({ type: "html", content: [] }), false);
  assert.equal(isEditorDocument({ type: "doc", content: "<script>alert(1)</script>" }), false);
});
