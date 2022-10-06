import type { AppProps } from "next/app";
import StyleProvider from "../styles/StyleProvider";
import { QueryClient, QueryClientProvider } from "react-query";
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StyleProvider>
        <Component {...pageProps} />
      </StyleProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
