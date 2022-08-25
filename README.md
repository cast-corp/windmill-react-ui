# Windmill React UI

## cast-corp fork install info

1. Follow [GitHub's NPM registry package install instructions](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package) **steps 1-3**
   - Note that authentication is required even though the package is public.
2. ```bash
   npm install @windmill/react-ui@npm:@cast-corp/windmill-react-ui
   ```
   This will install the package as `@windmill/react-ui`, not `@cast-corp/windmill-react-ui`, [which is required for class purging to work correctly](https://github.com/cast-corp/windmill-react-ui/pull/2#issuecomment-1227334817).

---

The component library for fast and accessible development of gorgeous interfaces.

<p>
  <a href="https://codecov.io/gh/estevanmaito/windmill-react-ui"><img src="https://codecov.io/gh/estevanmaito/windmill-react-ui/branch/master/graph/badge.svg" alt="codecov" /></a>
  <img src="https://github.com/estevanmaito/windmill-react-ui/workflows/Build/badge.svg" alt="Build" />
  <a href="https://www.npmjs.com/package/@windmill/react-ui"><img src="https://img.shields.io/npm/v/@windmill/react-ui" alt="npm" /></a>
  <a href="https://github.com/estevanmaito/windmill-react-ui/blob/master/LICENSE"><img src="https://img.shields.io/github/license/estevanmaito/windmill-react-ui" alt="MIT License" /></a>
</p>

Projects using it: [Windmill Dashboard React](https://github.com/estevanmaito/windmill-dashboard-react)

## Mission

Be the most accessible it can be out of the box and the fastest way to production.

[Go to docs to see complete, live examples](https://windmillui.com/react-ui)

## 🚀 Usage

Install

```sh
npm i @windmill/react-ui
```

Inside `tailwind.config.js`

```js
const windmill = require('@windmill/react-ui/config')
module.exports = windmill({
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
})
```

Then place `Windmill` at the root of your project (the order doesn't matter, as long as your application is inside).

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Windmill } from '@windmill/react-ui'

ReactDOM.render(
  <Windmill>
    <App />
  </Windmill>,
  document.getElementById('root')
)
```

Use components inside your project

```js
import { Button } from '@windmill/react-ui'

function App() {
  return <Button>Hi there!</Button>
}

export default App
```

## 🔌 Contributing

- Fork
- Clone
- `npm install`
- `npm run storybook`

It will start a local server at `localhost:6006` with all components rendered.

⚠ Use `npm run cz` instead of `git commit`! It will guide you through some short questions and guarantee that you commit message is standardized.

Commit will also trigger linting and test coverage.
