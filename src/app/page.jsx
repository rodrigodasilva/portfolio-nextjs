import { NavBar } from './components/navbar'

import { HomeSection } from './components/home-section'
import { Footer } from './components/footer'
import { BackToTopButton } from './components/back-to-top-button'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-bg flex justify-center bg-background pt-8">
        <main className="max-w-screen-md flex min-h-screen overflow-x-hidden flex-col items-center justify-start gap-16 mx-4 pt-20 pb-16">
          <HomeSection />
        </main>
      </div>
      <BackToTopButton />
      <Footer />
    </>
  )
}
