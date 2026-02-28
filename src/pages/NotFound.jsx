// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { fadeUp } from '../utils/animations'

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page Not Found | TheoremLabs</title>
            </Helmet>
            <section className="bg-navy min-h-[70vh] flex items-center justify-center text-center px-6">
                <div>
                    <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-4">404</p>
                    <h1 className="text-white mb-4">Page Not Found</h1>
                    <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="btn-primary">Back to Home</Link>
                </div>
            </section>
        </>
    )
}
