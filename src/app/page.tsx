import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Authority } from "@/components/Authority";
import { Pains } from "@/components/Pains";
import { Services } from "@/components/Services";
import { Method } from "@/components/Method";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <Pains />
        <Services />
        <Method />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
