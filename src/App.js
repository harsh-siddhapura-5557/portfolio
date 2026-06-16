import React from "react";
import "./App.css";
import { Header } from "./pages/Header";
import { HeroSection } from "./pages/HeroSection";
import { About } from "./pages/About";
import { WorkSection } from "./pages/WorkSection";
import { ServicesSection } from "./pages/ServicesSection";
import { BugFixingBanner } from "./Components/BugFixingBanner";
import { TestimonialsSection } from "./pages/TestimonialsSection";
import { ContactSection } from "./pages/ContactSection";
import { Footer } from "./pages/Footer";
import { CustomCursor } from "./Components/CustomCursor";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Toaster position="top-center" />
      <Header />
      <HeroSection />
      <About />
      <WorkSection />
      <ServicesSection />
      <BugFixingBanner />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
