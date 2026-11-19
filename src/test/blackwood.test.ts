import { describe, expect, it } from "vitest";
import { services } from "@/lib/blackwood";

describe("Blackwood service prices", () => {
  it("charges €20 for Taglio uomo", () => expect(services.find(s => s.name === "Taglio uomo")?.price).toBe(20));
  it("charges €15 for Modellatura barba", () => expect(services.find(s => s.name === "Modellatura barba")?.price).toBe(15));
  it("charges €30 for Taglio + Barba", () => expect(services.find(s => s.name === "Taglio + Barba")?.price).toBe(30));
  it("charges €40 for Trattamento premium", () => expect(services.find(s => s.name === "Trattamento premium")?.price).toBe(40));
});