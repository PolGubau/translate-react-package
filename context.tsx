import React from "react";
export type Translations = Record<string, Record<string, string>>;

interface ContextProps {
  /**
   * @name keys
   * Keys for the storage of various values in LocalStorage as languages
   */
  key: string;
  defaultLanguage: string;
  translations: Translations;
}

export const TranslationContext = React.createContext<ContextProps | undefined>(
  undefined
);
