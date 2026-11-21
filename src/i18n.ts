import type { Lang } from './site';

export const t = {
  en: {
    meta: {
      title: 'Outfits – mix outfits from your own clothes',
      description:
        'A private wardrobe app. Photograph your clothes once, mix outfits by tapping, and keep a diary of what you actually wear. No account, no ads.',
    },
    nav: { how: 'How it works', privacy: 'Privacy', support: 'Support', switchTo: 'Čeština' },
    hero: {
      title: 'Wear what you already own.',
      lead: 'Outfits is a private wardrobe app. Photograph your clothes once, mix outfits by tapping, and keep a diary of what you actually wear.',
      note: 'Free on iPhone, iPad and Android. No account, no ads.',
      hint: 'Tap a piece to swap it.',
      shuffle: 'Shuffle',
      canvasLabel: 'Try it: a sample outfit you can change',
    },
    slots: { top: 'Top', layer: 'Layer', bottom: 'Bottom' },
    how: {
      title: 'How it works',
      steps: [
        { title: 'Photograph your clothes', text: 'Take a photo or pick several from your gallery. Outfits recognizes the colors and names each piece for you, like “Brown jacket”.', shot: 'wardrobe', alt: 'Wardrobe screen with clothes sorted into T‑shirts, Sweaters, Hoodies, Coats, Jackets and Pants' },
        { title: 'Mix outfits', text: 'Tap a piece to pick another, layer a jacket over a tee, pin what you like and shuffle the rest. Save the looks you like in one tap.', shot: 'outfit', alt: 'Outfit screen with a cream tee, brown jacket and light jeans' },
        { title: 'Log what you wear', text: 'Tap “Wearing it today” and the outfit lands in your diary. Changed during the day? Log another one.', shot: 'diary', alt: 'Diary calendar with colored dots for every logged day' },
      ],
    },
    stats: {
      title: 'See what you actually wear',
      text: 'Times worn, cost per wear, pieces you haven’t touched in a month, and how the colors you own compare with the colors you wear. Most of us wear a small part of our closet. Outfits shows you which part, so you can rediscover the rest before buying something new.',
      facts: [['14×', 'worn'], ['$5', 'per wear'], ['today', 'last worn']],
      altStats: 'Stats screen comparing colors in the wardrobe with colors worn',
      altDetail: 'Detail of a brown jacket: worn 14 times, 5 dollars per wear',
    },
    privacy: {
      title: 'Your closet stays on your phone',
      items: [
        ['No account', 'Open the app and start. There is nothing to sign up for.'],
        ['No ads, no tracking', 'Outfits doesn’t collect or send any data about you.'],
        ['Photos stay on your device', 'Your clothes are stored only on your phone or tablet.'],
        ['Your backup, your file', 'Export your whole wardrobe to a single .zip file whenever you like.'],
        ['Open source', 'The code is public on GitHub, so anyone can check what the app does.'],
      ],
      more: 'Read the privacy policy',
    },
    cta: { title: 'Get Outfits', text: 'Free on iPhone, iPad and Android.' },
    footer: {
      madeBy: 'Made by',
      illustrations: 'Illustrations by',
      github: 'Source code on GitHub',
      coffee: 'Buy me a coffee',
      contact: 'Contact',
    },
    support: {
      title: 'Support',
      lead: 'Have a question, run into a problem, or need help with the app? Write to',
      reply: 'We’ll get back to you as soon as possible.',
      faqTitle: 'Common questions',
      faq: [
        ['Where are my photos stored?', 'Only on your device. Outfits has no servers and no account, so your photos and data never leave your phone or tablet unless you export them yourself.'],
        ['How do I move my wardrobe to a new phone?', 'In Settings, tap Export data. You get one .zip file with your wardrobes, photos, outfits, diary and settings. Move it to the new phone and tap Import data there. Importing replaces everything in the app on that phone.'],
        ['Is Outfits free?', 'Yes. There are no ads and no subscription. If you’d like to support development, there is an optional Buy Me a Coffee link in Settings.'],
        ['Can I have more than one wardrobe?', 'Yes, for example one for home and one for the cottage. Add a wardrobe in Settings, then switch between them by tapping the wardrobe name at the top of the screen.'],
        ['How do I delete all my data?', 'Delete the app. Everything is stored only on your device, so removing the app removes all of your data. If your phone backs up to iCloud or Google, the app’s data may also be in that backup.'],
        ['The color of a piece is wrong.', 'Open the piece and tap Edit colors. Choose a color below the photo, then tap the spot on the photo to take it from, or let the app detect it again. If you haven’t named the piece yourself, its name updates too.'],
      ],
    },
  },
  cs: {
    meta: {
      title: 'Outfits – skládej outfity z vlastního oblečení',
      description:
        'Soukromý digitální šatník. Oblečení jednou vyfoť, skládej outfity klepnutím a zapisuj si, co opravdu nosíš. Bez registrace a bez reklam.',
    },
    nav: { how: 'Jak to funguje', privacy: 'Soukromí', support: 'Podpora', switchTo: 'English' },
    hero: {
      title: 'Nos to, co už máš.',
      lead: 'Outfits je soukromý digitální šatník. Oblečení jednou vyfoť, outfity skládej klepnutím a zapisuj si, co opravdu nosíš.',
      note: 'Zdarma pro iPhone, iPad a Android. Bez registrace a bez reklam.',
      hint: 'Klepni na kousek a vyměň ho.',
      shuffle: 'Zamíchat',
      canvasLabel: 'Vyzkoušej si to: ukázkový outfit, který můžeš měnit',
    },
    slots: { top: 'Horní díl', layer: 'Vrstva', bottom: 'Dolní díl' },
    how: {
      title: 'Jak to funguje',
      steps: [
        { title: 'Vyfoť své oblečení', text: 'Vyfoť kousek nebo vyber víc fotek z galerie najednou. Outfits rozpozná barvy a každý kus sám pojmenuje, třeba „Hnědá bunda“.', shot: 'wardrobe', alt: 'Šatník s oblečením roztříděným na trička, svetry, mikiny, kabáty, bundy a kalhoty' },
        { title: 'Skládej outfity', text: 'Klepnutím na kousek vybereš jiný, přes tričko přidáš bundu, co se ti líbí, připíchneš a zbytek zamícháš. Oblíbené outfity uložíš jedním klepnutím.', shot: 'outfit', alt: 'Plátno s outfitem: krémové tričko, hnědá bunda a světlé džíny' },
        { title: 'Zapisuj, co nosíš', text: 'Klepni na „Nosím dnes“ a outfit se zapíše do deníku. Převlékl(a) ses? Zapiš i ten další.', shot: 'diary', alt: 'Kalendář deníku s barevnými tečkami u každého zapsaného dne' },
      ],
    },
    stats: {
      title: 'Uvidíš, co opravdu nosíš',
      text: 'Kolikrát jsi který kus měl(a) na sobě, kolik tě stojí jedno nošení, na co jsi měsíc nesáhl(a) a jak se barvy ve skříni liší od těch, které nosíš. Většina z nás nosí jen malou část šatníku. Outfits ti ukáže kterou, abys zbytek znovu objevil(a) dřív, než si koupíš něco nového.',
      facts: [['14×', 'nošeno'], ['35 Kč', 'za nošení'], ['dnes', 'naposledy']],
      altStats: 'Statistiky porovnávající barvy v šatníku a barvy na sobě',
      altDetail: 'Detail hnědé bundy: nošeno 14krát, 35 Kč za nošení',
    },
    privacy: {
      title: 'Šatník zůstává v tvém telefonu',
      items: [
        ['Bez registrace', 'Otevřeš aplikaci a začneš. Není kam se registrovat.'],
        ['Bez reklam a sledování', 'Outfits o tobě nesbírá ani neodesílá žádná data.'],
        ['Fotky zůstávají v zařízení', 'Tvoje oblečení je uložené jen v telefonu nebo tabletu.'],
        ['Tvoje záloha, tvůj soubor', 'Celý šatník kdykoli vyexportuješ do jednoho souboru .zip.'],
        ['Otevřený zdrojový kód', 'Kód je veřejně na GitHubu, takže si kdokoli ověří, co aplikace dělá.'],
      ],
      more: 'Přečti si zásady ochrany soukromí',
    },
    cta: { title: 'Stáhni si Outfits', text: 'Zdarma pro iPhone, iPad a Android.' },
    footer: {
      madeBy: 'Vytvořil',
      illustrations: 'Ilustrace',
      github: 'Zdrojový kód na GitHubu',
      coffee: 'Kup mi kafe',
      contact: 'Kontakt',
    },
    support: {
      title: 'Podpora',
      lead: 'Máš dotaz, narazil(a) jsi na problém nebo potřebuješ s aplikací pomoct? Napiš na',
      reply: 'Ozveme se ti co nejdřív.',
      faqTitle: 'Časté otázky',
      faq: [
        ['Kde jsou moje fotky uložené?', 'Jen v tvém zařízení. Outfits nemá žádné servery ani účty, takže fotky a data neopustí tvůj telefon nebo tablet, pokud je sám/sama nevyexportuješ.'],
        ['Jak přenesu šatník do nového telefonu?', 'V Nastavení klepni na Exportovat data. Dostaneš jeden soubor .zip se šatníky, fotkami, outfity, deníkem i nastavením. Přenes ho do nového telefonu a tam klepni na Importovat data. Import nahradí všechno, co v aplikaci na tom telefonu je.'],
        ['Je Outfits zdarma?', 'Ano. Nemá reklamy ani předplatné. Pokud chceš vývoj podpořit, v Nastavení je dobrovolný odkaz Buy Me a Coffee.'],
        ['Můžu mít víc šatníků?', 'Ano, třeba jeden doma a druhý na chatě. Šatník přidáš v Nastavení a přepínáš mezi nimi klepnutím na název šatníku nahoře na obrazovce.'],
        ['Jak smažu všechna data?', 'Smaž aplikaci. Všechno je uložené jen v zařízení, takže smazáním aplikace zmizí i všechna data. Pokud se telefon zálohuje na iCloud nebo Google, mohou být data aplikace i v této záloze.'],
        ['Kousek má špatnou barvu.', 'Otevři ho a klepni na Upravit barvy. Vyber barvu pod fotkou a klepni na místo na fotce, odkud ji vzít, nebo nech aplikaci barvu rozpoznat znovu. Pokud jsi kousek sám/sama nepojmenoval(a), upraví se i jeho název.'],
      ],
    },
  },
} as const satisfies Record<Lang, unknown>;

