# Chhaganlal Dayaljee Jewellers — The Heritage Bahi-Khata (Client Prototype)

> **॥ श्री गणेशाय नमः ॥**  
> **Chhaganlal Dayaljee Jewellers (CHD The Original)** — 106 continuous years of family goldsmithing at Sakchi Bazar, Jamshedpur (Est. 1918). Pure 22K/18K BIS Hallmarked bullion, Kundan, Polki, and Temple Nakashi jewellery.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Prototype](https://img.shields.io/badge/Status-Client_Demo_Prototype-success)

---

## 📖 About This Prototype

This is a high-fidelity interactive **frontend client prototype & demo** created for client review and stakeholder presentation. It simulates interacting with an open, cloth-bound ***Bahi-Khata*** (traditional Indian accounting ledger register) resting upon an antique showroom table.

The design language balances tactile heritage with disciplined archival bookkeeping:
- **Aged Rag Parchment Surfaces:** Warm `#fff9ee` paper with subtle `#c8d6e5` horizontal blue baseline rules.
- **Double Vermilion Margins:** Traditional `#b3262e` red margin guides inset along the page.
- **Cloth-Bound Maroon:** Ceremonial `#5a1a1f` binding spine and velvet showroom display trays.
- **Skeuomorphic Ephemera:** Brass corner plates, paperclips, melted crimson wax seals, and rotated assayer rubber stamps.

---

## ✨ Interactive Features in Demo

- **Live Bullion Rates (*आज का भाव — Aaj Ka Bhav*):** Rates for 24K Pure Gold (999), 22K Standard Gold (916), and Pure Silver (999), with an interactive **Grams (g) ↔ Tolas (11.664g)** conversion toggle.
- **The Inward Vault Register (Bahi-Khata Table):** Authentic ledger columns (*खाता सं.*, *प्रतिमा*, *आभूषण विवरण*, *वजन व शुद्धता*, *शुल्क*, *मूल्य*, *कार्य*). Supports instant category filtering, real-time keyword search, and live total register value summation.
- **"पक्का पर्चा" (Pakka Parcha) — Gold Rate & Estimate Calculator:** Interactive sliders for bullion weight and karigari making charges with real-time statutory 3% GST calculation and an authentic printable invoice estimate slip.
- **Specimen Dossier Modal (Quick Inspect):** High-resolution macro photography with Karat specs, stone weights, HUID assayer certificates, and direct WhatsApp inquiry links.
- **Slide-Over Bahi Bag (Ledger Cart):** Persistent `localStorage` drawer with gross/net gold weight accumulation and one-click WhatsApp order generation.
- **BIS Hallmark & 6-Digit HUID Verifier:** Interactive educational verifier looking up official assaying records (sample codes: `JH04K1`, `JH04B5`, `JH04L2`).
- **Three Generations of Trust (1918 – Present):** Heritage timeline documenting Babu Chhaganlal Dayaljee, Shri Kantilal Chhaganlal, and the modern custodians with Devanagari signatures and pinned patron slips.
- **Showroom Appointment Booking:** Dedicated reservation form for private bridal trousseau viewings with instant verification tokens.

---

## 🗂️ Clean Project Structure

```
├── .gitignore              # Ignores OS files, editor configs, temporary logs, and Vercel artifacts
├── vercel.json             # Vercel deployment config with clean URLs and CDN cache optimization
├── package.json            # Project metadata and quick npm scripts (npx serve)
├── README.md               # Repository documentation
├── index.html              # Main HTML5 application
├── styles.css              # Custom Vanilla CSS design system
├── script.js              # Reactive logic, calculations, and cart state
└── assets/
    └── images/             # High-res photography of heirloom jewellery
        ├── chandbali_jhumkas.jpg
        ├── kundan_choker.jpg
        ├── modern_everyday_gold.png
        ├── peacock_kadas.jpg
        ├── royal_bridal_suite.png
        ├── showroom_tray_kundan.png
        ├── temple_heritage_antique.png
        └── temple_lakshmi_pendant.png
```

---

## 🚀 Run Locally with Node

With **Node.js** installed, run using `npm`:

```bash
npm start
```
*(or run `npx serve .` directly)*

Then open [http://localhost:3000](http://localhost:3000) (or the port displayed) in your browser.

---

## 🌐 Deploy to Vercel for Client Preview

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Update clean prototype for client review"
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **"Add New..."** → **"Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Other** (Root directory: `./`).
5. Click **"Deploy"**.

Your prototype will be deployed live to an SSL-secured link (e.g., `https://your-project.vercel.app`) ready to send to your client!

---

## 📜 Client & License

- **Client:** Chhaganlal Dayaljee Jewellers (CHD The Original) — Sakchi Bazar, Jamshedpur.
- **Design Inspiration:** Google Stitch & Traditional Indian Bahi-Khata bookkeeping.
- **License:** MIT License.
