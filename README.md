# <img src="./public/vite.svg" width=90 /> <img src="./public/typescript.png" width=90 /> <img src="./public/prettier.png" width=90 /> <img src="./public/typescript-eslint.svg" width=90 /> <img src="./public/react.svg" width=90 /> & <img src="./public/tailwindcss.svg" width=500 />

This template provides a minimal setup to get [React v19](https://react.dev/) working in:
- [Vite v6](https://vite.dev/) with HMR,
- [tailwind v4](https://tailwindcss.com/),
- completete [TypeScript-ESLint v8](https://typescript-eslint.io/) integration,
- and [prettier](https://prettier.io/).

All formatting is done by Prettier.

This template uses [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) ([SWC](https://swc.rs/)) for Fast Refresh.

## Installation
### Install
```sh
degit examplewastaken/vite-react-ts-eslint-tailwind-prettier
```

### Install dependencies
```sh
npm install
```

### Run the project
```sh
npm run dev
```

## Getting Started
Once installed, there is only one file that contains all placeholder code called [App.tsx](./src/App.tsx).

All logos are located in the [public](./public/) folder. There is already a `.gitkeep` file present so you can simply delete all logos without losing the public folder.

Tailwind's reference style sheet - called [tailwind.css](./src/tailwind.css) - is also located in the src folder. Here you can modify tailwind, your theme, etc.

This project uses typescript-eslint's `recommended-type-checked` config plus some additional rules. To configure the project, edit the [eslint.config.js](./eslint.config.js) file.

