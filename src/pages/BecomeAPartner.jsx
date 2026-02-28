// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
    PackageOpen, Lightbulb, Briefcase, Code2,
    TrendingUp, GraduationCap, Heart, Shield, Sliders, CheckCircle2
} from 'lucide-react'

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
}

const opportunities = [
    { icon: PackageOpen, title: 'Product Implementation Partners', body: 'Collaborate with us to implement your products into new markets, ensuring seamless integration and adoption by leveraging our expertise in software development and AI.' },
    { icon: Lightbulb, title: 'Innovation Partners', body: "Join hands with us to co-create new solutions and frameworks that push the boundaries of AI, cloud computing, and emerging technologies. Together, we'll solve complex problems and pioneer new possibilities." },
    { icon: Briefcase, title: 'Technology Consulting Partners', body: 'Partner with us to provide advisory and consulting services for clients looking to modernize their platforms, optimize their operations, and unlock the potential of digital transformation.' },
    { icon: Code2, title: 'Solution Development Partners', body: "Work with us to design and develop bespoke software solutions tailored to your client needs, leveraging TheoremLabs' state-of-the-art development capabilities." },
    { icon: TrendingUp, title: 'Reseller and Distribution Partners', body: "Expand your product's reach by partnering with TheoremLabs to distribute and promote your offerings across our extensive client network." },
    { icon: GraduationCap, title: 'Training and Enablement Partners', body: 'Collaborate to deliver AI and technology-focused training programs to upskill teams and drive organizational readiness for the future.' },
    { icon: Heart, title: 'Community Impact Partners', body: 'Align with us on initiatives that use technology for social good, supporting community development and creating meaningful change through AI and tech solutions.' },
]

const whyPartner = [
    { icon: Shield, title: 'Expertise Across Domains', body: 'With a strong foundation in AI, consulting, and software development, we bring deep domain knowledge and technical expertise to every partnership.' },
    { icon: Lightbulb, title: 'Innovative Edge', body: 'We continuously experiment and develop innovative accelerators, frameworks, and solutions to stay ahead of the curve.' },
    { icon: Sliders, title: 'Customizable Solutions', body: 'Tailored partnerships to fit your business needs, whether implementing cutting-edge technology or creating future-ready solutions.' },
    { icon: TrendingUp, title: 'Mutual Growth', body: 'A shared journey toward achieving success, enhancing your capabilities, and expanding your business reach.' },
]

const expectations = [
    'Transparent and mutually beneficial agreements',
    'Dedicated support throughout the partnership lifecycle',
    'Access to our proprietary tools, frameworks, and accelerators',
    'Collaboration with a team of experts passionate about innovation',
]

