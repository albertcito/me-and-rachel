import { useState, useCallback } from 'react';

const langEnum = {
  en: 'en',
  es: 'es',
}

export default function useGlobal() {
  let localLanguage = localStorage.getItem('lang');
  if (!localLanguage) {
    const navigatorLang = navigator.language || navigator.userLanguage;
    localLanguage = (navigatorLang.substring(0, 2) === langEnum.es) ?
      langEnum.es :
      langEnum.en;
  }
  const [lang, setLanguage] = useState(localLanguage);

  const setLang = useCallback(async (lang) =>  {
    localStorage.setItem('lang', lang);
    setLanguage(lang);
  }, []);

  return  {
    lang,
    setEN: () => setLang(langEnum.en),
    setES: () => setLang(langEnum.es),
  };

}