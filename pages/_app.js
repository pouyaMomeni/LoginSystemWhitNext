import { useEffect } from 'react'
import '/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Locale from '/components/language'
import { QueryClient, QueryClientProvider } from 'react-query'
// redux
import { Provider } from 'react-redux'
import { store } from '/store'
//



function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === 'fa' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Locale />
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  )

}

export default appWithTranslation(MyApp) 
