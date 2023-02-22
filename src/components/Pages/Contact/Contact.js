import { useState } from "react";

function Contact() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "7ef2c6f9-8053-4acd-bf7d-2695c5496df5",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      });
  };

  return (
    <>
      <header className="contact-banner">
        <h1 className="banner-h1">Get in Touch!</h1>
      </header>
      <h2 className="contact-h2">
        Get in touch with our friendly team. Send us a postcard, or maybe just
        fill out the form below!
      </h2>
      <form onSubmit={handleSubmit}>
        <h3>Contact us!</h3>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="text"
          placeholder="Enter your email address"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          cols="30"
          rows="10"
        ></textarea>
        <button>Submit</button>
      </form>

      {success && (
        <p className="success-message">
          Form submitted. Thank you for your message. We'll get back to you as
          soon as we can.
        </p>
      )}
    </>
  );
}

export default Contact;
