/* eslint-disable react-hooks/exhaustive-deps */
/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { fetchTranslations, DEFAULT_LOCALE } from '../../i18n';
import { makeSelectLocale } from './selectors';

export interface LanguageProviderProps {
  locale?: string;
  children?: React.ReactNode;
}

export function LanguageProvider(props: LanguageProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState({});

  const getMessages = () => {
    setIsLoading(true);
    fetchTranslations(props.locale || DEFAULT_LOCALE)
      .then(message => {
        setMessages(message);
        setIsLoading(false);
      })
      .catch(() => {
        setMessages({});
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMessages();
  }, [props.locale]);

  if (isLoading) {
    return null;
  }
  return (
    <IntlProvider locale={props.locale || DEFAULT_LOCALE} key={props.locale} messages={messages}>
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}
const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

export default connect(mapStateToProps)(LanguageProvider);
