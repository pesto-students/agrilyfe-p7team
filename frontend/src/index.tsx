import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
import Store from "./redux/store";
import * as Sentry from "@sentry/react"; 

// process.env.NODE_ENV === "production" && // when we have production build of react application i will triggger Sentry
Sentry.init({
  dsn: "https://1a33112f396c4aa6891c3625b42b7c29@o4505049635618816.ingest.sentry.io/4505066222321664",
  integrations: [new Sentry.BrowserTracing()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  });


ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);