function PartnerForm() {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm()

    const onSubmit = () => reset()

    if (isSubmitSuccessful) {
        return (
            <motion.div
                className="bg-green-500/20 border border-green-400 rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <CheckCircle2 size={40} className="text-green-400 mx-auto mb-3" />
                <p className="text-white font-medium">
                    Thank you! We'll review your submission and be in touch within 2 business days.
                </p>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
                <label htmlFor="partner-name" className="form-label text-white">Your Name *</label>
                <input id="partner-name" type="text" className="form-input" placeholder="Your full name"
                    {...register('name', { required: 'Name is required' })} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="partner-email" className="form-label text-white">Your Email *</label>
                <input id="partner-email" type="email" className="form-input" placeholder="you@company.com"
                    {...register('email', { required: 'Email is required' })} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="partner-company" className="form-label text-white">Company Name *</label>
                <input id="partner-company" type="text" className="form-input" placeholder="Your company"
                    {...register('company', { required: 'Company name is required' })} />
                {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
            </div>
            <div>
                <label htmlFor="partner-type" className="form-label text-white">Partnership Type *</label>
                <select id="partner-type" className="form-input"
                    {...register('partnershipType', { required: 'Please select a type' })}>
                    <option value="">Select a partnership type...</option>
                    <option value="Product Implementation">Product Implementation</option>
                    <option value="Innovation">Innovation</option>
                    <option value="Technology Consulting">Technology Consulting</option>
                    <option value="Solution Development">Solution Development</option>
                    <option value="Reseller / Distribution">Reseller / Distribution</option>
                    <option value="Training & Enablement">Training & Enablement</option>
                    <option value="Community Impact">Community Impact</option>
                    <option value="Other">Other</option>
                </select>
                {errors.partnershipType && <p className="text-red-400 text-xs mt-1">{errors.partnershipType.message}</p>}
            </div>
            <div>
                <label htmlFor="partner-idea" className="form-label text-white">Tell us about your partnership idea *</label>
                <textarea id="partner-idea" rows={4} className="form-input resize-none"
                    placeholder="Describe your partnership idea..."
                    {...register('idea', { required: 'Please describe your idea' })} />
                {errors.idea && <p className="text-red-400 text-xs mt-1">{errors.idea.message}</p>}
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
                Submit Partnership Interest
            </button>
        </form>
    )
}

export default function BecomeAPartner() {
    const scrollToForm = (e) => {
        e.preventDefault()
        document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Helmet>
                <title>Become a Partner | TheoremLabs</title>
                <meta name="description" content="Join the TheoremLabs partner network. Co-create AI-driven solutions in Fintech and beyond. Submit your partnership interest today." />
            </Helmet>

            {/* HERO */}
            <section className="bg-navy py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp}>
                        <h1 className="text-white mb-6">Become a Partner</h1>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            At TheoremLabs, we believe in the power of collaboration to drive innovation, deliver exceptional value, and create transformative solutions. As a cutting-edge AI, Advice, Consulting, and Development Labs company, we are actively seeking strategic partners who share our vision for shaping the future of technology and business. By partnering with TheoremLabs, you join a network of innovators, problem-solvers, and technology pioneers committed to delivering impactful solutions in a fast-changing digital landscape.
                        </p>
                        <a href="#form" onClick={scrollToForm} className="btn-primary">Submit Your Interest</a>
                    </motion.div>
                </div>
            </section>

            {/* PARTNERSHIP OPPORTUNITIES */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="text-textdark">Our Partnership Opportunities</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {opportunities.map((opp, i) => (
                            <motion.div
                                key={opp.title}
                                className="card-light"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <opp.icon size={28} className="text-teal mb-3" />
                                <h3 className="text-textdark text-lg mb-2">{opp.title}</h3>
                                <p className="text-textmuted text-sm leading-relaxed">{opp.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY PARTNER */}
            <section className="bg-navy py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="text-white">Why Partner with Us?</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyPartner.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="card-dark text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon size={22} className="text-teal" />
                                </div>
                                <h3 className="text-lg mb-2">{item.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{item.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT YOU CAN EXPECT */}
            <section className="bg-offwhite py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-textdark">What You Can Expect From Us</h2>
                    </motion.div>
                    <div className="space-y-4">
                        {expectations.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-4 items-center bg-white rounded-xl p-5 shadow-sm"
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.07 }}
                                viewport={{ once: true }}
                            >
                                <CheckCircle2 size={20} className="text-teal shrink-0" />
                                <p className="text-textdark font-medium">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNER FORM */}
            <section id="form" className="bg-navy py-20">
                <div className="max-w-2xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-white mb-3">Ready to Explore a Partnership?</h2>
                        <p className="text-white/60">Fill in the form below and we'll be in touch within 2 business days.</p>
                    </motion.div>
                    <PartnerForm />
                    <p className="text-center text-white/50 text-sm mt-6">
                        Or reach us directly at{' '}
                        <a href="mailto:imagine@theoremlabs.io" className="text-teal hover:underline">
                            imagine@theoremlabs.io
                        </a>
                    </p>
                </div>
            </section>
        </>
    )
}
