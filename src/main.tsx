import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";
import { store } from "./store/index.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
