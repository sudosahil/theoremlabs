// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const LOGO_URL = 'https://theoremlabs.io/wp-content/uploads/2025/01/Theoremlabs-logo-1.png'

const navItems = [
    { label: 'Home', href: '/' },
    {
        label: 'About Us',
        dropdown: [
            { label: 'Our Team', href: '/our-team' },
            { label: 'Partnerships', href: '/partnerships' },
        ],
    },
    {
        label: 'Products',
        dropdown: [
            { label: 'Kirdar.ai', href: '/kirdar-ai' },
            { label: 'DataGaze.ai', href: '/datagaze-ai' },
            { label: 'Accelerators', href: '/accelerators' },
        ],
    },
    { label: 'Advisory & Consulting', href: '/advisory-consulting' },
    { label: 'Art of Possible Labs', href: '/art-of-possible-labs' },
    {
        label: 'Engage',
        dropdown: [
            { label: 'Setup Design Workshops', href: '/setup-design-workshops' },
            { label: 'Become a Partner', href: '/become-a-partner' },
            { label: "Let's Be in Touch", href: '/lets-be-in-touch' },
        ],
    },
]

function DropdownMenu({ items }) {
    return (
        <div className="absolute top-full left-0 mt-1 w-56 bg-navy border border-white/10 rounded-lg shadow-xl z-50 py-2">
            {items.map((item) => (
                <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2.5 text-sm text-white hover:text-teal hover:bg-white/5 transition"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    )
}

function NavItem({ item, location }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const isActive = item.href === location.pathname

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    if (item.dropdown) {
        const dropdownActive = item.dropdown.some((d) => d.href === location.pathname)
        return (
            <div
                ref={ref}
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <button
                    className={`flex items-center gap-1 text-sm font-medium transition ${dropdownActive ? 'text-teal' : 'text-white hover:text-teal'
                        }`}
                    aria-expanded={open}
                    aria-haspopup="true"
                    onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
                >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && <DropdownMenu items={item.dropdown} />}
            </div>
        )
    }

    return (
        <Link
            to={item.href}
            className={`text-sm font-medium transition pb-0.5 ${isActive
                    ? 'text-teal border-b-2 border-teal'
                    : 'text-white hover:text-teal'
                }`}
        >
            {item.label}
        </Link>
    )
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileExpanded, setMobileExpanded] = useState(null)
    const location = useLocation()

    useEffect(() => {
        setMobileOpen(false)
    }, [location.pathname])

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-navy"
            style={{ height: '72px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" aria-label="TheoremLabs Home">
                    <img
                        src={LOGO_URL}
                        alt="TheoremLabs Logo"
                        style={{ height: '40px' }}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navItems.map((item) => (
                        <NavItem key={item.label} item={item} location={location} />
                    ))}
                    <Link to="/lets-be-in-touch" className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
                        Book a Consultation
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open navigation menu"
                    tabIndex={0}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="flex-1 bg-black/50" onClick={() => setMobileOpen(false)} />
                    <div className="w-80 max-w-full bg-navy h-full overflow-y-auto shadow-2xl">
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <img src={LOGO_URL} alt="TheoremLabs Logo" style={{ height: '36px' }} />
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="text-white p-2"
                                aria-label="Close navigation menu"
                                tabIndex={0}
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-6 flex flex-col gap-2">
                            {navItems.map((item) => {
                                if (item.dropdown) {
                                    const isExpanded = mobileExpanded === item.label
                                    return (
                                        <div key={item.label}>
                                            <button
                                                className="w-full flex items-center justify-between text-white font-medium py-3 text-left"
                                                onClick={() =>
                                                    setMobileExpanded(isExpanded ? null : item.label)
                                                }
                                                tabIndex={0}
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {isExpanded && (
                                                <div className="pl-4 flex flex-col gap-1">
                                                    {item.dropdown.map((d) => (
                                                        <Link
                                                            key={d.href}
                                                            to={d.href}
                                                            className="text-white/70 hover:text-teal py-2 text-sm transition"
                                                        >
                                                            {d.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )
                                }
                                return (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        className={`py-3 font-medium transition ${location.pathname === item.href ? 'text-teal' : 'text-white hover:text-teal'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                            <div className="mt-4">
                                <Link to="/lets-be-in-touch" className="btn-primary w-full justify-center">
                                    Book a Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
