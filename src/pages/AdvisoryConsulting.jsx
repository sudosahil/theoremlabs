// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
    Target, Building2, FlaskConical, Map, GraduationCap, Brain,
    MessageSquare, Search, FileText, Rocket
} from 'lucide-react'
import CTASection from '../components/CTASection'

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
}

const services = [
    {
        icon: Target,
        title: 'Strategy & Business Case',
        body: 'We work closely with CIOs and executives to develop robust strategies and business cases for automation, modernization, and AI-ML initiatives. Our expertise lies in aligning technology investments with business goals, ensuring a clear ROI, and mitigating risks.',
        bg: 'bg-white',
    },
    {
        icon: Building2,
        title: 'CoEs and Governance Frameworks',
        body: 'Establishing Centers of Excellence (CoEs) is critical for successful digital transformation. We guide organizations in setting up CoEs that foster collaboration, knowledge sharing, and best practices. Additionally, we help define governance frameworks to ensure effective decision-making and accountability.',
        bg: 'bg-offwhite',
    },
    {
        icon: FlaskConical,
        title: 'Experimentation and Validation',
        body: "Our labs conduct experiments and pilots to validate critical hypotheses. Whether it's testing a new algorithm, exploring DeFi applications, or optimizing core processes, we provide evidence-based insights for informed decision-making.",
        bg: 'bg-white',
    },
    {
        icon: Map,
        title: 'Product Discovery and Roadmap Development',
        body: 'Our team assists in product discovery by identifying gaps, analyzing market trends, and defining product roadmaps. We focus on creating customer-centric solutions that address real-world challenges and capitalize on emerging opportunities.',
        bg: 'bg-offwhite',
    },
    {
        icon: GraduationCap,
        title: 'Talent Development',
        body: 'Building and training high-performing teams is essential. We help organizations attract, retain, and develop top talent for AI and cloud initiatives. Our mentorship programs ensure that teams stay ahead of the curve.',
        bg: 'bg-white',
    },
    {
        icon: Brain,
        title: 'AI-Driven Innovation',
        body: 'We apply the latest advances in AI to invent new products and service models. Our AI solutions are aimed at enhancing customer experiences while simultaneously increasing operational efficiency and driving revenue growth.',
        bg: 'bg-offwhite',
    },
]

const engageSteps = [
    { icon: MessageSquare, title: 'Discovery Call', body: 'We learn about your challenges, goals, and current state.' },
    { icon: Search, title: 'Research & Assessment', body: 'We dig into your market, tech stack, and competitive landscape.' },
    { icon: FileText, title: 'Strategy Delivery', body: 'We deliver a clear, actionable roadmap with ROI projections.' },
    { icon: Rocket, title: 'Execution Support', body: 'We stay engaged to support implementation and course corrections.' },
]

export default function AdvisoryConsulting() {
    return (
        <>
            <Helmet>
                <title>Advisory & Consulting | TheoremLabs</title>
                <meta name="description" content="AI strategy, Centers of Excellence, product roadmaps, and talent development for Fintech companies navigating the AI era." />
            </Helmet>

            {/* HERO */}
            <section className="bg-navy py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp}>
                        <h1 className="text-white mb-6">Advisory & Consulting</h1>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            We work closely with CIOs and executives to develop robust strategies and business cases for automation, modernization, and AI-ML initiatives. Our expertise lies in aligning technology investments with business goals, ensuring a clear ROI, and mitigating risks.
                        </p>
                        <Link to="/lets-be-in-touch" className="btn-primary">Talk to Our Experts</Link>
                    </motion.div>
                </div>
            </section>

            {/* 6 SERVICES */}
            {services.map((service, i) => (
                <section key={service.title} className={`${service.bg} py-16`}>
                    <div className="max-w-7xl mx-auto px-6 md:px-8">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="md:col-span-1 flex items-center justify-center md:justify-start">
                                <div className="w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center">
                                    <service.icon size={32} className="text-teal" />
                                </div>
                            </div>
                            <div className="md:col-span-4">
                                <h3 className="text-textdark text-2xl mb-3">{service.title}</h3>
                                <p className="text-textmuted leading-relaxed">{service.body}</p>
                            </div>
                            <div className="md:col-span-1 flex md:justify-end">
                                <Link to="/lets-be-in-touch" className="btn-primary whitespace-nowrap text-sm py-2.5 px-4">
                                    Explore This Service
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* HOW WE ENGAGE */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="text-textdark">How We Engage</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {engageSteps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                className="relative card-light text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <step.icon size={22} className="text-teal" />
                                </div>
                                <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">Step {i + 1}</div>
                                <h3 className="text-textdark text-lg mb-2">{step.title}</h3>
                                <p className="text-textmuted text-sm leading-relaxed">{step.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                bg="bg-navy"
                heading="Ready to build your AI strategy?"
                primaryLabel="Book a Consultation"
                primaryHref="/lets-be-in-touch"
            />
        </>
    )
}
