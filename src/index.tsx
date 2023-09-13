import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store, { persistor } from "redux/store";

// const client = new ApolloClient({
//   uri: process.env.REACT_APP_HASURA_URI,
//   cache: new InMemoryCache(),
//   headers: {
//     "content-type": "application/json",
//     "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET,
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
    {/* </Provider> */}
    {/* </ApolloProvider> */}
  </React.StrictMode>
);
