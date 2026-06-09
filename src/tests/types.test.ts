/**
 * Smoke tests — verify the type system is internally consistent
 * and runtime helpers work as expected.
 */
import { describe, it, expect } from "vitest";
import {
  lighthouseColor,
  SPRINGS,
  EASE_OUT_EXPO,
  fadeUp,
  staggerContainer,
  ChatRequestSchema,
} from "@/types";

describe("lighthouseColor", () => {
  it("returns green for scores >= 90", () => {
    expect(lighthouseColor(90)).toBe("green");
    expect(lighthouseColor(100)).toBe("green");
  });

  it("returns amber for scores 50–89", () => {
    expect(lighthouseColor(50)).toBe("amber");
    expect(lighthouseColor(89)).toBe("amber");
  });

  it("returns red for scores < 50", () => {
    expect(lighthouseColor(0)).toBe("red");
    expect(lighthouseColor(49)).toBe("red");
  });
});

describe("SPRINGS", () => {
  it("exports snappy, default, and gentle presets", () => {
    expect(SPRINGS.snappy.stiffness).toBeGreaterThan(SPRINGS.default.stiffness);
    expect(SPRINGS.gentle.stiffness).toBeLessThan(SPRINGS.default.stiffness);
  });
});

describe("EASE_OUT_EXPO", () => {
  it("is a 4-element cubic bezier array", () => {
    expect(EASE_OUT_EXPO).toHaveLength(4);
    EASE_OUT_EXPO.forEach((v) => expect(typeof v).toBe("number"));
  });
});

describe("fadeUp", () => {
  it("returns hidden and visible variants", () => {
    const v = fadeUp();
    expect(v.hidden).toBeDefined();
    expect(v.visible).toBeDefined();
  });

  it("applies custom distance to hidden.y", () => {
    const v = fadeUp(64);
    expect((v.hidden as { y: number }).y).toBe(64);
  });
});

describe("staggerContainer", () => {
  it("embeds staggerChildren in visible transition", () => {
    const v = staggerContainer(0.1);
    const transition = (v.visible as { transition: { staggerChildren: number } })
      .transition;
    expect(transition.staggerChildren).toBe(0.1);
  });
});

describe("ChatRequestSchema", () => {
  it("accepts a valid message array", () => {
    const result = ChatRequestSchema.safeParse({
      messages: [{ role: "user", content: "Hello" }],
    });
    expect(result.success).toBe(true);
  });

  it("rejects an unknown role", () => {
    const result = ChatRequestSchema.safeParse({
      messages: [{ role: "admin", content: "Hello" }],
    });
    expect(result.success).toBe(false);
  });

  it("rejects empty content", () => {
    const result = ChatRequestSchema.safeParse({
      messages: [{ role: "user", content: "" }],
    });
    expect(result.success).toBe(false);
  });
});
