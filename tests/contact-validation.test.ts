import test from "node:test";
import assert from "node:assert/strict";
import { escapeHtml, validateContactSubmission } from "../lib/contact-validation.ts";

const validSubmission = {
  name: "Amina Khan",
  email: "AMINA@example.com",
  mobile: "+92 300 1234567",
  country: "Pakistan",
  message: "I would like to arrange a trial class.",
  website: "",
};

test("normalizes a valid contact submission", () => {
  const result = validateContactSubmission(validSubmission);
  assert.equal(result.success, true);
  if (result.success) assert.equal(result.data.email, "amina@example.com");
});

test("rejects malformed email and header injection", () => {
  for (const email of ["not-an-email", "person@example.com\r\nBcc: attacker@example.com"]) {
    const result = validateContactSubmission({ ...validSubmission, email });
    assert.equal(result.success, false);
    if (!result.success) assert.ok(result.errors.email);
  }
});

test("rejects honeypot and oversized fields", () => {
  const honeypot = validateContactSubmission({ ...validSubmission, website: "spam.example" });
  assert.equal(honeypot.success, false);

  const oversized = validateContactSubmission({ ...validSubmission, message: "x".repeat(2001) });
  assert.equal(oversized.success, false);
  if (!oversized.success) assert.ok(oversized.errors.message);
});

test("escapes malicious HTML before email rendering", () => {
  assert.equal(
    escapeHtml('<img src=x onerror="alert(1)">&'),
    "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;&amp;",
  );
});
