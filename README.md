# Abdul Kadir Mohiuddin — Mobile-First NFC Identity Card

A mobile-first personal identity website and digital business card engineered for **Abdul Kadir Mohiuddin**, Creative Visualizer & Strategist.

Built specifically for the **NFC tap use case**: A contact, client, or collaborator taps their smartphone against an NFC card and immediately lands on an ultra-refined, fast-loading digital identity card.

---

## 💎 Design System & Aesthetic Direction

- **Obsidian Dark Void**: Near-black canvas (`#06070a`) with atmospheric violet (`rgba(124, 58, 237, 0.22)`), indigo (`rgba(79, 70, 229, 0.18)`), and magenta (`rgba(217, 70, 239, 0.12)`) lighting orbs.
- **Liquid-Glass Card Surface**: Frosted glass container featuring 28px backdrop-blur, subtle multi-chromatic gradient rim, and reactive touch/pointer specular highlights.
- **Zero-Clutter First Viewport**: Strictly dedicated to identity, positioning, and direct contact. No bloated portfolio previews or SaaS components.
- **Hero Action**: Dominant, tactile WhatsApp CTA with direct messaging integration.
- **1-Tap Address Book Integration**: Embedded vCard (.vcf) export so contacts can save Abdul Kadir Mohiuddin directly to their phone with a single tap.
- **Liquid-Glass Navigation Drawer**: Minimalist 2-line morphing hamburger that expands an accessible glass sheet for deeper pages (About & Philosophy, Selected Visual Systems, Capabilities & Offerings, Direct Inquiry).

---

## 🚀 Running Locally

You can run this project with zero dependencies using Python's built-in HTTP server or Node:

```bash
# Option 1: Python 3 (instant, zero downloads)
python3 -m http.server 3000

# Option 2: npm / npx
npm run preview
```

Then open `http://localhost:3000` on your browser or mobile device via local network IP.

---

## ⚙️ Centralized Content & Configuration

All personal information, contact channels, social profiles, navigation items, capabilities, experience, and project entries live in:
`assets/js/config.js` (`siteData`).

```javascript
export const siteData = {
  profile: {
    fullName: "Abdul Kadir Mohiuddin",
    title: "Creative Visualizer & Strategist",
    location: "DOHA, QATAR",
    positioningStatement: "Turning complex business problems into clear, memorable visual systems.",
    bio: "..."
  },
  contact: {
    whatsapp: "+97477008536",
    call: "+97477008536",
    email: "akmahin@gmail.com"
  },
  social: [ ... ],
  navigation: [ ... ],
  capabilities: [ ... ],
  experience: [ ... ],
  projects: [ ... ]
};
```

---

## 📱 NFC Card Encoding Instructions

When programming your physical NFC card (via NFC Tools app on iOS or Android):
1. Choose **Add a record** > **URL / URI**.
2. Enter your live website URL (e.g. `https://akmahim.com` or `https://your-domain.com`).
3. Write to the NFC tag. When tapped on any modern iPhone or Android, the browser will seamlessly present this digital card in the initial viewport.
