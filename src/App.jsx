import ChatWidget from "./components/ChatWidget"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Steps from "./components/Steps"
import Testimonials from "./components/Testimonials"
import Why from "./components/Why"

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="steps"><Steps /></div>
      <div id="why"><Why /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
      <ChatWidget />
    </div>
  )
}

export default App
