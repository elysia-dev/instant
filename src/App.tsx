import { useEffect } from 'react';
import "./i18n"
import { useTranslation } from 'react-i18next';
import SubgraphProvider from './providers/SubgraphProvider';
import AppNavigator from './pages/AppNavigator';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // ref http://www.lingoes.net/en/translator/langcode.htm
    let lang = navigator.language;
    lang = lang.toLowerCase().substring(0, 2);

    if (lang.includes('ko')) {
      i18n.changeLanguage('ko')
    } else {
      i18n.changeLanguage('en')
    }
  }, [])

  return (
    <SubgraphProvider>
      <AppNavigator />
    </SubgraphProvider>
  );
}

export default App;