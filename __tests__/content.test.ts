import { describe, expect, it } from "vitest";
import { services, getService } from "@/content/services";
import { faqs } from "@/content/site";

describe("site content", () => {
  it("renders required service slugs", () => {
    expect(services).toHaveLength(10);
    expect(getService("artificial-intelligence")?.title).toBe("Artificial Intelligence");
  });

  it("includes at least ten FAQs", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(10);
  });
});
