import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavigationBar from "./components/navigationbar/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FooterBar from "./components/footerbar/FooterBar";
import { AppWrapper, PageContainer } from "./App.style";

const theme = {
  color: {
    primary_bg_color: "#00C2CB",
    seconday_color: "#8C52FF",
    primary_cta_bgcolor: "#FFF",
    //primary_cta_bgcolor: "#E1341E",
    //primary_cta_color: "#F7F7F7",
    primary_cta_color: "#000",
    white: "#FFF",
  },
};

function App() {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <Router>
          <NavigationBar />
          <PageContainer>
            <Routes>
              <Route path="/" exect element={<Home />} />
              <Route path="/about" exect element={<About />} />
              <Route path="/contact" exect element={<Contact />} />
            </Routes>
          </PageContainer>
          <FooterBar />
        </Router>
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
