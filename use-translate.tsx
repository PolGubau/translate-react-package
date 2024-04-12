import React from "react";
import { useLocalStorage } from "pol-ui";
import { TranslationContext } from "./context";

const useTranslate = () => {
  const context = React.useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "This App must be used within a TranslationContext, please check the parent component (as Layout). This error is getting thrown by useTranslate custom hook and it is intentional."
    );
  }
  const { key = "pol.language", defaultLanguage, translations } = context;

  type TranslationsCodes = keyof typeof translations;

  const [lang, setLang] = useLocalStorage(key, defaultLanguage);

  const changeLanguage = (lang: TranslationsCodes) => {
    setLang(lang);
  };

  /*
   It can be the case that the language is not available in the translations object, so we need to fallback to the default language (managed by the translate function). Let's also advice the user via console warning.
   */
  if (!translations[lang]) {
    console.warn(
      `⚠️ The language "${lang}" is not available in the translations object, falling back to "${defaultLanguage}"`
    );
  }

  /**
   * @name translate
   * @description Get the text from the translations object based on the key and the language code
   * @param key a string that represents the key of the translation
   * @param languageCode a string that represents the language code
   * @param fallbackLanguageCode a string that represents the fallback language code
   * @returns a string that represents the translation value
   * @example
   * const { getText } = useTranslate()
   * const text = getText('name')
   *
   * @see formatString
   * @tip We strongly recommend using a typescript object to handle keys, create an enum for the keys and use it as a type
   * @example
   * const { getText } = useTranslate()
   * enum TranslationsKeys {
   *  name = 'name',
   * description = 'description',
   * }
   * const text = getText(TranslationsKeys.name)
   * @author Pol Gubau Amores
   */

  const translate = (
    key: string,
    languageCode: TranslationsCodes = lang,
    fallbackLanguageCode: TranslationsCodes = defaultLanguage
  ): string => {
    /**
    @name languageTranslations
      
    Chain of fallbacks:
      1- If the languageCode is not provided, use the current language

      2- If the current language is not available, use the default language

      3- If the default language is not available, use English

      4- If the key is not available, use the key itself

      5- If the key is available, format it

    */
    const languageTranslations =
      translations[languageCode ?? lang] ??
      translations[fallbackLanguageCode ?? defaultLanguage ?? "en"];

    const translationValue = languageTranslations[key];

    return translationValue ?? key;
  };

  return { translate, lang, changeLanguage };
};

export default useTranslate;
