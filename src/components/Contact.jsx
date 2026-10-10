import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';

// ─── EmailJS Config (pulled from .env) ─────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '' | 'success' | 'error' | 'env_error'
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        // Guard: make sure env vars are filled in
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY ||
            SERVICE_ID === 'your_service_id_here') {
            console.error('EmailJS credentials are not set in .env');
            setStatus('env_error');
            setIsSubmitting(false);
            return;
        }

        // Template params must match your EmailJS template variables
        const templateParams = {
            from_name:  formData.name,
            from_email: formData.email,
            subject:    formData.subject || 'Portfolio Contact Form',
            message:    formData.message,
            reply_to:   formData.email,
        };

        try {
            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            if (result.status === 200) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 6000);
            } else {
                throw new Error(`Unexpected status: ${result.status}`);
            }
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <h2 className="section-title">Contact <span>Me</span></h2>

                <div className={styles.contactContent}>
                    {/* Left: Info */}
                    <div className={styles.contactInfo}>
                        <h3>Let's Connect</h3>
                        <p>I'm always open to discussing new opportunities and interesting projects.</p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>
                                        <a
                                            href="mailto:potturishanmukha919@gmail.com"
                                            style={{ color: 'var(--text-color)', textDecoration: 'none' }}
                                        >
                                            potturishanmukha919@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <i className="fas fa-phone"></i>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 9705477919</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Location</h4>
                                    <p>Andhra Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                id="contact-name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="contact-name">Name</label>
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                id="contact-email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="contact-email">Email</label>
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="subject"
                                id="contact-subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <label htmlFor="contact-subject">Subject</label>
                        </div>

                        <div className={styles.formGroup}>
                            <textarea
                                name="message"
                                id="contact-message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label htmlFor="contact-message">Message</label>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-full"
                            disabled={isSubmitting}
                        >
                            <span style={{ display: isSubmitting ? 'none' : 'inline' }}>
                                Send Message
                            </span>
                            <span style={{ display: isSubmitting ? 'inline' : 'none' }}>
                                <i className="fas fa-spinner fa-spin"></i>&nbsp; Sending...
                            </span>
                        </button>

                        {status === 'success' && (
                            <div className={`${styles.formStatus} ${styles.success}`}>
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={`${styles.formStatus} ${styles.error}`}>
                                Something went wrong. Please try again or email me directly.
                            </div>
                        )}
                        {status === 'env_error' && (
                            <div className={`${styles.formStatus} ${styles.error}`}>
                                Email service not configured yet. Please add EmailJS credentials to .env file.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
