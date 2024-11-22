import '../styles/globals.css'
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
  <GoogleAnalytics trackPageViews gaMeasurementId='G-9FPXF66JLJ'/>
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
