import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CompanyLogos from './components/CompanyLogos';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import WorkingProcess from './components/WorkingProcess';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <CompanyLogos />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default App;
