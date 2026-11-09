# For Mummy: Stand with Vidya Vati

A one-page fundraising website for Vidya Vati, who is fighting recurrent cervical cancer at
Kokilaben Hospital, Mumbai. Every donation button points to her Milaap fundraiser:
https://milaap.org/fundraisers/support-vidya-vati-1

Organised by her son, Shiv Shankar (+91 91617 46668, shiiiv.shanker@gmail.com).
See `docs/CONTEXT.md` for the story, the design decisions and the open items.

## What's in this folder

```
public/                   Everything that goes online (Netlify publishes ONLY this folder)
  index.html              The whole page: markup (inside <template id="page">), styles and data
  js/runtime.js           ~100-line renderer for the {{holes}}, <sc-if>, <sc-for> and onClick="{{...}}"
  js/morphdom-umd.min.js  morphdom 2.7.4 (MIT), keeps scroll and open FAQ items when re-rendering
  assets/                 Photos: hero, Shiv, doctor and supporter photo sprites
  assets/og-image.jpg     1200x630 link preview (WhatsApp, LinkedIn, X), cropped from the hero photo
docs/                     Team notes (never published)
  CONTEXT.md              Story, money breakdown, design decisions, open items
README.md                 This file
```

**Never put bills, medical reports, UHID or ID documents in this repository.** Anyone added to the
repository can see every file in it, and anything in `public/` is visible to the whole internet.
Medical documents live in a separate place that only Shiv controls.

No build step, no server code. Open `public/index.html` in a browser to view it.
(Fonts load from Google Fonts, so the right typeface needs an internet connection.)

## Putting it online (free options)

- **Netlify (recommended)**: import the GitHub repository and set **Publish directory** to `public`
- **Netlify Drop**: drag only the `public` folder onto https://app.netlify.com/drop
- **Vercel**: import the repository and set the output/root directory to `public`

Any static host works.

**Domain:** the link-preview tags (`og:url`, `og:image`, `twitter:image`) and the `canonical` link
in `public/index.html` all point to `https://savevidya.com/`. Connect that domain before sharing the
link, or WhatsApp and LinkedIn previews will show no photo. If you use a different address, search
`savevidya.com` in `public/index.html` and change all five.

## How the page works

`public/index.html` has three parts:

1. `<template id="page">`: all visible markup. Values in `{{double braces}}` come from
   `renderVals()` in the script. `<sc-if value="{{x}}">` shows its content only when `x` is true;
   `<sc-for list="{{doctors}}" as="d">` repeats its content for each item.
2. The `<script>` at the bottom, which defines:
   - `POSTS`: Shiv's LinkedIn posts (date, tag, title, excerpt, url)
   - `DOCTORS`: all doctors (group, name, role, hospital, what they did, profile url, photo position in `assets/doctors-sprite.jpg`)
   - `Component.renderVals()`: live values (ICU day count, days fighting, live ICU cost counter,
     amounts raised, gift calculator, tabs, doctor filter, carousels, WhatsApp share text).
     Day counts use India time, so every visitor sees the same day number.
3. `mountPage(Component, {...})`: page settings, at the very bottom of the file.

| Setting | What it does |
|---|---|
| `raised`, `goal`, `donors` | Amount raised, goal and supporters from the Milaap page. Feeds the hero, progress bar, %, "to go", pinned bar, money card and FAQ. |
| `currentStatus` | `"In the ICU"`, `"Moved to the ward"`, `"Surgery scheduled"`, `"Recovering after surgery"` or `"Back home"`. Outside the ICU, the ICU counter hides itself and the status pill turns green. |
| `icuSince` | ICU day 1, as `YYYY-MM-DD` |
| `fightingSince` | Start of the "days fighting the cancer's return" counter |
| `icuPerDay` | ICU cost per day in rupees (live counter, calculator, "₹1,000 covers about...") |

If JavaScript fails or is switched off, a short version of the page (headline, Donate on Milaap, Shiv's
number) shows instead of a blank screen.

## Keeping it current (edit in `public/index.html`)

| What | Where to look |
|---|---|
| Amount raised, goal, donors | `raised`, `goal`, `donors` in `mountPage(...)` at the bottom; nothing else to change |
| Urgent blood request (red top bar) | search `Mumbai: she needs` |
| Daily updates | search `Updated every day`; copy the top `<article>` and edit it |
| Journey milestones | search `Her journey`; each step is an `<li>` |
| Paid / still-needed money cards | search `How we’ve paid so far` |
| Scrolling receipts list | search `bill-track` (the list appears twice, back to back, for the scrolling effect: edit both) |
| Supporter quotes | search `stories-h`; each quote is a `<figure>` |
| FAQ | search `faq-h`; each question is a `<details>` |

ICU and fight day counts update by themselves every day.

## Privacy

Patient IDs, card numbers, receipt numbers and home address are deliberately not on the page.
Photos in `public/assets` carry no location or camera data (checked Nov 2026); keep it that way by
exporting new photos without metadata. Share her UHID or original bills only privately with people who ask.

## Credits

Built with Claude (Anthropic). morphdom © Patrick Steele-Idem, MIT licence.
