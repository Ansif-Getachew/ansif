import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    
    const [formData, setFormData] = useState({
        email: "",
        name:"",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Contact form submit', formData);

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error('EmailJS env vars missing', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
            alert('Email service is not configured. Please contact the site owner.');
            return;
        }

        // initialize (optional) and send
        if (typeof emailjs.init === 'function') {
            try { emailjs.init(PUBLIC_KEY); } catch (err) { console.warn('emailjs.init failed', err); }
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                alert("Message Sent");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((err) => {
                console.error('emailjs error', err);
                alert("Oops! Something went wrong, please try again.");
            });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center">
            <RevealOnScroll>

                <div className="w-[400px] px-6">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-purple-900 bg-clip-text text-transparent">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/10 focus:border-blue-500"
                                placeholder="Name..."
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full mt-5 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/10 focus:border-blue-500"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />

                            <textarea
                                id="message"
                                name="message"
                                rows={10}
                                required
                                value={formData.message}
                                className="w-full mt-5 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/10 focus:border-blue-500"
                                placeholder="Your Message"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow:hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246, 0.5)]">Send Message</button>
                    </form>
                </div>

            </RevealOnScroll>
        </section>
    );
};