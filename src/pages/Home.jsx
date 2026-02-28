// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
    Lightbulb, FlaskConical, Zap, Shield, MessageSquare, Users,
    Brain, MapPin, GitMerge, Layers, Phone, BookOpen, Search
} from 'lucide-react'
import CTASection from '../components/CTASection'
import { fadeUp, staggerContainer, staggerChild, statReveal } from '../utils/animations'

function NetworkSVG() {
    return (
        <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto" aria-label="Abstract AI network illustration">
            <defs>
                <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.2" />
                </radialGradient>
            </defs>
            {/* Connection lines */}
            {[
                [200, 200, 80, 80], [200, 200, 320, 80], [200, 200, 60, 200],
                [200, 200, 340, 200], [200, 200, 120, 320], [200, 200, 280, 320],
                [80, 80, 320, 80], [320, 80, 340, 200], [340, 200, 280, 320],
                [280, 320, 120, 320], [120, 320, 60, 200], [60, 200, 80, 80],
                [200, 200, 200, 50], [200, 200, 200, 350],
            ].map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#00B4D8" strokeOpacity="0.25" strokeWidth="1.5" />
            ))}
            {/* Nodes */}
            {[
                [200, 200, 18], [80, 80, 10], [320, 80, 10], [60, 200, 10],
                [340, 200, 10], [120, 320, 10], [280, 320, 10], [200, 50, 7],
                [200, 350, 7], [140, 140, 6], [260, 140, 6], [140, 260, 6], [260, 260, 6],
            ].map(([cx, cy, r], i) => (
                <circle key={i} cx={cx} cy={cy} r={r} fill="url(#nodeGrad)" />
            ))}
            {/* Center pulse ring */}
            <circle cx="200" cy="200" r="32" fill="none" stroke="#00B4D8" strokeOpacity="0.15" strokeWidth="1" />
            <circle cx="200" cy="200" r="50" fill="none" stroke="#00B4D8" strokeOpacity="0.1" strokeWidth="1" />
        </svg>
    )
}

const whyUsCards = [
    {
        icon: Shield,
        title: 'Battle-Hardened Experts',
        body: "We are engineers, product specialists, and domain experts first. With over 75 years of collective experience in the corporate world, we've been in your shoes and had a seat at the same tables you are at now. We have executed across various domains and solutions before launching TheoremLabs.io.",
    },
    {
        icon: MessageSquare,
        title: 'Walk the Talk',
        body: 'We speak from experience. Our strategy and tech advisory services are backed by our Build & Experiment Labs, where we continuously learn by doing. Our team is a blend of Gray (seasoned professionals) and Green (fresh talent), ensuring innovative solutions grounded in practical knowledge.',
    },
    {
        icon: Users,
        title: 'Lean and Agile Teams',
        body: 'As a startup, we prioritize frugality by defaulting to small pods of humans and AI (leveraging open-source or free-tier solutions). This approach naturally leads us to design our work and roles to maximize efficiency through AI-infused modern methods and architectures.',
    },
    {
        icon: Brain,
        title: 'Risk-Literate Enthusiasm about AI',
        body: "We view AI as a transformational force, comparable to the printing press, electricity, or the internet. While it's true business and societal impacts are still emerging, we believe the best course of action is to invest in continuous learning and applying AI to existing business workflows.",
    },
    {
        icon: MapPin,
        title: 'Prime Location',
        body: 'Based in Charlotte, NC — a financial and insurance hub with a vibrant startup scene and a steady influx of seasoned and new talent. This location allows us to attract professionals seeking a balanced work and life environment.',
    },
]

const acceleratorTiles = [
    { icon: GitMerge, name: 'ReconcileAI', desc: 'AI-powered financial reconciliation' },
    { icon: Layers, name: 'SyntheticEdge', desc: 'Privacy-safe synthetic data generation' },
    { icon: Phone, name: 'PromptLine', desc: 'Conversational AI for customer operations' },
    { icon: BookOpen, name: 'KnowledgePulse', desc: 'Turn internal data into living knowledge' },
    { icon: Search, name: 'InsightBridge', desc: 'Legacy system knowledge extraction' },
]

