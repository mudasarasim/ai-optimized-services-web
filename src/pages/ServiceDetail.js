import React, { useState } from 'react';
import './ServiceDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const ServiceDetail = () => {
   const [message, setMessage] = useState('');
    
      const handleWhatsAppSend = () => {
        const phoneNumber = "971526353298"; // AIO WhatsApp Number (without '+')
        const encodedMsg = encodeURIComponent(message || "Hi AIO SERVICES, I need some help.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(whatsappUrl, "_blank");
      };
  const [serviceDuration, setServiceDuration] = useState('');
  const [teamMember, setTeamMember] = useState('');
  const [needMaterial, setNeedMaterial] = useState('');
  const [instruction, setInstruction] = useState('');

  return (
    <>
    <div className="service-detail-page container py-5">
      <h2 className="fw-bold mb-4">Service Detail</h2>
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-8">
          <div className="card p-4 mb-4">
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Select Service Duration:</label>
                <select className="form-select" value={serviceDuration} onChange={e => setServiceDuration(e.target.value)}>
                  <option>-Select-</option>
                  <option>1 Hour</option>
                  <option>2 Hours</option>
                  <option>3 Hours</option>
                  <option>4 Hours</option>
                  <option>5 Hours</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Select Team Member:</label>
                <select className="form-select" value={teamMember} onChange={e => setTeamMember(e.target.value)}>
                  <option>-Select-</option>
                  <option>Professionals 1</option>
                  <option>Professionals 2</option>
                  <option>Professionals 3</option>
                  <option>Professionals 4</option>
                  <option>Professionals 5</option>
                
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Need Cleaning Materials:</label>
                <select className="form-select" value={needMaterial} onChange={e => setNeedMaterial(e.target.value)}>
                  <option>-Select-</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Any instructions or special requirements?</label>
              <textarea className="form-control" placeholder="Example: Key under the mat, ironing, window cleaning, etc." value={instruction} onChange={e => setInstruction(e.target.value)}></textarea>
            </div>

            <div>
              <h5 className="fw-bold">Popular Add-ons:</h5>
              <div className="d-flex gap-3 overflow-auto">
                {[
                  {
                    title: 'Balcony Cleaning',
                    desc: 'Get your balcony freshly cleaned',
                    img: '/Images/image11.png'
                  },
                  {
                    title: 'Ironing and Folding',
                    desc: 'We will press and fold your clothes',
                    img: '/Images/image12.png'
                  },
                  {
                    title: 'Party Cleaning',
                    desc: 'No-stress party prep & cleanup',
                    img: '/Images/image13.png'
                  }
                ].map((addon, index) => (
                  <div key={index} className="card addon-card" style={{ width: '200px' }}>
                    <img src={addon.img} className="card-img-top" alt={addon.title} />
                    <div className="card-body">
                      <h6 className="fw-bold text-success">{addon.title}</h6>
                      <p className="text-muted small">{addon.desc}</p>
                      <p className="text-primary fw-bold">AED 50 <span className="ms-2 text-decoration-underline">View Detail</span></p>
                      <select className="form-select mb-2">
                        <option>-Select-</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        

                      </select>
                      <button className="btn btn-warning w-100 text-white">Add</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-end">
              <button className="btn btn-success px-5">Next</button>
            </div>
          </div>
        </div>

        {/* Right Section - Booking Summary */}
        <div className="col-lg-4">
          <div className="card p-4 mb-3">
            <h5 className="fw-bold">Booking Detail:</h5>
            <p><strong>Address:</strong><br/> Jumeirah Beach Residence Beach Walk <br/>Dubai Marina Dubai United Arab Emirates</p>
            <p><strong>Service:</strong> Home Cleaning</p>
            <p><strong>Service Detail:</strong> 03 Hours</p>
            <p><strong>Number of Professionals:</strong> 05</p>
            <p><strong>Material:</strong> No</p>
            <p><strong>Date & Start Time:</strong><br/> 09 Jan 2025, 01:00–01:30</p>
            <p><strong>Duration:</strong> 03 Hours</p>
          </div>

          <div className="card p-4">
            <h5 className="fw-bold">Payment Summary:</h5>
            <div className="d-flex justify-content-between">
              <span>Sub Total:</span>
              <span>AED 50:00</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Weekly Discount:</span>
              <span className="text-danger">-AED 05:40</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Sub Total:</span>
              <span>AED 44:60</span>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="whatsapp-button" onClick={handleWhatsAppSend}>
              <FontAwesomeIcon icon={faWhatsapp} />
        </div>
    </>
  );
};

export default ServiceDetail;
