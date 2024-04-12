import React from "react";
export type Translations = Record<string, Record<string, string>>;

export interface ContextProps {
  /**
   * @name keys
   * Keys for the storage of various values in LocalStorage as languages
   */
  key?: string;
  defaultLanguage: string;
  translations: Translations;
}

/**
 * @name TranslationContext
 * Context for the translation of the application
 *
 *  @param key
 * Key for the storage of various values in LocalStorage as languages
 *
 * @param defaultLanguage
 * Default language of the application
 *
 * @param translations
 * Translations of the application
 *
 * @returns
 * Context for the translation of the application
 *
 * @example ```tsx
 * <TranslationContext.Provider value={{ key: "language", defaultLanguage: "en", translations }}>
 *  <App />
 * </TranslationContext.Provider>
 * ```
 *
 *
 */

export const TranslationContext = React.createContext<ContextProps | undefined>(
  undefined
);
