// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react'

const LOGO_URL = 'https://theoremlabs.io/wp-content/uploads/2025/01/Theoremlabs-logo-1.png'

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Our Team', href: '/our-team' },
    { label: 'Advisory & Consulting', href: '/advisory-consulting' },
    { label: 'Art of Possible Labs', href: '/art-of-possible-labs' },
    { label: 'Partnerships', href: '/partnerships' },
]

const productLinks = [
    { label: 'Kirdar.ai', href: '/kirdar-ai' },
    { label: 'DataGaze.ai', href: '/datagaze-ai' },
    { label: 'Accelerators', href: '/accelerators' },
    { label: 'Setup Design Workshops', href: '/setup-design-workshops' },
    { label: 'Become a Partner', href: '/become-a-partner' },
    { label: "Let's Be in Touch", href: '/lets-be-in-touch' },
]

export default function Footer() {
    return (
        <footer className="bg-navy text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1 — Brand */}
                    <div>
                        <div className="bg-white rounded-lg px-3 py-2 inline-flex mb-5">
                            <img
                                src={LOGO_URL}
                                alt="TheoremLabs"
                                style={{ height: '32px' }}
                                className="object-contain block"
                            />
                        </div>
                        <p className="text-white/70 text-sm mb-5 leading-relaxed">
                            Where Fintech Meets the Future of AI
                        </p>
                        <div className="text-white/60 text-sm space-y-1 mb-5">
                            <p className="font-medium text-white/80">Theoremlabs Partners LLC</p>
                            <p>101 S. Tryon St</p>
                            <p>STE 2700</p>
                            <p>Charlotte NC 28280</p>
                        </div>
                        <a
                            href="mailto:imagine@theoremlabs.io"
                            className="text-teal text-sm hover:underline flex items-center gap-2 mb-5"
                        >
                            <Mail size={14} />
                            imagine@theoremlabs.io
                        </a>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                aria-label="TheoremLabs on LinkedIn"
                                className="text-white/60 hover:text-teal transition"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                aria-label="TheoremLabs on Twitter"
                                className="text-white/60 hover:text-teal transition"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div>
                        <h3 className="section-label mb-4">QUICK LINKS</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-white/70 text-sm hover:text-teal transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Products & Engage */}
                    <div>
                        <h3 className="section-label mb-4">PRODUCTS & ENGAGE</h3>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-white/70 text-sm hover:text-teal transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-12 pt-6 text-center">
                    <p className="text-textmuted text-sm">
                        Copyrights © TheoremLabs 2025. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
