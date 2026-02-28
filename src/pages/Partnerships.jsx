// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
    Monitor, Database, Rocket, Network, UserCheck,
    GraduationCap, Server, Building2, CheckCircle2
} from 'lucide-react'
import { staggerContainer, staggerChild } from '../utils/animations'

const partnerTypes = [
    { icon: Monitor, title: 'Technology Providers', body: 'Companies offering cutting-edge tools, platforms, or frameworks that complement our AI-first approach.' },
    { icon: Database, title: 'Data Providers', body: 'Organizations with rich datasets looking to monetize or collaborate on innovative AI-driven applications.' },
    { icon: Rocket, title: 'Startups and Innovators', body: 'Emerging ventures in AI, data, or cloud looking to co-create disruptive solutions with a trusted partner.' },
    { icon: Network, title: 'System Integrators and Consultants', body: 'Firms aiming to extend their service offerings with robust AI solutions powered by TheoremLabs.' },
    { icon: UserCheck, title: 'Industry Experts and Advisors', body: 'Domain specialists who can contribute expertise to shape AI applications tailored for niche markets or specific use cases.' },
    { icon: GraduationCap, title: 'Academic and Research Institutions', body: 'Universities and labs interested in advancing AI research or piloting experimental technologies.' },
    { icon: Server, title: 'Vendors and Service Providers', body: 'Providers of cloud infrastructure, data processing, or enterprise solutions who want to partner on scalable AI deployments.' },
    { icon: Building2, title: 'Corporate Enterprises', body: 'Large organizations seeking AI-driven innovation for transformation projects, process optimization, or customer experiences.' },
]

const whyPartner = [
    'Access to Advanced AI Solutions — Leverage our expertise in AI, data modernization, and cloud technologies to build and deploy state-of-the-art solutions tailored to your needs.',
    'Customized Innovation Frameworks — Collaborate with us to co-create new products, enhance existing platforms, or explore uncharted opportunities in AI.',
    'Scalable Cloud Infrastructure — Tap into our experience with leading cloud platforms like AWS to scale solutions efficiently and cost-effectively.',
    'Generative AI Expertise — Partner with a leader in Generative AI applications to build systems that redefine customer experiences, drive automation, and enhance decision-making.',
    'Cross-Industry Experience — Benefit from our work across FinTech, healthcare, retail, and other industries, ensuring solutions that meet real-world demands.',
    'Thought Leadership and Strategy — Gain insights from our AI thought leaders to develop a roadmap for innovation and achieve competitive differentiation.',
    'Ethical and Responsible AI Practices — Align with our commitment to transparency, fairness, and compliance in every AI solution we build.',
]

export default function Partnerships() {
    return (
        <>
            <Helmet>
                <title>Partner with TheoremLabs | AI Innovation Partnerships</title>
                <meta name="description" content="Explore partnership opportunities with TheoremLabs — from technology providers to innovation collaborators." />
            </Helmet>

            {/* HERO */}
            <section className="bg-navy py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={staggerContainer}
                    >
                        <motion.h1 variants={staggerChild} className="text-white mb-6">Partner with TheoremLabs: Driving AI Innovation Together</motion.h1>
                        <motion.p variants={staggerChild} className="text-white/70 text-lg leading-relaxed">
                            At TheoremLabs, we are committed to pushing the boundaries of what's possible with AI. As an AI-first company, we specialize in building transformative solutions that empower businesses across industries. Our mission is to create meaningful partnerships that drive innovation, deliver measurable impact, and unlock new opportunities in the rapidly evolving technology landscape.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* WHO CAN PARTNER */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={staggerChild} className="text-textdark">Who Can Partner with Us?</motion.h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        {partnerTypes.map((pt) => (
                            <motion.div
                                key={pt.title}
                                className="card-light"
                                variants={staggerChild}
                            >
                                <pt.icon size={28} className="text-teal mb-3" />
                                <h3 className="text-textdark text-lg mb-2">{pt.title}</h3>
                                <p className="text-textmuted text-sm leading-relaxed">{pt.body}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* WHY PARTNER */}
            <section className="bg-navy py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-10"
                    >
                        <motion.h2 variants={staggerChild} className="text-white mb-3">Why Partner with TheoremLabs?</motion.h2>
                        <motion.p variants={staggerChild} className="text-white/60">At TheoremLabs, our partnerships are built on trust, collaboration, and shared success.</motion.p>
                    </motion.div>
                    <motion.div
                        className="space-y-5"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={staggerContainer}
                    >
                        {whyPartner.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-4 items-start"
                                variants={staggerChild}
                            >
                                <CheckCircle2 size={20} className="text-teal mt-1 shrink-0" />
                                <p className="text-white/80 leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="bg-teal py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={staggerChild} className="text-white mb-5">Let's Build the Future Together</motion.h2>
                        <motion.p variants={staggerChild} className="text-white/80 text-lg leading-relaxed mb-8">
                            Whether you're a technology innovator, an enterprise leader, or an academic pioneer, TheoremLabs is your ideal partner for AI-driven growth. Together, we can harness the power of artificial intelligence to solve complex challenges, uncover new opportunities, and create a lasting impact.
                        </motion.p>
                        <motion.div variants={staggerChild}>
                            <Link
                                to="/become-a-partner"
                                className="bg-white text-teal rounded-lg px-7 py-3.5 font-semibold hover:bg-white/90 transition inline-flex items-center gap-2 text-sm tracking-wide"
                            >
                                Become a Partner
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
