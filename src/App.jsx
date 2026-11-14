import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import PageContainer from "./components/layout/PageContainer.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <PageContainer>
      <Header />
      <Home />
      <Footer />
    </PageContainer>
  );
}
