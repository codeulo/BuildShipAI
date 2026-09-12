import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Demo from "@/components/Demo";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import FoundingOffer from "@/components/FoundingOffer";
import FAQ from "@/components/FAQ";
import LeadFormSection from "@/components/LeadFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Demo />
        <HowItWorks />
        <UseCases />
        <FoundingOffer />
        <FAQ />
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
