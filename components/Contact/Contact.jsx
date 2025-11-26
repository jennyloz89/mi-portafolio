import React, { useState } from 'react';
import { contactData } from './ContactData';
import { Map } from '..';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Usar mailto: para enviar correo (compatible con GitHub Pages)
        const mailtoLink = `mailto:${contactData.mainData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div id="contact" className="section pb-0">
            <div className="container">
                <div className="row g-4 g-xl-5">
                    <div className="col-12 col-xl-4">
                        <span className="title-heading text-white-04">Contact</span>
                        <h1 className="display-3 fw-medium mb-0">Let&apos;s <span className="text-gradient">Talk</span></h1>
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-md-6">
                                <h6 className="sm-heading">Email:</h6>
                                <h3 className="mb-0">{contactData.mainData.email}</h3>
                            </div>
                            <div className="col-12 col-md-6">
                                <h6 className="sm-heading">Call:</h6>
                                <h3 className="mb-0">{contactData.mainData.phone}</h3>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="contact-form mt-4 mt-lg-5 text-xl-end">
                            <form method="post" id="contactform" onSubmit={handleSubmit}>
                                <div className="row gx-3 gy-0">
                                    <div className="col-12 col-md-6">
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            placeholder="Name" 
                                            required 
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            placeholder="E-Mail" 
                                            required 
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    required 
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <button className="button button-dot" type="submit">
                                    <span data-text="Send Message">Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Google Maps */}
                <Map />
                {/* end Google Maps */}
            </div>
        </div>
    );
};

export default Contact;
