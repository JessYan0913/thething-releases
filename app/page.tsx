import Nav from './components/Nav'
import Hero from './components/Hero'
import Value from './components/Value'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Download from './components/Download'
import Enterprise from './components/Enterprise'
import Developer from './components/Developer'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Value />
        <HowItWorks />
        <WhyUs />
        <Download />
        <Enterprise />
        <Developer />
      </main>
      <Footer />
    </>
  )
}
