## Features

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🦾 [TypeScript](https://www.typescriptlang.org/)
- 🫀 [Vitest](https://vitest.dev/) - unitary testing made easy
- 🎨 [Tailwind with JIT](https://tailwindcss.com/) - next generation utility-first CSS
- 👑 [Modular architecture](https://javascript.plainenglish.io/modular-react-applications-c316783df0aa)
- 🗂 [Absolute imports](https://github.com/vitejs/vite/issues/88#issuecomment-762415200)
- 📺 [Swiper](https://swiperjs.com/react) - powerful tool for building sliders
- 😃 [Hero icons](https://heroicons.com/)
- ☁️ Deploy on Netlify, zero-config

### Coding Style

- [ESLint](https://eslint.org/) - configured for React/Hooks & TypeScript
- [Prettier](https://prettier.io/)

### Code Style Guidelines

- [Primitive obsession](https://elkevincodea.hashnode.dev/modeling-primitives-as-value-objects-in-typescript) - Typing tip
- [React style guide](https://react-styleguidist.js.org/docs/documenting/) - Component Documentation Guidelines
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) - Readable meaning to commit messages

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Commit lint](https://github.com/conventional-changelog/commitlint) - helps your team adhering to a commit convention
- [Netlify](https://www.netlify.com/) - zero-config deployment

### Development

Just run and visit http://127.0.0.1:3000/

```bash
yarn dev
```

### Build

To build the App, run

```bash
yarn build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your repository, `OK` along the way, and your App will be live in a minute.

### Issues

#### Husky

If pre-commit hooks are not working be sure that you have installed husky: `husky install`.

By default this command should be triggered after yarn/npm deps are installed.
