import { NavBar } from './components/navbar'

import { HomeSection } from './components/home-section'
import { Footer } from './components/footer'
import { BackToTopButton } from './components/back-to-top-button'
import { SkillsBar } from './components/skills-bar'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-bg flex justify-center bg-background pt-8">
        <main className="w-full flex min-h-screen overflow-x-hidden flex-col items-center justify-start gap-16 pt-20 pb-16">
          <HomeSection />
          <SkillsBar />
        </main>
      </div>
      <BackToTopButton />
      <Footer />
    </>
  )
}
