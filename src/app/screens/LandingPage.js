import Hero from '../components/Landing/Hero'
import LandingLayout from '../components/Landing/LandingLayout'
import { libraryLanding } from '../assets'

export default function LandingPage() {
  return (
    <LandingLayout>
      <Hero
        title="Online Libzipy Kütüphanesi"
        subtitle="Size pdfler üzerinden online bir kütüphane fırsatı sunuyor"
        image={libraryLanding}
        ctaText="Hemen hesap oluştur"
        ctaLink="/signup"
      />
    </LandingLayout>
  )
}
