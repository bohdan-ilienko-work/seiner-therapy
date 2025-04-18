//App.tsx
import AboutMe from "./Components/AboutMe"
import ContactForm from "./Components/ContactForm"
import Education from "./Components/Education"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Services from "./Components/Services"
import WorkExperience from "./Components/WorkExperience"


function App() {
  return (
    <>
      <Header />
      <div id="about" style={{ scrollMarginTop: 80 }}>
        <AboutMe />
      </div>
      <div id="services" style={{ scrollMarginTop: 80 }}>
        <Services />
      </div>
      <div id="experience" style={{ scrollMarginTop: 80 }}>
        <WorkExperience />
      </div>
      <div id="education" style={{ scrollMarginTop: 80 }}>
        <Education />
      </div>
      <div id="contact-with-me">
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default App
