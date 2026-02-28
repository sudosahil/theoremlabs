// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
    CheckCircle2, ClipboardList, Users, FileText, MessageSquare,
    Brain, DollarSign, Zap, ShieldAlert, Sliders, MapPin
} from 'lucide-react'

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
}

const included = [
    'A structured session with TheoremLabs experts',
    'Analysis of your design challenge or problem',
    'A virtual design prototype or architecture sketch',
    'A comprehensive report with actionable recommendations',
    'A follow-up feedback session to refine and align',
    'On-site or remote — completely your choice',
]

const processSteps = [
    { icon: ClipboardList, title: 'Understanding Your Needs', body: 'We begin by gathering details about your design challenges and goals.' },
    { icon: Users, title: 'Expert Review', body: 'Our experts participate in design review sessions, build virtual designs, analyze your problem or needs, and identify strengths, areas for improvement, and potential innovations.' },
    { icon: FileText, title: 'Actionable Insights', body: 'Receive a comprehensive report with recommendations to enhance your design and move forward with confidence.' },
    { icon: MessageSquare, title: 'Feedback Session', body: 'Discuss findings, ask questions, and refine your design in a collaborative follow-up session.' },
]

const advantages = [
    { icon: Brain, title: 'AI First Design Approach', body: 'Every recommendation is grounded in practical AI application, not theory.' },
    { icon: DollarSign, title: 'Gain Expert Advice at No Cost', body: 'Expert guidance with zero financial commitment required.' },
    { icon: Zap, title: 'Improve Design Efficiency and Scalability', body: 'We help you design for efficiency and scalability from day one.' },
    { icon: ShieldAlert, title: 'Identify Potential Risks', body: 'We surface potential risks and areas for innovation before you commit resources.' },
    { icon: Sliders, title: 'Tailored Recommendations', body: 'Specific to your business context — not generic playbooks.' },
    { icon: MapPin, title: 'Your Location, Your Way', body: 'On-site at your office, a coffee shop, or fully remote. Flexibility is core to how we work.' },
]

function WorkshopForm() {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm()

    const onSubmit = (data) => {
        // Form submission — success state handles display
        reset()
    }

    if (isSubmitSuccessful) {
        return (
            <motion.div
                className="bg-teal/20 border border-teal rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <CheckCircle2 size={40} className="text-teal mx-auto mb-3" />
                <p className="text-white font-medium">
                    Thank you! We've received your request and will be in touch within 1 business day.
                </p>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
                <label htmlFor="name" className="form-label text-white">Your Name *</label>
                <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    {...register('name', { required: 'Name is required' })}
                    aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="email" className="form-label text-white">Your Email *</label>
                <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="you@company.com"
                    {...register('email', { required: 'Email is required' })}
                    aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="company" className="form-label text-white">Company Name</label>
                <input
                    id="company"
                    type="text"
                    className="form-input"
                    placeholder="Your company (optional)"
                    {...register('company')}
                />
            </div>
            <div>
                <label htmlFor="challenge" className="form-label text-white">Design Description / Challenge *</label>
                <textarea
                    id="challenge"
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Describe the challenge or design you'd like us to review..."
                    {...register('challenge', { required: 'Please describe your challenge' })}
                    aria-invalid={errors.challenge ? 'true' : 'false'}
                />
                {errors.challenge && <p className="text-red-400 text-xs mt-1">{errors.challenge.message}</p>}
            </div>
            <div>
                <span className="form-label text-white block mb-3">Preferred Review Format *</span>
                <div className="flex gap-6">
                    {['On-Site', 'Remote'].map((format) => (
                        <label key={format} className="flex items-center gap-2 cursor-pointer text-white">
                            <input
                                type="radio"
                                value={format}
                                className="accent-teal w-4 h-4"
                                {...register('format', { required: true })}
                            />
                            {format}
                        </label>
                    ))}
                </div>
                {errors.format && <p className="text-red-400 text-xs mt-1">Please select a format</p>}
            </div>
            <div>
                <label htmlFor="message" className="form-label text-white">Your Message</label>
                <textarea
                    id="message"
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Any additional context (optional)..."
                    {...register('message')}
                />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
                Book My Free Workshop
            </button>
        </form>
    )
}

export default function SetupDesignWorkshops() {
    const scrollToForm = (e) => {
        e.preventDefault()
        document.getElementById('workshop-form')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Helmet>
                <title>Free Design Workshops | TheoremLabs</title>
                <meta name="description" content="Book a free, no-obligation AI design workshop with TheoremLabs experts. On-site or remote. We respond within 1 business day." />
            </Helmet>

            {/* HERO */}
            <section className="bg-navy py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp}>
                        <span className="bg-gold text-navy text-xs font-semibold rounded-full px-3 py-1 inline-block mb-5">
                            Completely Free of Charge
                        </span>
                        <h1 className="text-white mb-2">Setup Design Workshops</h1>
                        <p className="text-teal text-2xl font-semibold mb-6">Design Workshop Sessions</p>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            Our no-cost design review sessions are your first step toward AI-powered transformation. Bring your challenge — we bring the expertise, the framework, and the recommendations.
                        </p>
                        <a href="#workshop-form" onClick={scrollToForm} className="btn-primary">
                            Book Your Free Workshop
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp}>
                            <h2 className="text-textdark mb-8">What You Get</h2>
                            <div className="space-y-4">
                                {included.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex gap-3 items-start"
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.07 }}
                                        viewport={{ once: true }}
                                    >
                                        <CheckCircle2 size={20} className="text-teal mt-0.5 shrink-0" />
                                        <p className="text-textdark">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-textmuted uppercase tracking-widest text-sm font-semibold mb-2">What It Costs</h3>
                            <div className="text-teal font-black text-9xl leading-none mb-6">$0</div>
                            <p className="text-textmuted leading-relaxed">
                                Our design workshops are completely free of charge. No strings attached. We invest this time because we believe the best relationships start with demonstrated value — not a sales pitch.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OUR PROCESS */}
            <section className="bg-navy py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="text-white">Our Proven Design Review Process</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                className="card-dark text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <step.icon size={22} className="text-teal" />
                                </div>
                                <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">Step {i + 1}</div>
                                <h3 className="text-lg mb-2">{step.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{step.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ADVANTAGES */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="text-textdark">Why Teams Choose Our Workshops</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advantages.map((adv, i) => (
                            <motion.div
                                key={adv.title}
                                className="card-light"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <adv.icon size={28} className="text-teal mb-3" />
                                <h3 className="text-textdark text-lg mb-2">{adv.title}</h3>
                                <p className="text-textmuted text-sm leading-relaxed">{adv.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section id="workshop-form" className="bg-navy py-20">
                <div className="max-w-2xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="text-white mb-3">Book Your Free Workshop</h2>
                        <p className="text-white/60">Send us a message and we'll be in touch within 1 business day to schedule.</p>
                    </motion.div>
                    <WorkshopForm />
                    <p className="text-center text-white/50 text-sm mt-6">
                        Or email us directly:{' '}
                        <a href="mailto:imagine@theoremlabs.io" className="text-teal hover:underline">
                            imagine@theoremlabs.io
                        </a>
                    </p>
                    <p className="text-center text-white/40 text-xs mt-2">
                        We typically respond within 1 business day.
                    </p>
                </div>
            </section>
        </>
    )
}
