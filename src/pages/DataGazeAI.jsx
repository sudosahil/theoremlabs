// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
    MessageSquare, Code2, BarChart, Users, RefreshCcw,
    Database, FileText, Briefcase, TrendingUp, Building2,
    GraduationCap, Headphones, Banknote, ArrowRight
} from 'lucide-react'
import CTASection from '../components/CTASection'

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
}

const benefitTiles = [
    { icon: Briefcase, title: 'Business Analysts', body: 'Non-technical professionals who frequently need to query databases for insights but lack deep SQL knowledge. This product allows them to interact with databases directly, boosting efficiency and reducing dependency on data teams.' },
    { icon: TrendingUp, title: 'Sales and Marketing Teams', body: 'Teams that often need to pull reports, analyze customer data, and track performance metrics but aren\'t familiar with SQL can use DataGaze to quickly retrieve data without technical skills.' },
    { icon: Building2, title: 'Small and Medium Businesses', body: 'Companies that may not have dedicated data teams or SQL experts but still need access to their data for decision-making. This tool will help democratize data access across the organization.' },
    { icon: GraduationCap, title: 'Educational Institutions', body: 'Universities and schools offering data science or business programs can use DataGaze to teach students how to interact with databases in a user-friendly way, bridging the gap between non-technical and technical data users.' },
    { icon: Headphones, title: 'Customer Support Teams', body: 'For companies offering data-driven products, support teams can use DataGaze to answer customer inquiries by quickly pulling the necessary information from databases, improving response times and service quality.' },
    { icon: Banknote, title: 'Financial Institutions', body: 'Banks, insurance companies, and other financial institutions where data-driven decisions are crucial but not all employees are skilled in SQL will benefit from this tool.' },
]

export default function DataGazeAI() {
    const handleSeeHowItWorks = (e) => {
        e.preventDefault()
        document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Helmet>
                <title>DataGaze.ai — Natural Language to SQL | TheoremLabs</title>
                <meta name="description" content="DataGaze.ai lets any team member query your databases in plain English — no SQL required. Built for Fintech, sales, marketing, and support teams." />
            </Helmet>

            {/* HERO */}
            <section className="bg-navy py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp}>
                        <span className="bg-teal text-white text-xs font-semibold rounded-full px-3 py-1 inline-block mb-5">
                            Natural Language to SQL
                        </span>
                        <h1 className="text-white mb-6">DataGaze.ai</h1>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            DataGaze is an AI-powered tool designed to make data analysis simple and intuitive by converting natural language queries into SQL, allowing users to extract actionable insights from their data without technical expertise. Whether you're running sales and marketing campaigns or preparing for CXO Meetings, DataGaze enables you to 'gaze' deeply into your data and make smarter decisions — quickly and effectively.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/lets-be-in-touch" className="btn-primary">Request Early Access</Link>
                            <a href="#how-it-works" className="btn-secondary" onClick={handleSeeHowItWorks}>See How It Works</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="text-textdark">How DataGaze Works</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                        {[
                            { icon: MessageSquare, step: '01', title: 'Ask in Plain English', body: 'Type your question naturally — like "Show me last quarter\'s top-performing sales reps by region." No technical knowledge needed.' },
                            { icon: Code2, step: '02', title: 'AI Converts to SQL', body: 'DataGaze instantly translates your plain-English question into an accurate SQL query behind the scenes.' },
                            { icon: BarChart, step: '03', title: 'Get Instant Insights', body: 'Results display as tables, graphs, or downloadable PDFs — ready for your next meeting or CXO presentation.' },
                        ].map((step, i) => (
                            <motion.div
                                key={step.title}
                                className="card-light relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-teal text-3xl font-black opacity-30">{step.step}</span>
                                    <step.icon size={28} className="text-teal" />
                                </div>
                                <h3 className="text-textdark text-xl mb-3">{step.title}</h3>
                                <p className="text-textmuted leading-relaxed">{step.body}</p>
                                {i < 2 && (
                                    <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                                        <ArrowRight size={20} className="text-teal" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEY BENEFITS */}
            <section className="bg-navy py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="text-white">Why Teams Love DataGaze</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: Users, title: 'No SQL Expertise Needed', body: 'Many businesses struggle with the complexity of CRM platforms that require costly add-ons for key features. DataGaze eliminates this by allowing you to pull data from multiple databases effortlessly. Even the most non-technical team members can slice and dice sales, marketing, and performance data, helping them identify what\'s working and where to pivot, all in real-time.' },
                            { icon: RefreshCcw, title: 'End Dependency on Technical Teams', body: 'Imagine a day where you no longer have to rely on your technical staff for routine data requests. With DataGaze, you can generate detailed reports and develop your next strategy independently, freeing up resources and speeding up decision-making.' },
                            { icon: Database, title: 'Multi-Source Connectivity', body: 'Pull data from multiple databases effortlessly, eliminating the need for costly CRM add-ons for key features. Connect your existing data sources without complex integration work.' },
                            { icon: FileText, title: 'Flexible Output Formats', body: "Whether it's extracting data in the form of tables, graphs, or even PDFs, DataGaze ensures that you're always prepared, with insights at your fingertips." },
                        ].map((card, i) => (
                            <motion.div
                                key={card.title}
                                className="card-dark"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <card.icon size={28} className="text-teal mb-4" />
                                <h3 className="text-xl mb-3">{card.title}</h3>
                                <p className="text-white/70 leading-relaxed">{card.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO BENEFITS */}
            <section className="bg-offwhite py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="text-textdark">Who Will Benefit from DataGaze?</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefitTiles.map((tile, i) => (
                            <motion.div
                                key={tile.title}
                                className="card-light"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <tile.icon size={28} className="text-teal mb-3" />
                                <h3 className="text-textdark text-lg mb-2">{tile.title}</h3>
                                <p className="text-textmuted text-sm leading-relaxed">{tile.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                bg="bg-navy"
                heading="Stop waiting on your data team."
                body="DataGaze puts the power of your data directly in the hands of every team member."
                primaryLabel="Request Early Access"
                primaryHref="/lets-be-in-touch"
            />
        </>
    )
}
