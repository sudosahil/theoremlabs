// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Search, Layers, Phone, BookOpen, GitMerge, CheckCircle2 } from 'lucide-react'
import CTASection from '../components/CTASection'

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
}

const accelerators = [
    {
        id: 'insightbridge',
        bg: 'bg-white',
        badgeColor: 'bg-gold text-navy',
        badge: 'M&A / Legacy Systems',
        icon: Search,
        title: 'InsightBridge',
        body: 'InsightBridge is a comprehensive accelerator that combines a proprietary business knowledge forensics methodology with AI-driven tools to unlock deep insights into legacy systems. This product and methodology blend is specifically designed to address the complexities of system knowledge extraction and documentation. Tailored for businesses navigating mergers and acquisitions, InsightBridge systematically analyzes, extracts, and documents workflows across legacy commission systems. It has been successfully deployed to streamline integration processes for 14 broker-dealers brought together through M&A. The solution enhances understanding of intricate legacy workflows, identifying critical integration points and reducing operational inefficiencies. By leveraging AI, InsightBridge delivers automated system knowledge extraction, enabling faster, more accurate documentation. This accelerator not only facilitates smoother transitions during system integration but also provides stakeholders with actionable insights, reducing risk and optimizing resource allocation. InsightBridge transforms legacy system challenges into opportunities for streamlined operations and strategic growth.',
        features: [
            'Automated system knowledge extraction and documentation',
            'AI-driven analysis of legacy commission system workflows',
            'Designed specifically for M&A system integrations',
            'Successfully deployed across 14 broker-dealer integrations',
            'Reduces operational risk and optimizes resource allocation',
        ],
    },
    {
        id: 'syntheticedge',
        bg: 'bg-offwhite',
        badgeColor: 'bg-teal text-white',
        badge: 'Data Privacy / AI Development',
        icon: Layers,
        title: 'SyntheticEdge',
        body: 'SyntheticEdge is a cutting-edge accelerator designed to solve the critical challenge of data unavailability and PII constraints in AI projects. This tool generates high-quality synthetic data that mimics real-world scenarios while ensuring compliance with data privacy regulations. By eliminating reliance on actual sensitive data, SyntheticEdge enables organizations to fast-track AI use case development from testing to production. With its robust simulation capabilities, SyntheticEdge creates production-like datasets that are statistically and contextually accurate, offering a seamless alternative to traditional data scrambling. This ensures AI models are trained and validated with realistic yet non-identifiable data. The platform is designed to empower businesses to simulate complex test cases and edge scenarios effortlessly, accelerating the development and deployment cycle. Whether it\'s for predictive analytics, machine learning, or large-scale AI systems, SyntheticEdge delivers scalable, secure, and high-quality synthetic data solutions tailored to meet diverse industry needs.',
        features: [
            'Generates statistically and contextually accurate production-like datasets',
            'Full PII compliance — no real sensitive data required at any stage',
            'Seamless alternative to traditional data scrambling methods',
            'Enables simulation of complex test cases and edge scenarios',
            'Supports predictive analytics, ML, and large-scale AI system development',
        ],
    },
    {
        id: 'promptline',
        bg: 'bg-white',
        badgeColor: 'bg-gold text-navy',
        badge: 'Conversational AI',
        icon: Phone,
        title: 'PromptLine',
        body: 'PromptLine is an intelligent conversational AI accelerator designed to revolutionize customer interactions and streamline business operations over the phone. Built for businesses across various industries, PromptLine provides a simple yet powerful solution for managing everyday customer needs. With its advanced AI capabilities, PromptLine can answer frequently asked questions (FAQs), help schedule appointments, report issues, track inquiries, and provide updates — all through intuitive voice or text-based interactions. This enables businesses to offer prompt and accurate responses, improving customer satisfaction while reducing operational overhead. PromptLine seamlessly integrates with existing workflows, ensuring businesses can efficiently manage operations without requiring extensive training or technical expertise. It empowers teams to focus on complex tasks while leaving routine customer interactions to the AI. Whether it\'s handling high call volumes or ensuring 24/7 availability, PromptLine provides a reliable, user-friendly, and scalable conversational AI solution, driving operational efficiency and enhancing customer experiences.',
        features: [
            'Answers FAQs, schedules appointments, and tracks inquiries via voice or text',
            'Seamlessly integrates with existing business workflows',
            '24/7 availability — handles high call volumes without additional headcount',
            'Reduces operational overhead while improving customer satisfaction scores',
            'No extensive technical expertise required for deployment',
        ],
    },
    {
        id: 'knowledgepulse',
        bg: 'bg-offwhite',
        badgeColor: 'bg-teal text-white',
        badge: 'Knowledge Management',
        icon: BookOpen,
        title: 'KnowledgePulse',
        body: 'KnowledgePulse is an advanced AI-driven accelerator designed to transform your internal data into a dynamic, living knowledge resource. Acting as a smart guide, it powers FAQs, product documentation, and support materials, enabling quick access to critical information. Whether you need to generate help content on the fly or deploy a responsive chatbot, KnowledgePulse bridges the gap between data and actionable insights. It seamlessly connects your teams, customers, and business processes to the knowledge they need — faster and more efficiently. By converting static information into an interactive knowledge ecosystem, KnowledgePulse helps businesses learn, adapt, and respond in real time. Empower your organization to move beyond traditional documentation and embrace a knowledge-driven future.',
        features: [
            'Converts static internal documentation into an interactive knowledge ecosystem',
            'Powers FAQs, product docs, and support chatbots from your own data',
            'Connects teams, customers, and business processes to knowledge in real time',
            'Generates help content on demand — no manual authoring required',
            'Dramatically reduces time spent searching for internal information',
        ],
    },
    {
        id: 'reconcileai',
        bg: 'bg-white',
        badgeColor: 'bg-gold text-navy',
        badge: 'Financial Operations',
        icon: GitMerge,
        title: 'ReconcileAI',
        body: 'ReconcileAI is an advanced AI-powered reconciliation accelerator designed to transform traditional reconciliation processes with unparalleled speed, accuracy, and efficiency. Developed by Theoremlabs Innovation Labs, ReconcileAI leverages the power of Generative AI (Gen AI) to streamline data matching, automate exception handling, and reduce manual effort across industries.',
        features: [
            'Automated Data Ingestion & Matching: Seamlessly integrates with multiple data sources to ingest and match large datasets with high precision, eliminating the need for manual data mapping.',
            'AI-Driven Anomaly Detection: Identifies discrepancies and outliers in real-time, providing actionable insights and root-cause analysis for faster issue resolution.',
            'Intelligent Exception Management: Predicts, categorizes, and resolves exceptions autonomously using historical data, escalating only complex cases for human review.',
            'NLP-Powered Reporting: Generates comprehensive reconciliation reports, summarizes exceptions, and offers contextual explanations to support audits and decision-making.',
            'Continuous Learning: ReconcileAI continuously improves with each cycle, adapting to new data patterns and user feedback for enhanced performance over time.',
        ],
        tagline: 'Reconcile Smarter. Operate Faster. Innovate with ReconcileAI.',
    },
]

