import { ApolloProvider } from "@apollo/client";
import { client } from "./config/client";
import { InfosContextProvider } from "./contexts/InfosContext";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <InfosContextProvider>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </InfosContextProvider>
  );
}

export default App;
