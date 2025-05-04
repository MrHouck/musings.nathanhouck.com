import "@/styles/globals.css";
import 'katex/dist/katex.min.css';
import { ThemeProvider } from "next-themes";


export default function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider attribute="class" className="dark">

      <Component {...pageProps} />
  </ThemeProvider>
  )
}
