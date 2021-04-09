import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import {libraryLanding} from "../assets"

export default function LandingPage() {
  return (
    <LandingLayout>
      <Hero
        title="Build this rad landing page from scratch"
        subtitle="This is the subheader section where you describe the basic benefits of your product"
        image={libraryLanding}
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}