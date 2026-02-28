// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, ShieldCheck, BarChart2, CheckCircle2 } from 'lucide-react'
import CTASection from '../components/CTASection'
import { staggerContainer, staggerChild, statReveal, slideInLeft, slideInRight } from '../utils/animations'

const stats = [
    { value: '150+', label: 'Training Hours Saved Per Trainee' },
    { value: '$50K', label: 'Max Onboarding Cost Avoided Per Hire' },
    { value: '12-18mo', label: 'Industry Proficiency Timeline Kirdar.ai Shortens' },
    { value: 'Real-Time', label: 'Feedback on Every Simulation' },
]

const uniqueFeatures = [
    'Customizable scenarios tailored to your industry and company handbook',
    'Data privacy by design — no real customer data required',
    'Actionable analytics dashboard to track trainee progress',
    'Scalable — from onboarding new hires to refining experienced staff',
    'Live feedback loop aligned with your actual company policies and procedures',
    'Key benefits include improved customer satisfaction, increased sales conversions, and reduced employee turnover',
]

export default function KirdarAI() {
    const handleSeeHowItWorks = (e) => {
        e.preventDefault()
        document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Helmet>
                <title>Kirdar.ai — AI Employee Training Simulator | TheoremLabs</title>
                <meta name="description" content="Kirdar.ai reduces training time by 150+ hours per trainee. An AI-powered simulator for customer-facing teams in Fintech and financial services." />
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
                        <motion.span variants={staggerChild} className="bg-gold text-navy text-xs font-semibold rounded-full px-3 py-1 inline-block mb-5">
                            AI Training Simulator
                        </motion.span>
                        <motion.h1 variants={staggerChild} className="text-white mb-6">Kirdar.ai</motion.h1>
                        <motion.p variants={staggerChild} className="text-white/70 text-lg leading-relaxed mb-8">
                            Kirdar.ai is a flexible employee training simulator designed to improve customer-facing roles. It offers risk-free, real-world practice, reducing onboarding time and costs while enhancing employee readiness and identifying skill gaps. The platform prioritizes data privacy and provides actionable analytics to track progress and optimize training.
                        </motion.p>
                        <motion.div variants={staggerChild} className="flex flex-col sm:flex-row gap-4">
                            <Link to="/lets-be-in-touch" className="btn-primary">Request a Demo</Link>
                            <a href="#solution" className="btn-secondary" onClick={handleSeeHowItWorks}>See How It Works</a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* THE PROBLEM */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={staggerChild} className="text-textdark">The Traditional Training Dilemma</motion.h2>
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
                                title: 'Time-Consuming',
                                body: 'Onboarding new employees can take 12-18 months in industries like financial services to become fully proficient. This leads to wasted time and resources.',
                            },
                            {
                                title: 'Costly',
                                body: "The average cost of onboarding a new financial advisor is $10,000 to $50,000, creating significant budget strain. If your employees aren't prepared, it leads to high turnover, thus starting the hiring cycle over.",
                            },
                            {
                                title: 'Inconsistent',
                                body: 'Current training methods often lack real-world customer scenarios, leaving new reps vulnerable and your customers frustrated with not getting the answers they deserve.',
                            },
                        ].map((card) => (
                            <motion.div
                                key={card.title}
                                className="card-light"
                                variants={staggerChild}
                            >
                                <AlertTriangle size={28} className="text-gold mb-4" />
                                <h3 className="text-textdark mb-4">{card.title}</h3>
                                <p className="text-textmuted leading-relaxed">{card.body}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* THE SOLUTION */}
            <section id="solution" className="bg-navy py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={staggerChild} className="text-white">Kirdar.ai: The Solution</motion.h2>
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
                                icon: Clock,
                                title: 'Reduced Training Time',
                                body: 'Kirdar.ai reduces training time by 150+ hours per trainee, getting them ready faster, while reducing the mentoring burden on senior staff.',
                            },
                            {
                                icon: ShieldCheck,
                                title: 'Risk-Free Practice',
                                body: 'Employees can practice handling real-world challenges in a safe environment, building confidence and preparedness, with LIVE feedback to company handbook policies and procedures.',
                            },
                            {
                                icon: BarChart2,
                                title: 'Identifies Skill Gaps',
                                body: 'Kirdar.ai pinpoints areas where employees need additional training, enabling targeted skill development. Kirdar can also provide your training staff with a summary of where most employees struggle, allowing you to adjust your training.',
                            },
                        ].map((card) => (
                            <motion.div
                                key={card.title}
                                className="card-dark"
                                variants={staggerChild}
                            >
                                <card.icon size={28} className="text-teal mb-4" />
                                <h3 className="text-xl mb-3">{card.title}</h3>
                                <p className="text-white/70 leading-relaxed">{card.body}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* WHAT MAKES KIRDAR UNIQUE */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={staggerChild} className="text-textdark">What Makes Kirdar.ai Unique?</motion.h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="space-y-4"
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={staggerContainer}
                            {...slideInLeft}
                        >
                            {uniqueFeatures.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-3 items-start"
                                    variants={staggerChild}
                                >
                                    <CheckCircle2 size={20} className="text-teal mt-0.5 shrink-0" />
                                    <p className="text-textdark leading-relaxed">{feature}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="bg-gradient-to-br from-navy to-blue-900 rounded-2xl p-8 flex items-center justify-center min-h-64"
                            {...slideInRight}
                        >
                            <div className="text-center text-white/60">
                                <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck size={32} className="text-teal" />
                                </div>
                                <p className="text-sm">Product screenshot coming soon</p>
                                <p className="text-xs mt-1 text-white/40">Kirdar.ai dashboard mockup</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
            <section className="bg-teal py-14">
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
                                <div className="stat-number text-3xl md:text-4xl mb-2">{stat.value}</div>
                                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTASection
                bg="bg-navy"
                heading="Ready to transform how your team trains?"
                primaryLabel="Request a Demo"
                primaryHref="/lets-be-in-touch"
            />
        </>
    )
}
