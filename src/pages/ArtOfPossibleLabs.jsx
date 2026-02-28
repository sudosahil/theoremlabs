// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
    Code2, BookOpen, Layers, Bot,
    ClipboardList, Users, Code, BarChart2
} from 'lucide-react'
import CTASection from '../components/CTASection'
import { staggerContainer, staggerChild, fadeUp } from '../utils/animations'

const focusAreas = [
    {
        icon: Code2,
        title: 'Open-Source & Hyperscaler Digitization',
        body: 'Unit Economics of Digitization may be changing as feature-sets of incumbent premium automation platforms are now available in open-source models with much higher quality. We help you exploit this shift — identifying which premium tools you can replace, and which open-source stacks best fit your specific workflows and cost targets.',
    },
    {
        icon: BookOpen,
        title: 'RAGs & Private Knowledge Stores',
        body: 'Foundational models without private knowledge of your Enterprise have limited use and value. We build Retrieval-Augmented Generation (RAG) systems that connect LLMs to your proprietary data — enabling AI that actually knows your products, policies, customers, and operational history. This is how you go from demos to real enterprise impact.',
    },
    {
        icon: Layers,
        title: 'Synthetic Data',
        body: "Most companies don't have data suitable for AI Projects. In addition, PII policies further add friction to — and subsequent graduation to — production. Our SyntheticEdge accelerator fast-tracks AI use cases by generating statistically accurate, privacy-safe data that mimics your real-world scenarios without exposing sensitive information.",
    },
    {
        icon: Bot,
        title: 'Agentic AI',
        body: 'Agentic AI will impact how we solve workflow and coordination-heavy business processes. We design and pilot multi-agent systems that can reason, plan, and execute across enterprise workflows — automating steps that require cognitive judgment, not just pattern matching.',
    },
]

const processSteps = [
    { icon: ClipboardList, title: 'Hypothesis Definition', body: 'We help you articulate the business or technology assumption you need to validate.' },
    { icon: Users, title: 'Experiment Design', body: 'We design the minimum viable test, scoped to answer the hypothesis within 2–4 weeks.' },
    { icon: Code, title: 'Build & Run', body: 'Our lab team builds and executes the experiment, capturing data throughout.' },
    { icon: BarChart2, title: 'Read-out & Decision', body: 'We deliver a clear read-out: what we learned, what it means, and our recommendation.' },
]

export default function ArtOfPossibleLabs() {
    return (
        <>
            <Helmet>
                <title>Art of Possible Labs | TheoremLabs</title>
                <meta name="description" content="TheoremLabs' experimentation lab validates AI and technology hypotheses so you can move boldly with evidence, not guesswork." />
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
                        <motion.span variants={staggerChild} className="bg-teal/20 text-teal text-xs font-semibold rounded-full px-3 py-1 inline-block mb-5">
                            Experiments & Pilots
                        </motion.span>
                        <motion.h1 variants={staggerChild} className="text-white mb-6">Art of Possible Labs</motion.h1>
                        <motion.p variants={staggerChild} className="text-white/70 text-lg leading-relaxed mb-8">
                            Our experimentation and pilot lab is designed to validate critical and breakthrough hypotheses — both business and technology. We run structured experiments so you can make bold moves with confidence, not guesswork.
                        </motion.p>
                        <motion.div variants={staggerChild}>
                            <Link to="/setup-design-workshops" className="btn-primary">Set Up a Design Workshop</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* INTRO */}
            <section className="bg-offwhite py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <motion.div {...fadeUp}>
                        <h2 className="text-textdark mb-6">Where Ideas Become Evidence</h2>
                        <p className="text-textmuted text-lg leading-relaxed">
                            Most companies have instincts about what AI can do for them — but lack the infrastructure to test those instincts safely and quickly. Art of Possible Labs bridges that gap. We take your hypotheses, build minimal experiments, run them in controlled environments, and give you evidence-backed go/no-go decisions — before you commit significant budget or engineering time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 4 FOCUS AREAS */}
            <section className="bg-navy py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={staggerChild} className="text-white">What We Experiment On</motion.h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        {focusAreas.map((area) => (
                            <motion.div
                                key={area.title}
                                className="card-dark"
                                variants={staggerChild}
                            >
                                <area.icon size={28} className="text-teal mb-4" />
                                <h3 className="text-xl mb-3">{area.title}</h3>
                                <p className="text-white/70 leading-relaxed">{area.body}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* EXPERIMENT PROCESS */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={staggerChild} className="text-textdark">Our Experiment Process</motion.h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-4 gap-6"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                    >
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                className="card-light text-center"
                                variants={staggerChild}
                            >
                                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <step.icon size={22} className="text-teal" />
                                </div>
                                <div className="text-teal text-xs font-bold uppercase tracking-widest mb-2">Step {i + 1}</div>
                                <h3 className="text-textdark text-lg mb-2">{step.title}</h3>
                                <p className="text-textmuted text-sm leading-relaxed">{step.body}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTASection
                bg="bg-navy"
                heading="What hypothesis are you sitting on?"
                body="Let's design an experiment around it. Start with a free design workshop."
                primaryLabel="Book a Free Workshop"
                primaryHref="/setup-design-workshops"
            />
        </>
    )
}
