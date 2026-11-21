// Everything you are likely to change lives here.
export const SITE = {
  name: "Outfits",
  url: "https://theoutfits.app",
  email: "support@theoutfits.app",
  appStore: "https://apps.apple.com/app/id6802752111",
  googlePlay: "https://play.google.com/store/apps/details?id=eu.oscillator.outfits",
  github: "https://github.com/vaclavparma/outfits-app",
  coffee: "https://buymeacoffee.com/vaclavparma",
  illustrator: { handle: "lucylens.cz", url: "https://lucylens.cz" },
  author: { name: "Václav Parma", url: "https://vaclavparma.cz" },
  privacyUpdated: { en: "November 21, 2026", cs: "21. listopadu 2026" },
};

export type Lang = "en" | "cs";
// Pages end with a slash (/privacy/), as Cloudflare Pages serves them and the sitemap lists them.
export const href = (lang: Lang, path = "") => {
  const p = path.replace(/^\/|\/$/g, "");
  return (lang === "en" ? "/" : "/cs/") + (p ? `${p}/` : "");
};

// Which screenshot shows what: public/screenshots/<lang>_screenshot_<n>.webp,
// numbered as in outfits-app/graphics/screenshots/iphone/.
const SCREENSHOTS = { outfit: 1, diary: 2, stats: 3, detail: 4, wardrobe: 5, collection: 6 } as const;
export type Screen = keyof typeof SCREENSHOTS;
export const screenshot = (lang: Lang, screen: Screen) => `/screenshots/${lang}_screenshot_${SCREENSHOTS[screen]}.webp`;
