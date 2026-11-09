# Context

## The story

- **Patient:** Vidya Vati, 50, from a village in Uttar Pradesh.
- **Nov 2023:** diagnosed with cervical cancer; surgery in Lucknow.
- **Dec 2023 to Mar 2024:** 25 radiation sessions + 3 brachytherapy. Treatment complete.
- **2024 to 2025:** radiation proctitis (bowel bleeding), treated twice with APC in Lucknow.
- **Jun 2026:** recurrence confirmed (into bladder and bowel, no distant spread).
- **Jul to Oct 2026:** chemo + immunotherapy at Apollo, Navi Mumbai (Dr. Jyoti Bajpai); tumour shrank ~6 cm to under 5 cm.
  Surgeons at Fortis and Kokilaben said a pelvic exenteration can remove it.
- **31 Oct 2026:** admitted to ICU at Kokilaben (bladder bleeding, falling platelets). Surgery waits until she is stable.
- **Organiser:** her son Shiv Shankar, revenue operations at Sprinto (previously sales development representative), sole earner for the family of four.

## Money (as of 6 Nov 2026)

| | ₹ |
|---|---|
| Already spent (Apollo chemo 17,34,600 + Kokilaben ICU first 6 days 5,88,875) | 23,23,475 |
| Paid by: Milaap donations used | 12,34,458 |
| Paid by: health insurance (₹10 lakh cover, ~₹2 lakh left) | ~8,00,000 |
| Paid by: personal loan | ~2,89,000 |
| Still needed: surgery 11,57,870 + stay (~20 days) 8,20,000 + ICU after surgery 5,50,000 + recovery 3,50,000 + buffer 3,00,000 | 31,77,870 |
| Raised on Milaap so far (524 donors) / goal | 13,44,492 / 45,00,000 |

ICU costs about ₹98,145 a day; only the first 6 days are counted above.

## Design decisions

- **Look:** inspired by solace.health (calm deep green #295E50, mint, warm accents, real photos).
- **Mechanics:** borrowed from Ramp/Grata/Vercel: short two-part headlines, a live counter, a
  "what your gift covers" calculator, a pinned donate bar, hospital marquee, receipts, FAQ, ending that echoes the hero.
- **Type:** Inter for everything, tight letter-spacing on headlines, tabular numbers.
- **Voice:** first person from Shiv; hope-first hero ("Surgeons can still remove her cancer. First, she has to leave the ICU.").
- **Trust:** donations only via Milaap, real bills, 26 named doctors with profile links, 21 named supporters with LinkedIn links,
  open invitation to visit the hospital, phone/WhatsApp.
- **Motion:** things you glance at move (hospitals, receipts); things you read are browsed with arrows (doctors, supporters, posts).

## Open items to confirm before sharing widely

1. Surgery estimate ₹11,57,870 comes from a Fortis counselling report (Jul 2026); page implies surgery at Kokilaben.
2. Start date for the "days fighting" counter (assumed 26 Jun 2026; Milaap's story says treatment started 29 Jun 2026). Set `fightingSince`.
3. Loan runway "3–4": days or weeks? (Affects how urgent the page should sound.)
4. Baji Sepoy's quote came from a private message; get his OK.
5. Five Apollo deposit dates and the MedGenome bill amount are uncertain.
6. ICU start date: the page counts 31 Oct 2026 as ICU day 1 (Kokilaben admission deposit is dated 31 Oct), but the
   latest Milaap update says she was admitted to the ICU on 1 Nov. Pick one and set `icuSince` to match.
7. Milaap story still says "we are raising ₹30 lakh" while the goal is ₹45 lakh. Update the story on Milaap.
8. Latest update on both the page and Milaap is 5 Nov 2026, but the page says "Updated every day".
9. savevidya.com is not live yet; the preview tags and canonical link point there (see README).

Done (9 Nov 2026): Milaap page shows no 80G note, so the FAQ answer stands; compact phone header added.

## Milaap check (9 Nov 2026)

Raised ₹13,44,492.64 of ₹45,00,000, 524 supporters, 30%. Payment gateway fees ₹14,391.13, so ₹13,30,101.51 is
available. Available minus ₹12,34,458 used = ₹95,644, which matches "What's left today" on the page.

## Milaap facts used in the FAQ (checked Nov 2026)

- No platform fee; optional donor tip. Payment processing ~0.75–3.6% for INR, 3.9% + 30¢ for foreign cards.
- Not an NGO; personal fundraisers without an "80G" note give no tax benefit.
- International cards accepted; foreign-currency medical donations go directly to the treating hospital.
- Funds released only against documents/bills; must be used for the stated medical need.
