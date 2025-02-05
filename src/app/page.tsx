import { Hero } from "./components/hero"
import { Container } from "./components/container"
import { SectionTitle } from "./components/sectionTitle"


export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      </Container>)}