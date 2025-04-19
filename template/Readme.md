# ⚡ TypeScript Express Backend Starter

A clean, production-ready **TypeScript + Node.js** backend boilerplate built with modern best practices. Instant Express app generation with `npx`.

---

## 🚀 Quickstart

```bash
npx create-ts-express-app@latest my-project-name
cd my-project-name
npm install
npm run dev
```

You're up and running in seconds. Just ship.

---

## 🧰 Features

- ⚙️ Fully typed Express.js setup
- 🔄 Hot reloading with `ts-node-dev`
- 🔐 `.env`-based configuration
- ✅ Clean file structure built to scale
- 🧱 Error handling middleware
- 🛠️ Scripts for dev & prod workflows

---

## 📦 Prerequisites

- Node.js **18+**
- `npm` or `yarn`

---

## 🧪 Development

Start dev server with hot reloading:

```bash
npm run dev
```

Or watch all file changes:

```bash
npm run dev:watch
```

---

## 🚢 Production

Build & run:

```bash
npm run build
npm start
```

---

## 🌳 Project Structure

```
my-project/
├── src/
│   ├── index.ts        # App entry
│   ├── routes/         # Routes
│   ├── controllers/    # Route logic
│   ├── middleware/     # Custom middleware
│   └── config/         # Config (env, db, etc.)
├── dist/               # Compiled JS (auto-generated)
├── .env                # Environment variables
├── package.json
└── tsconfig.json
```

---

## 🎯 Scripts

| Command             | Description                         |
|---------------------|-------------------------------------|
| `npm run dev`       | Start dev server (hot reload)       |
| `npm run dev:watch` | Dev with full file watching         |
| `npm run build`     | Compile TypeScript to JavaScript    |
| `npm start`         | Start production server             |

---

## 📄 License

MIT — Use it. Build with it. Ship something great.

---