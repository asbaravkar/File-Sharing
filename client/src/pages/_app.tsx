import axios from "axios";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen font-serif bg-gray-900 text-white grid place-items-center">
      <div>
        <Component {...pageProps} />

      </div>
    </div>
  )
}

export default MyApp;