// The interactive outfit in the hero. `id` is the file name in public/clothes/
// (the same as in outfits-app/graphics/clothes/); the first one in each slot is shown first.
export const garments = {
  top: [
    { id: 'w_tshirt_beige', en: 'Cream T‑shirt', cs: 'Krémové tričko' },
    { id: 'm_tshirt_green', en: 'Olive T‑shirt', cs: 'Olivové tričko' },
    { id: 'w_longsleeve_darkgray', en: 'Black long sleeve', cs: 'Černé triko s dlouhým rukávem' },
    { id: 'm_tshirt_gray', en: 'Taupe T‑shirt', cs: 'Šedohnědé tričko' },
    { id: 'w_hoodie_green', en: 'Green hoodie', cs: 'Zelená mikina' },
    { id: 'm_sweater_beige', en: 'Beige half‑zip', cs: 'Béžový svetr se zipem' },
  ],
  layer: [
    { id: 'w_jacket_brown', en: 'Brown jacket', cs: 'Hnědá bunda' },
    { id: 'w_coat_gray', en: 'Grey coat', cs: 'Šedý kabát' },
    { id: 'm_jacket_green', en: 'Green puffer', cs: 'Zelená péřová bunda' },
  ],
  bottom: [
    { id: 'w_jeans_lightgray', en: 'Light jeans', cs: 'Světlé džíny' },
    { id: 'w_trousers_green', en: 'Sage trousers', cs: 'Šalvějové kalhoty' },
    { id: 'w_trousers_navy', en: 'Navy pinstripe trousers', cs: 'Modré proužkované kalhoty' },
    { id: 'm_trousers_brown', en: 'Brown trousers', cs: 'Hnědé kalhoty' },
  ],
};
