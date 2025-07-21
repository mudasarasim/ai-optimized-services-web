import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import image1 from '../assets/Images/image27.jpg';
import image2 from '../assets/Images/image25.jpg';
import image3 from '../assets/Images/image26.jpg';
import image4 from '../assets/Images/image24.jpg';
import image5 from '../assets/Images/image13.png';
import image6 from '../assets/Images/image29.jpg';

import axios from "axios";
import './PlaceOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faLocationDot,
  faClock,
  faUserGroup,
  faPlus,
  faMoneyBillWave,
  faCircleCheck,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
library.add(
  faTriangleExclamation,
  faLocationDot,
  faClock,
  faUserGroup,
  faPlus,
  faMoneyBillWave,
  faCircleCheck,
  faCircleXmark
);

function PlaceOrder() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [serviceName] = useState("Home Cleaning");
  const [professionals, setProfessionals] = useState(1);
  const [hours, setHours] = useState(1);
  const [material, setMaterial] = useState(false);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [addons, setAddons] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addonOptions = [
    { id: 1, name: 'Balcony Cleaning', price: 19, image: image1 },
    { id: 2, name: 'Ironing and Folding', price: 25, image: image2 },
    { id: 3, name: 'Fridge Cleaning', price: 19, image: image3 },
    { id: 4, name: 'Kitchen Assistaince ', price: 29, image: image4 },
    { id: 5, name: 'Party Cleaning', price: 25, image:image5 },
    { id: 6, name: 'Cup Board CLeaning ', price: 25, image: image6 }
  ];

  const basePrice = 55;
  const addonsTotal = addons.reduce((sum, a) => sum + a.price, 0);
  const materialCost = material ? 10 : 0;
  const total = (hours * professionals * basePrice) + addonsTotal + materialCost;

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  const handleAddonToggle = (addon) => {
    const exists = addons.some(a => a.id === addon.id);
    if (exists) {
      setAddons(addons.filter(a => a.id !== addon.id));
    } else {
      setAddons([...addons, addon]);
    }
  };

  const confirmAndPlaceOrder = async () => {
    const payload = {
      user_id: userId,
      service_id: serviceId,
      service_name: serviceName,
      address,
      professionals,
      hours,
      material,
      addons: JSON.stringify(addons),
      total,
      description,
    };

    try {
      await axios.post("http://localhost:5001/api/orders", payload);

      const email = "aioptimizedservices@gmail.com";
      const subject = "New Service Order Request";
      const message = `\n\n📢 *New Service Order*:\n\n👤 User ID: ${userId}\n📍 Address: ${address}\n🔧 Service: ${serviceName}\n👥 Professionals: ${professionals}\n⏱️ Hours: ${hours}\n🧼 Materials: ${material ? 'Yes (+10 AED)' : 'No'}\n➕ Addons: ${addons.map(a => a.name).join(', ') || 'None'}\n📅 Date: ${selectedDate}\n📝 Notes: ${description}\n💰 Total: AED ${total.toFixed(2)}`;
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoUrl;

      alert("✅ Order placed successfully!");
      navigate("/");
    } catch (err) {
      console.error("❌ Order failed:", err.response?.data || err.message);
      alert("❌ Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !serviceId || !serviceName || !description || !address) {
      alert("❌ Missing required fields");
      return;
    }
    setShowModal(true);
  };
  return (
    <>
      <section
        className="page-title-section bg-img cover-background top-position theme-overlay-dark"
        data-overlay-dark="6"
        style={{ backgroundImage: 'url("../img/content/Home Deep Cleaning.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Home Cleaning</h1>
            </div>
            <div className="col-md-12">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#!">Home Cleaning</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    <div className="booking-container row">
      <div className="col-md-7">
        <h3>Home Cleaning</h3>
        <form>
          <p>How many hours do you need your professional to stay?</p>
          <div className="option-group">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(h => (
              <button key={h} type="button" className={hours === h ? 'selected' : ''} onClick={() => setHours(h)}>{h}</button>
            ))}
          </div>

          <p>How many professionals do you need?</p>
          <div className="option-group">
            {[1, 2, 3, 4].map(p => (
              <button key={p} type="button" className={professionals === p ? 'selected' : ''} onClick={() => setProfessionals(p)}>{p}</button>
            ))}
          </div>

          <p>Need cleaning materials?</p>
          <div className="option-group">
            <button type="button" className={!material ? 'selected' : ''} onClick={() => setMaterial(false)}>No, I have them</button>
            <button type="button" className={material ? 'selected' : ''} onClick={() => setMaterial(true)}>Yes, please</button>
          </div>

          <p>Where do you want the service?</p>
          <input type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} required />

          <p>Select the service date:</p>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />

          <p>Any instructions or special requirements?</p>
          <textarea placeholder="e.g., Key under mat, etc." value={description} onChange={(e) => setDescription(e.target.value)} required />

          <h5>People also added</h5>
          <div className="addon-cards">
            {addonOptions.map(addon => (
              <div key={addon.id} className="addon-card">
                <img src={addon.image} alt={addon.name} className="addon-image" />
                <h6>{addon.name}</h6>
                <p>AED {addon.price}</p>
                <button type="button" onClick={() => handleAddonToggle(addon)}>
                  {addons.some(a => a.id === addon.id) ? 'Remove' : 'Add +'}
                </button>
              </div>
            ))}
          </div>
        </form>
      </div>

      <div className="col-md-5">
        <div className="summary-box">
          <h5>Booking Details</h5>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Service:</strong> {serviceName}</p>
          <p><strong>Duration:</strong> {hours} {hours > 1 ? 'hours' : 'hour'}</p>
          <p><strong>Professionals:</strong> {professionals}</p>
          <p><strong>Material:</strong> {material ? 'Yes (+10 AED)' : 'No (0 AED)'}</p>
          <p><strong>Date:</strong> {selectedDate}</p>
        </div>
        <div className="summary-box">
          <h5>Payment Summary</h5>
          <p><strong>Total:</strong> AED {total.toFixed(2)}</p>
        </div>
        <div className="text-center mt-4">
          <button onClick={handleSubmit} className="next-btn" disabled={loading}>
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
  <div className="modal-box">
    <h4><FontAwesomeIcon icon="triangle-exclamation" className="text-warning me-2" /> Confirm Your Booking</h4>
    <p><strong><FontAwesomeIcon icon="location-dot" className="me-2" /> Address:</strong> {address}</p>
    <p><strong><FontAwesomeIcon icon="clock" className="me-2" /> Hours:</strong> {hours}</p>
    <p><strong><FontAwesomeIcon icon="user-group" className="me-2" /> Professionals:</strong> {professionals}</p>
    <p><strong><FontAwesomeIcon icon="plus" className="me-2" /> Addons:</strong> {addons.map(a => a.name).join(', ') || 'None'}</p>
    <p><strong><FontAwesomeIcon icon="money-bill-wave" className="me-2" /> Total:</strong> AED {total.toFixed(2)}</p>
    <div className="modal-actions">
      <button className="confirm-btn" onClick={async () => {
        setShowModal(false);
        setLoading(true);
        await confirmAndPlaceOrder();
      }}>
        <FontAwesomeIcon icon="circle-check" className="me-2" /> Confirm
      </button>
      <button className="cancel-btn" onClick={() => setShowModal(false)}>
        <FontAwesomeIcon icon="circle-xmark" className="me-2" /> Cancel
      </button>
    </div>
  </div>
</div>
      )}
    </div>
    </>
  );
}

export default PlaceOrder;
