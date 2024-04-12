# @codedbypol/translations

Npm package to handle translations in client side of **React**.
It consist on:

1. A context used to surround your app.
2. A custom hook were the sent key is auto-translated

Feel free to contribute to this project.

## Installation

```bash
npm install @codedbypol/translations
```

## Usage

1. Create a file with your translations. For example, `translations.js`:

```javascript
export default {
  en: {
    hello: "Hello",
    world: "World",
  },
  es: {
    hello: "Hola",
    world: "Mundo",
  },
};
```

2. Wrap your app with the `TranslationContext` and pass the translations as a prop:

```javascript
import React from "react";

import translations from "./translations";
const App = () => {
  return (
    <TranslationContext.Provider
      value={{ key: "language", defaultLanguage: "en", translations }}
    >
      <YourApp />
    </TranslationContext.Provider>
  );
};
```

3. Use the `useTranslate` hook to translate your keys:

```javascript
import React from "react";
import { useTranslate } from "@codedbypol/translations";

const YourApp = () => {
  const { t } = useTranslate();
  return (
    <div>
      <h1>{t("hello")}</h1>
      <h2>{t("world")}</h2>
    </div>
  );
};
```
