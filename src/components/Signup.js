import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
   const [message, setMessage] = useState('');
    
      const handleWhatsAppSend = () => {
        const phoneNumber = "971526353298"; // AIO WhatsApp Number (without '+')
        const encodedMsg = encodeURIComponent(message || "Hi AIO SERVICES, I need some help.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(whatsappUrl, "_blank");
      };
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const { name, email, password } = form;

    // Basic validation
    if (name.trim().length < 2) return setError("Name too short");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Invalid email");
    if (password.length < 6) return setError("Password too short");

    try {
      const response = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log("📦 Signup response:", data); // Debug log

      if (response.ok) {
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("userId", data.user?.id || data.user?.user_id); // fallback
        window.dispatchEvent(new Event("loginStatusChanged"));
        navigate("/");
        window.location.reload();
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (err) {
      console.error("Signup Error:", err);
      setError("Server error");
    }
  };

  return (

  <>
   <section class="page-title-section bg-img cover-background top-position theme-overlay-dark" data-overlay-dark="6" data-background="img/content/bg-05.jpg" style={{backgroundImage: 'url("img/bg/bg-02.jpg")'}}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Sign Up Here</h1>
                    </div>
                    <div class="col-md-12">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#!">Sign Up Here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-box">
          <h2><i className="fas fa-user-plus"></i> Sign Up</h2>

          <div className="input-group">
            <i className="fas fa-user mb-2"></i>
            <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <i className="fas fa-envelope mb-2"></i>
            <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <i className="fas fa-lock mb-2"></i>
            <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button type="submit" className="auth-button">
            <i className="fas fa-user-check"></i> Sign Up
          </button>
        </div>
      </form>
    </div>
     <div className="whatsapp-button" onClick={handleWhatsAppSend}>
              <FontAwesomeIcon icon={faWhatsapp} />
        </div>
  </>
  );
};

export default Signup;
