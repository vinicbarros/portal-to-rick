import { ApolloProvider } from "@apollo/client";
import { client } from "./config/client";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </>
  );
}

export default App;
