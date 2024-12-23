import { NavBar } from './components/navbar'
import { HomeSection } from './components/home-section'
import { Footer } from './components/footer'
import { BackToTopButton } from './components/back-to-top-button'
import { SkillsBar } from './components/skills-bar'
import { MyResumeSection } from './components/my-resume-section'
import { ProjectsSection } from './components/projects-section'
import { ContactFormSection } from './components/contact-form-section'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center bg-background pt-8">
        <main className="w-full flex overflow-hidden flex-col items-center justify-start gap-28 pt-20 pb-28">
          <HomeSection />
          <SkillsBar />
          <MyResumeSection />
          <ProjectsSection />
          <ContactFormSection />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </>
  )
}
