# Context

## The story

- **Patient:** Vidya Vati, 50, from a village in Uttar Pradesh.
- **Nov 2023:** diagnosed with cervical cancer; surgery in Lucknow.
- **Dec 2023 to Mar 2024:** 25 radiation sessions + 3 brachytherapy. Treatment complete.
- **2024 to 2025:** radiation proctitis (bowel bleeding), treated twice with APC in Lucknow.
- **Jun 2026:** recurrence confirmed (into bladder and bowel, no distant spread).
- **Jul to Oct 2026:** chemo + immunotherapy at Apollo, Navi Mumbai (Dr. Jyoti Bajpai); tumour shrank ~6 cm to under 5 cm.
  Surgeons at Fortis and Kokilaben said a pelvic exenteration can remove it.
- **31 Oct 2026:** admitted to Kokilaben, straight into the ICU (bladder bleeding, falling platelets).
- **6 to 14 Nov 2026:** Romiplostim started for platelets (6 Nov); 177 ml clot removed by cystoscopy (7 Nov); moved to the
  ward (9 Nov); back in the ICU on oxygen (10 Nov); PET scan for fluid in her lungs (13 Nov); platelets up to 1,06,000 (14 Nov).
  Surgery waits until she is stable.
- **Organiser:** her son Shiv Shankar, revenue operations at Sprinto (previously sales development representative), sole earner for the family of four.

## Money (as of 13 Nov 2026, confirmed by Shiv)

| | ₹ |
|---|---|
| Already spent: Apollo chemo 17,34,600 + Kokilaben running bill to 13 Nov 11,63,509 | 28,98,109 |
| Paid by: Milaap donations used | 12,34,458 |
| Paid by: health insurance (₹10 lakh cover, ~₹2 lakh left) | ~8,00,000 |
| Paid by: borrowed by the family | ~8,63,651 |
| Still needed: surgery and procedures 11,57,870 (Fortis estimate) + stay after surgery 9,28,596 (16 ward days × 33,501 + 4 ICU days × 98,145) + chemo, 3 cycles 3,78,200 + pain and symptom care 5,13,204 + health and physiotherapy 2,00,000 | 31,77,870 |
| Total treatment cost | 60,75,979 |
| Raised on Milaap (525 donors, 15 Nov) / goal | 13,44,992 / 45,00,000 |

ICU costs about ₹98,145 a day. ICU days before surgery are not in the ₹31,77,870 estimate.

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
6. Milaap goal: consider raising it. The real need is now about ₹61 lakh, and ICU days before surgery are extra.
7. Milaap story still says "we are raising ₹30 lakh" while the goal is ₹45 lakh. Update the story on Milaap.
8. Milaap updates stop at early Nov (4 updates); the ICU, ward and oxygen news is only on this page.
9. savevidya.com is not live yet; the preview tags and canonical link point there (see README).

Done (9 Nov 2026): Milaap page shows no 80G note, so the FAQ answer stands; compact phone header added.
Done (15 Nov 2026): merged Shiv's 13 and 14 Nov updates (notes in `docs/updates/`; his .patch files were not copied
because they are already applied). The status now reads "Day N at Kokilaben", counted from admission on 31 Oct, which
settles the 31 Oct vs 1 Nov ICU question. `raised` set to Milaap's ₹13,44,992 (525 supporters) on 15 Nov.

## Milaap checks

- 9 Nov 2026: raised ₹13,44,492.64 of ₹45,00,000, 524 supporters. Gateway fees ₹14,391.13, so ₹13,30,101.51
  available. Available minus ₹12,34,458 used = ₹95,644, which is "What's left today" on the page.
- 15 Nov 2026: raised ₹13,44,992.64, 525 supporters. Gateway fees ₹14,391.84, so ₹13,30,600.80 available. Available
  minus ₹12,34,458 used = ₹96,143; the page still says ₹95,644 (Shiv's 13 Nov figure).

## Milaap facts used in the FAQ (checked Nov 2026)

- No platform fee; optional donor tip. Payment processing ~0.75–3.6% for INR, 3.9% + 30¢ for foreign cards.
- Not an NGO; personal fundraisers without an "80G" note give no tax benefit.
- International cards accepted; foreign-currency medical donations go directly to the treating hospital.
- Funds released only against documents/bills; must be used for the stated medical need.
