// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Clock, Linkedin, Twitter, CheckCircle2 } from 'lucide-react'

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
}

function ContactForm() {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm()
    const onSubmit = () => reset()

    if (isSubmitSuccessful) {
        return (
            <motion.div
                className="bg-teal/20 border border-teal rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <CheckCircle2 size={40} className="text-teal mx-auto mb-3" />
                <p className="text-textdark font-medium">
                    Thanks for reaching out! We'll be in touch within 1 business day.
                </p>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
                <label htmlFor="contact-name" className="form-label text-textdark">Your Name *</label>
                <input id="contact-name" type="text" className="form-input-light" placeholder="Your full name"
                    {...register('name', { required: 'Name is required' })} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="contact-email" className="form-label text-textdark">Your Email *</label>
                <input id="contact-email" type="email" className="form-input-light" placeholder="you@company.com"
                    {...register('email', { required: 'Email is required' })} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="contact-subject" className="form-label text-textdark">Subject *</label>
                <select id="contact-subject" className="form-input-light"
                    {...register('subject', { required: 'Please select a subject' })}>
                    <option value="">Select a subject...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Advisory Services">Advisory Services</option>
                    <option value="Design Workshop">Design Workshop</option>
                    <option value="Other">Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
            </div>
            <div>
                <label htmlFor="contact-message" className="form-label text-textdark">Your Message *</label>
                <textarea id="contact-message" rows={5} className="form-input-light resize-none"
                    placeholder="Tell us how we can help..."
                    {...register('message', { required: 'Message is required' })} />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
                Send Message
            </button>
        </form>
    )
}

export default function LetsBeInTouch() {
    return (
        <>
            <Helmet>
                <title>Contact TheoremLabs | Let's Be in Touch</title>
                <meta name="description" content="Get in touch with TheoremLabs. We respond within 1 business day. General inquiries, product questions, partnership opportunities." />
            </Helmet>

            {/* HERO */}
            <section className="bg-navy py-20 text-center">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp}>
                        <h1 className="text-white mb-5">Let's Be in Touch</h1>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Have a question, a project in mind, or just want to learn more about what we do? Reach out — we'd love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT + FORM */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <motion.div {...fadeUp}>
                            <h2 className="text-textdark mb-3">Reach Our Expert Team</h2>
                            <p className="text-textmuted mb-8">
                                Send a message through the form. If your enquiry is time sensitive please use the details below.
                            </p>

                            {/* Contact Items */}
                            <div className="space-y-6 mb-10">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center shrink-0">
                                        <Mail size={18} className="text-teal" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-textdark text-sm">General Enquiries</p>
                                        <a href="mailto:imagine@theoremlabs.io" className="text-teal hover:underline">
                                            imagine@theoremlabs.io
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin size={18} className="text-teal" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-textdark text-sm">Address</p>
                                        <address className="not-italic text-textmuted text-sm leading-relaxed">
                                            Theoremlabs Partners LLC<br />
                                            101 S. Tryon St<br />
                                            STE 2700<br />
                                            Charlotte NC 28280
                                        </address>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center shrink-0">
                                        <Clock size={18} className="text-teal" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-textdark text-sm">Response Time</p>
                                        <p className="text-textmuted text-sm">We typically respond within 1 business day</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="mb-8">
                                <div className="flex gap-4 mb-2">
                                    <a href="#" aria-label="TheoremLabs LinkedIn"
                                        className="text-textmuted hover:text-teal transition" tabIndex={0}>
                                        <Linkedin size={22} />
                                    </a>
                                    <a href="#" aria-label="TheoremLabs Twitter"
                                        className="text-textmuted hover:text-teal transition" tabIndex={0}>
                                        <Twitter size={22} />
                                    </a>
                                </div>
                                <p className="text-textmuted text-sm">Follow us for AI insights and company news</p>
                            </div>

                            {/* Quick Links */}
                            <div className="space-y-2">
                                <p className="text-xs text-textmuted uppercase tracking-widest font-semibold mb-3">Quick Links</p>
                                <Link to="/setup-design-workshops" className="block text-teal text-sm hover:underline">
                                    Book a Free Workshop
                                </Link>
                                <Link to="/become-a-partner" className="block text-teal text-sm hover:underline">
                                    Become a Partner
                                </Link>
                                <Link to="/kirdar-ai" className="block text-teal text-sm hover:underline">
                                    See Our Products
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column — Form */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg p-8"
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-textdark text-2xl font-bold mb-6">Send Us a Message</h3>
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