export default function Accelerators() {
    return (
        <>
            <Helmet>
                <title>AI Accelerators | TheoremLabs</title>
                <meta name="description" content="TheoremLabs builds AI accelerators that fast-track use case development — from ReconcileAI to SyntheticEdge, PromptLine, KnowledgePulse, and InsightBridge." />
            </Helmet>

            {/* HERO */}
            <section className="bg-navy py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <motion.div {...fadeUp}>
                        <span className="bg-gold text-navy text-xs font-semibold rounded-full px-3 py-1 inline-block mb-5">
                            Accelerator Factory
                        </span>
                        <h1 className="text-white mb-6">Accelerators</h1>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            AI Accelerators are essential for rapidly testing and refining ideas, enabling quick validation of concepts before full-scale implementation. They help businesses re-evaluate strategies, affirm the feasibility of AI-driven solutions, and identify potential roadblocks early. Theoremlabs is an accelerator factory, designed to enable fast development and continuous innovation. By streamlining experimentation, accelerators reduce time-to-market, driving faster growth and giving your business a competitive edge.
                        </p>
                        <Link to="/lets-be-in-touch" className="btn-primary">Talk to Us About Your Use Case</Link>
                    </motion.div>
                </div>
            </section>

            {/* ACCELERATOR SECTIONS */}
            {accelerators.map((acc, i) => (
                <section key={acc.id} className={`${acc.bg} py-20`}>
                    <div className="max-w-7xl mx-auto px-6 md:px-8">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {/* Icon + Badge */}
                            <div className="md:col-span-1 flex flex-col items-center md:items-start gap-4">
                                <acc.icon size={48} className="text-teal" />
                                <span className={`${acc.badgeColor} text-xs font-semibold rounded-full px-3 py-1`}>
                                    {acc.badge}
                                </span>
                            </div>
                            {/* Content */}
                            <div className="md:col-span-4">
                                <h2 className="text-textdark mb-4">{acc.title}</h2>
                                {acc.tagline && (
                                    <p className="text-teal font-semibold text-lg mb-4 italic">{acc.tagline}</p>
                                )}
                                <p className="text-textmuted leading-relaxed mb-6">{acc.body}</p>
                                <div className="space-y-3 mb-8">
                                    {acc.features.map((feat, fi) => (
                                        <div key={fi} className="flex gap-3 items-start">
                                            <CheckCircle2 size={18} className="text-teal mt-0.5 shrink-0" />
                                            <p className="text-textdark text-sm leading-relaxed">{feat}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/lets-be-in-touch" className="btn-primary">Connect With Us</Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            <CTASection
                bg="bg-navy"
                heading="Don't see exactly what you need?"
                body="Our accelerator factory is built for custom use cases. Let's talk about building one specifically for you."
                primaryLabel="Start a Conversation"
                primaryHref="/lets-be-in-touch"
            />
        </>
    )
}
