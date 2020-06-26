/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
import axios from 'axios';

export const DEFAULT_LOCALE = 'en';

const enLocalTranslation = require('./translations/en.json');

// prettier-ignore
export const appLocales = [
  'en',
];

export const fetchTranslations = (locale: string = DEFAULT_LOCALE) =>
  axios
    .get(`https://hubble-web-translations.s3-ap-southeast-1.amazonaws.com/locale/${locale}.json`)
    .then((response: { data: any }) => {
      const output = {
        ...enLocalTranslation,
        ...response.data,
      };
      return output;
    })
    .catch(() => {
      return enLocalTranslation;
    });
