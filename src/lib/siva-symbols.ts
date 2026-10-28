export type SymbolDefinition = {
  id: string;
  name: { en: string; ta: string };
  subtitle: { en: string; ta: string };
  description: { en: string; ta: string };
  artworkNote: string;
  position: [number, number, number];
  color: string;
  accent: string;
};

export const symbolCatalog: SymbolDefinition[] = [
  {
    id: "pati",
    name: { en: "Pati", ta: "பதி" },
    subtitle: { en: "The Supreme Principle", ta: "உச்சமான ஆதாரம்" },
    description: {
      en: "Pati is depicted as the supreme ground of being, beyond the individual soul. This is a devotional artistic interpretation, not a claimed scriptural citation.",
      ta: "பதி, தனியாள் ஆத்துமாவுக்கு அப்பாற்பட்ட உச்சமான இருப்பின் ஆதாரமாகக் காட்டப்படுகிறது. இது பக்தி சார்ந்த கலை விளக்கம் மட்டும்; சான்று வழங்கப்பட்ட வேத உரை அல்ல.",
    },
    artworkNote: "Artistic interpretation only: this framing preserves Siva as Pati, distinct from the individual soul, Pasu.",
    position: [0, 0.9, 0],
    color: "#e5d3ff",
    accent: "#f4c969",
  },
  {
    id: "pasu",
    name: { en: "Pasu", ta: "பசு" },
    subtitle: { en: "Individual soul", ta: "தனிநபர் ஆத்துமா" },
    description: {
      en: "Pasu represents the individual being moving through change, effort, and experience. Here it remains separate from Pati, the higher ground of being.",
      ta: "பசு, மாறுதல், முயற்சி, அனுபவம் வழியாக நகரும் தனிநபர் இருப்பைக் குறிக்கிறது. இங்கு அது பதி என்ற உயர்ந்த இருப்பின் ஆதாரத்திலிருந்து வேறுபட்டதாகக் காட்டப்படுகிறது.",
    },
    artworkNote: "Artistic interpretation only: the distinction between Pati and Pasu is preserved without inventing scriptural specifics.",
    position: [1.9, -0.5, 0],
    color: "#8bc1ff",
    accent: "#ffd77c",
  },
  {
    id: "lotus",
    name: { en: "Lotus", ta: "தாமரை" },
    subtitle: { en: "Purity and unfolding", ta: "சுத்தம் மற்றும் விரிவாக்கம்" },
    description: {
      en: "The lotus is interpreted as a symbol of serenity, inner opening, and quiet growth. It is presented as devotional art, not a scriptural claim.",
      ta: "தாமரை அமைதி, உள்ளார்ந்த திறப்பு, மென்மையான வளர்ச்சி ஆகியவற்றைக் குறிக்கும் கலைப் பொருளாக உள்ளது. இது வேதிகருத்து உறுதிப்பாடு அல்ல; பக்தி சார்ந்த உருவகமாகும்.",
    },
    artworkNote: "Artistic interpretation only. This is a procedural symbol, not a final sculptural asset.",
    position: [-2.2, 0.6, 0.8],
    color: "#a7d5ff",
    accent: "#dfb4ff",
  },
  {
    id: "trident",
    name: { en: "Trident", ta: "திரிசூலம்" },
    subtitle: { en: "Balance of will, wisdom, and grace", ta: "சித்தி, ஞானம், அருளின் சமநிலை" },
    description: {
      en: "The trident is used here as a geometric emblem of focused direction and balanced power. It is presented as a devotional artistic sign rather than a doctrinal claim.",
      ta: "திரிசூலம் இங்கு ஒரே நோக்கத்தில் அமைந்த சக்தி, ஞானம், அருளின் சமநிலையை குறிக்கிறது. இது கோட்பாட்டு உறுதிப்பாடாக அல்ல, பக்தி சார்ந்த கலைக் குறியீடாகும்.",
    },
    artworkNote: "Artistic interpretation only. Procedural geometry stands in place of a final Blender asset for this milestone.",
    position: [2.2, 0.8, -0.5],
    color: "#e8d6b7",
    accent: "#b5d2ff",
  },
  {
    id: "third-eye",
    name: { en: "Third Eye", ta: "மூன்றாம் கண்" },
    subtitle: { en: "Inner vision", ta: "உட்பார்வை" },
    description: {
      en: "The third eye suggests clarity, inward perception, and the quiet movement from confusion toward contemplative understanding. It is treated as a devotional symbol rather than a literal citation.",
      ta: "மூன்றாம் கண் தெளிவு, உட்பார்வை, குழப்பத்திலிருந்து அமைதியான ஞானத்திற்கான நகர்வை குறிக்கிறது. இது நேரடி மேற்கோள் அல்ல, பக்திசார்ந்த குறியீடாக வழங்கப்படுகிறது.",
    },
    artworkNote: "Artistic interpretation only. No scriptural quotations are invented here.",
    position: [-1.5, -1.1, -1.7],
    color: "#caa1ff",
    accent: "#ffe299",
  },
  {
    id: "lingam",
    name: { en: "Lingam", ta: "லிங்கம்" },
    subtitle: { en: "Ground of becoming", ta: "உருவாகும் ஆதாரம்" },
    description: {
      en: "The lingam is treated as a meditative form that evokes stillness and divine presence, without claiming specific scriptural justification in this prototype.",
      ta: "லிங்கம் அமைதி, தெய்வீக இருப்பு, மற்றும் ஆழ்ந்த சிந்தனையை தூண்டும் கலை வடிவமாக வழங்கப்படுகிறது. இந்த முன்மாதிரியில் குறிப்பிட்ட வேதிகருத்து நிறுவனம் கூறப்படுவதில்லை.",
    },
    artworkNote: "Artistic interpretation only. Replace this procedural form with a handcrafted Blender model in the next phase.",
    position: [0, -1.3, 2.1],
    color: "#f4c59d",
    accent: "#bfdcff",
  },
  {
    id: "moon",
    name: { en: "Moon", ta: "சந்திரன்" },
    subtitle: { en: "Gentle rhythm", ta: "மென்மையான தாளம்" },
    description: {
      en: "The moon here suggests a calming cadence and a devotional mood of serenity rather than a fixed doctrinal meaning. It remains open to personal reflection.",
      ta: "சந்திரன் இங்கு அமைதி, மென்மையான தாளம், பக்தி சார்ந்த மனநிலையை குறிக்கிறது. இது இறுதியான கருத்துருவாக்கம் அல்ல; சிந்தனையைத் தூண்டும் கலைக்குறியீடு.",
    },
    artworkNote: "Artistic interpretation only. A final asset set will replace this procedural object later.",
    position: [2.5, -1.8, 1.5],
    color: "#dfe4ff",
    accent: "#f3d2af",
  },
];

export function getSymbolById(id: string): SymbolDefinition {
  return symbolCatalog.find((symbol) => symbol.id === id) ?? symbolCatalog[0];
}
