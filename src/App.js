import { Router } from "./routes"
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./styles"
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ChakraProvider>
    
  );
}

export default App;
