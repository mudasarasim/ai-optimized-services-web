import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faLock, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
   const [message, setMessage] = useState('');
    
      const handleWhatsAppSend = () => {
        const phoneNumber = "971526353298"; // AIO WhatsApp Number (without '+')
        const encodedMsg = encodeURIComponent(message || "Hi AIO SERVICES, I need some help.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(whatsappUrl, "_blank");
      };
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', formData);

      // ✅ Set token and userId in localStorage
      localStorage.setItem('userToken', res.data.token);
      localStorage.setItem('userId', res.data.user?.id || res.data.user?.user_id); // fallback

      // ✅ Trigger global login update if needed
      window.dispatchEvent(new Event('loginStatusChanged'));

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        navigate('/');
        window.location.reload(); // optional
      }, 2000);
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    
  <>
    <section class="page-title-section bg-img cover-background top-position theme-overlay-dark" data-overlay-dark="6" data-background="img/content/bg-05.jpg" style={{backgroundImage: 'url("img/content/bg-05.jpg")'}}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Login Here</h1>
                    </div>
                    <div class="col-md-12">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#!">Login Here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    <div className="login-container mb-10" style={{marginTop: '-20px'}}>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-box">
          <h2>
            <FontAwesomeIcon icon={faUserCircle} /> Login Now!
          </h2>

          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className='mb-2' />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className='mb-2' />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button type="submit" className="login-button">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2>🎉 Welcome Sir!</h2>
            <p>You have successfully logged in. We’re glad to see you back!</p>
          </div>
        </div>
      )}
    </div>
     <div className="whatsapp-button" onClick={handleWhatsAppSend}>
              <FontAwesomeIcon icon={faWhatsapp} />
        </div>
  </>
  );
};

export default Login;
