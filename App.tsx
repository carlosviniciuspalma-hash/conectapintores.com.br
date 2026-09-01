import {
  About,
  AudienceCtas,
  Contact,
  Ecosystem,
  Faq,
  Footer,
  Founder,
  Header,
  Hero,
  Projects,
  Services,
  SocialProof,
} from "./components/landing-sections";
import { SplashCursor } from "./components/visual-effects";

export default function App() {
  return (
    <div className="site-shell">
      <SplashCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <Projects />
        <Services />
        <Ecosystem />
        <AudienceCtas />
        <SocialProof />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
