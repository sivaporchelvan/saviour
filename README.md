import { describe, expect, it } from "vitest";
import { getSymbolById, symbolCatalog } from "./siva-symbols";

describe("SIVA symbol definitions", () => {
  it("includes the Pati and Pasu distinction", () => {
    const pati = getSymbolById("pati");
    const pasu = getSymbolById("pasu");

    expect(pati.name.en).toBe("Pati");
    expect(pasu.name.en).toBe("Pasu");
    expect(pati.artworkNote).toContain("Pati");
    expect(pasu.artworkNote).toContain("Pati");
  });

  it("keeps artistic language explicit and avoids unsupported citations", () => {
    const allNotes = symbolCatalog.map((symbol) => symbol.artworkNote).join(" ");
    expect(allNotes).toContain("Artistic interpretation only");
    expect(allNotes).not.toContain("scripture");
  });
});