const stats = [
    { value: '75+', label: 'Years of Combined Experience' },
    { value: '5', label: 'AI Accelerators Built' },
    { value: '14', label: 'Broker-Dealers Served' },
    { value: '3', label: 'Flagship AI Products' },
]

export default function Home() {
    return (
        <>
            <Helmet>
                <title>TheoremLabs | AI-First Fintech Consulting & Products</title>
                <meta name="description" content="TheoremLabs is a hybrid management consulting and AI build lab for Fintech. We build products, run experiments, and deliver strategy for the AI era." />
            </Helmet>

            {/* HERO */}
            <section className="bg-navy py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                        <motion.div
                            className="md:col-span-3"
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={staggerContainer}
                        >
                            <motion.span
                                variants={staggerChild}
                                className="bg-teal/20 text-teal rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest inline-block mb-6 badge-cursor"
                            >
                                AI-First Fintech Innovation
                            </motion.span>
                            <motion.h1 variants={staggerChild} className="text-white mb-5">The new software era</motion.h1>
                            <motion.p variants={staggerChild} className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
                                Theoremlabs is a hybrid of management consulting, build & experimentation labs for Fintech products that apply advances in AI, Data, Cloud and mature Web 3 technologies.
                            </motion.p>
                            <motion.div variants={staggerChild} className="flex flex-col sm:flex-row gap-4">
                                <Link to="/art-of-possible-labs" className="btn-primary">
                                    Explore What's Possible
                                </Link>
                                <Link to="/our-team" className="btn-secondary">
                                    Meet Our Team
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="md:col-span-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <NetworkSVG />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.span variants={staggerChild} className="section-label">WHAT WE DO</motion.span>
                        <motion.h2 variants={staggerChild} className="text-textdark mb-4">
                            Theoremlabs blends management consulting with build & experimentation labs, offering tailored solutions for Fintech products.
                        </motion.h2>
                        <motion.p variants={staggerChild} className="text-textmuted max-w-3xl mx-auto">
                            We leverage AI, Data, Cloud, and Web 3 technologies to deliver innovative, scalable, and future-ready financial solutions, bridging the gap between vision and execution.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        {[
                            {
                                icon: Lightbulb,
                                title: 'Advisory & Consulting',
                                body: 'Strategy bets adjusted with risk literacy derived from continuous market research and experimentation.',
                                href: '/advisory-consulting',
                            },
                            {
                                icon: FlaskConical,
                                title: 'Art of Possible Labs',
                                body: 'Experiments & Pilots to validate critical/breakthrough hypothesis (business & technology).',
                                href: '/art-of-possible-labs',
                            },
                            {
                                icon: Zap,
                                title: 'Accelerators',
                                body: 'AI Accelerators like Theoremlabs drive rapid experimentation and innovation, enabling businesses to validate ideas quickly and gain a competitive edge.',
                                href: '/accelerators',
                            },
                        ].map((card) => (
                            <motion.div
                                key={card.title}
                                className="card-light flex flex-col"
                                variants={staggerChild}
                            >
                                <card.icon size={32} className="text-teal mb-4" />
                                <h3 className="text-textdark mb-3">{card.title}</h3>
                                <p className="text-textmuted flex-1">{card.body}</p>
                                <Link to={card.href} className="text-teal font-medium mt-4 hover:underline">
                                    Learn more →
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* WHY US */}
            <section className="bg-navy py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-14"
                    >
                        <motion.span variants={staggerChild} className="section-label">WHY US</motion.span>
                        <motion.h2 variants={staggerChild} className="text-white">Expertise, Innovation and Efficiency in the Age of AI</motion.h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        {whyUsCards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                className={`card-dark ${i === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto' : ''}`}
                                variants={staggerChild}
                            >
                                <card.icon size={28} className="text-teal mb-4" />
                                <h3 className="text-white text-xl mb-3">{card.title}</h3>
                                <p className="text-white/70 leading-relaxed">{card.body}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* PRODUCTS SHOWCASE */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.span variants={staggerChild} className="section-label">OUR PRODUCTS</motion.span>
                        <motion.h2 variants={staggerChild} className="text-textdark">Built for the Future of Fintech</motion.h2>
                    </motion.div>

                    {/* Featured Products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Kirdar.ai */}
                        <motion.div
                            className="card-light border border-gray-100"
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="bg-gold text-navy text-xs font-semibold rounded-full px-3 py-1 inline-block mb-4">
                                AI Training Simulator
                            </span>
                            <h3 className="text-textdark text-2xl mb-3">Kirdar.ai</h3>
                            <p className="text-textmuted mb-5 leading-relaxed">
                                Kirdar.ai is a dynamic employee training simulator that transforms how customer-facing teams learn and grow. It offers real-world, risk-free practice to accelerate onboarding, boost readiness, and identify skill gaps. With data-driven insights and customizable scenarios, Kirdar.ai enhances customer satisfaction, improves sales conversions, and reduces turnover — redefining training for the modern workforce.
                            </p>
                            <div className="flex gap-4 mb-6">
                                <span className="bg-teal/10 text-teal text-xs font-medium rounded-full px-3 py-1">150+ hours saved per trainee</span>
                                <span className="bg-teal/10 text-teal text-xs font-medium rounded-full px-3 py-1">Real-time skill gap analysis</span>
                            </div>
                            <Link to="/kirdar-ai" className="btn-primary">Learn More</Link>
                        </motion.div>

                        {/* DataGaze.ai */}
                        <motion.div
                            className="card-light border border-gray-100"
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="bg-teal text-white text-xs font-semibold rounded-full px-3 py-1 inline-block mb-4">
                                Natural Language to SQL
                            </span>
                            <h3 className="text-textdark text-2xl mb-3">DataGaze.ai</h3>
                            <p className="text-textmuted mb-5 leading-relaxed">
                                DataGaze is an AI-powered tool designed to make data analysis simple and intuitive by converting natural language queries into SQL, allowing users to extract actionable insights from their data without technical expertise. Whether you're running sales and marketing campaigns or preparing for CXO meetings, DataGaze enables you to 'gaze' deeply into your data and make smarter decisions — quickly and effectively.
                            </p>
                            <div className="flex gap-4 mb-6">
                                <span className="bg-teal/10 text-teal text-xs font-medium rounded-full px-3 py-1">No SQL required</span>
                                <span className="bg-teal/10 text-teal text-xs font-medium rounded-full px-3 py-1">Multi-database connectivity</span>
                            </div>
                            <Link to="/datagaze-ai" className="btn-primary">Learn More</Link>
                        </motion.div>
                    </div>

                    {/* Accelerator Tiles */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-5 gap-4"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        {acceleratorTiles.map((tile) => (
                            <motion.div key={tile.name} variants={staggerChild}>
                                <Link
                                    to="/accelerators"
                                    className="card-light flex flex-col items-center text-center gap-2 p-4 hover:border-teal border border-transparent"
                                >
                                    <tile.icon size={24} className="text-teal" />
                                    <span className="font-semibold text-textdark text-sm">{tile.name}</span>
                                    <span className="text-textmuted text-xs leading-snug">{tile.desc}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* STATS BAR */}
            <section className="bg-teal py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {stats.map((stat) => (
                            <motion.div key={stat.label} variants={statReveal}>
                                <div className="stat-number text-4xl md:text-5xl mb-2">{stat.value}</div>
                                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FINAL CTA */}
            <CTASection
                bg="bg-navy"
                heading="Ready to explore what AI can do for your Fintech?"
                body="Let's start with a no-cost design workshop and map out your path forward."
                primaryLabel="Book a Free Workshop"
                primaryHref="/setup-design-workshops"
                secondaryLabel="Get in Touch"
                secondaryHref="/lets-be-in-touch"
            />
        </>
    )
}
