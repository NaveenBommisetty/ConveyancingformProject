import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
// import './contactform.css'

const ContactForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    price: '',
    leasehold: '',
    mortgage: '',
    sharedOwnership: '',
    purchaseFundsGifted: '',
    newBuild: '',
    staircasing: '',
    unregistered: ''
  });

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let cost = 0;

    // Update costs based on field selections
    if (formData.mortgage === 'Yes') {
      cost += 360; // Mortgage cost
    }
    if (formData.sharedOwnership === 'Yes') {
      cost += 150; // Shared Ownership cost
    }
    if (formData.purchaseFundsGifted === 'Yes') {
      cost += 150; // Purchase Funds Gifted cost
    }
    if (formData.newBuild === 'Yes') {
      cost += 420; // New Build cost
    }
    if (formData.unregistered === 'Yes') {
      cost += 430; // Unregistered cost
    }

    // Other fields can remain the same or be updated as needed
    if (formData.leasehold === 'Yes') {
      cost += 300; // Leasehold cost
    }
    if (formData.staircasing === 'Yes') {
      cost += 300; // Staircasing cost
    }

    setTotalCost(cost);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseFloat(formData.price) > 400000) {
      navigate('/contact-us'); // Redirect to Contact Us page if price is greater than 4,000,000
    } else {
      console.log('Form submitted:', formData);
      console.log('Total Legal Cost:', totalCost);
    }
  };

  return (
    <div className="col-md-7 mx-auto">
      <div className="card p-4 shadow mb-4 mt-4" style={{ borderRadius: '10px' }}>
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>
      <div className="mb-3">
        <label className="form-label">Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Leasehold:</label>
        <select name="leasehold" value={formData.leasehold} onChange={handleChange} className="form-select" required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Mortgage:</label>
        <select name="mortgage" value={formData.mortgage} onChange={handleChange} className="form-select" required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Shared Ownership:</label>
        <select name="sharedOwnership" value={formData.sharedOwnership} onChange={handleChange} className="form-select" required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Purchase Funds Being Gifted:</label>
        <select name="purchaseFundsGifted" value={formData.purchaseFundsGifted} onChange={handleChange} className="form-select" required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">New Build:</label>
        <select name="newBuild" value={formData.newBuild} onChange={handleChange} className="form-select" required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Staircasing:</label>
        <select name="staircasing" value={formData.staircasing} onChange={handleChange} className="form-select" required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Unregistered:</label>
        <select name="unregistered" value={formData.unregistered} onChange={handleChange} className="form-select" required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary w-50">Submit</button>
      </div>
      <div className="text-center mt-3">
        <h5>Total Legal Cost on Purchase: €{totalCost}</h5>
      </div>
    </form>
    </div> 
        </div>
  );
};

export default ContactForm;
