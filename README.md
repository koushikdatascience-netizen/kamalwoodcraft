# Kamal Woodcraft Website

Static Next.js website for Kamal Woodcraft, a bulk wooden furniture parts manufacturer in Kalyani, Nadia.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The site is configured with `output: "export"`, so the production files are generated in `out/`.

## Cloudflare Pages

Use these settings:

- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `22`

Add custom domain later as needed, for example `woodcraft.kamal.in`.

## Main Business Details

Edit verified business details in `content/site.ts`.

- Phone: `+91 85839 11435`
- WhatsApp: `+91 62906 64570`
- Email: `kamalwoodcraft2@gmail.com`
- Address: Nabagram, Anandanagar, Kalyani, Nadia - 741245, West Bengal, India

## Assets

Real logo and product/workshop images are stored in `public/woodcraft/`.

## Notes

Cloudflare static headers are defined in `public/_headers`.
