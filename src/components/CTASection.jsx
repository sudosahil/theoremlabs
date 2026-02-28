// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CTASection({
    bg = 'bg-navy',
    heading,
    body,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
}) {
    return (
        <section className={`${bg} py-20`}>
            <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-white font-bold mb-4">{heading}</h2>
                    {body && (
                        <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                            {body}
                        </p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {primaryLabel && (
                            <Link to={primaryHref} className="btn-primary">
                                {primaryLabel}
                            </Link>
                        )}
                        {secondaryLabel && (
                            <Link to={secondaryHref} className="btn-secondary">
                                {secondaryLabel}
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
