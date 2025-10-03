import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { President } from "./components/President";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { TeamPhoto } from "./components/TeamPhoto";
import { Events } from "./components/Events";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Landing />
        <President />
        <Team />
        <TeamPhoto />
        <Events />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}