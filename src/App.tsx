import './assets/css/App.css'
import Header from './layout/Header'
import Home from './views'
import Footer from './layout/Footer'
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

function App() {

  return (
    <ChakraProvider value={system}>
      <Header />
      <Home />
      <Footer />
    </ChakraProvider>
  )
}

export default App
