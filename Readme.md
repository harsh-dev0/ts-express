# TypeScript Node.js Backend Template

A clean, production-ready TypeScript backend template for Node.js applications with modern best practices.

## Features

- ✅ TypeScript configuration optimized for backend development
- ✅ Express.js web server
- ✅ Environment variable management with dotenv
- ✅ Development mode with hot reloading
- ✅ Proper project structure for scalability
- ✅ Error handling middleware
- ✅ NPM scripts for development and production

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone this repository:

```bash
git clone https://github.com/harsh-dev0/ts-express.git
cd ts-backend-template
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```
PORT=3000
NODE_ENV=development
```

### Development

Start the development server with hot reloading:

```bash
npm run dev
```

For watching file changes:

```bash
npm run dev:watch
```

### Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
ts-backend/
├── src/                  # Source code
│   ├── index.ts          # Application entry point
│   ├── routes/           # API routes
│   ├── controllers/      # Route controllers
│   ├── models/           # Data models
│   ├── middleware/       # Express middleware
│   └── config/           # Configuration files
├── dist/                 # Compiled output (generated)
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies
└── .env                  # Environment variables
```

## Scripts

- `npm run build` - Compiles TypeScript to JavaScript
- `npm start` - Starts the production server
- `npm run dev` - Starts the development server
- `npm run dev:watch` - Starts the development server with file watching

## License

MIT

## Author

Your Name - [Your GitHub Profile](https://github.com/yourusername)
