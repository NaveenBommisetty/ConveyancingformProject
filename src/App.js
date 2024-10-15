import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import ContactForm from './contactform';
import ContactUsForm from './contactus';

const App = () => {
  return (
    <>
    <Router>
      <Routes> {/* Replace Switch with Routes */}
     
        <Route path="/" element={<ContactForm />} />
        <Route path="/contact-us" element={<ContactUsForm />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
