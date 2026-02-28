// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import CTASection from '../components/CTASection'
import { staggerContainer, staggerChild } from '../utils/animations'
import wendiePhoto from '../assets/team/wendie.png'
import shantanuPhoto from '../assets/team/shantanu.png'
import prashantPhoto from '../assets/team/prashant.png'
import willPhoto from '../assets/team/will.png'
import davidPhoto from '../assets/team/david.png'
import jimPhoto from '../assets/team/jim.png'

const teamMembers = [
  {
    initials: 'WH',
    name: 'Wendie Hernandez',
    title: 'Co-Founder & Managing Partner',
    bio: '20+ years of financial service industry experience supporting both front & back-office roles. Holds multiple industry licenses, including FINRA Series-24 enabling supervisory of registered salespersons.',
    linkedin: 'https://www.linkedin.com/in/wendie-hernandez-1ab9b226/',
    photo: wendiePhoto,
  },
  {
    initials: 'SW',
    name: 'Shantanu Wadodkar',
    title: 'Co-Founder & Managing Partner',
    bio: '20+ years in Financial Services Technology. 401K/403B Administrative Services, Payments and Bill Payments. Very recently, he served as SVP at BNY-Mellon, and prior to that Paymentus & TIAA. His roles spanned from building top Dalbar-rated digital experiences for B2B channels as well as focusing scaling data platforms on clouds to support growth and stability objectives.',
    linkedin: 'https://www.linkedin.com/in/shantanu-wadodkar/',
    photo: shantanuPhoto,
  },
  {
    initials: 'PS',
    name: 'Prashant Sarode',
    title: 'Co-Founder & AI Mentor in Residence',
    bio: 'CTO at a Wealth Fintech company. 20+ years in Financial Services, held leadership positions in Product Engineering & Architecture. Inventor of a Patent on White-Labeled Digital Workers system. Track record in turnkey modernization & reimagination of business products & operation models using mature capabilities in Cloud, Automation & AI-ML.',
    linkedin: 'https://www.linkedin.com/in/prashantsarode/',
    photo: prashantPhoto,
  },
  {
    initials: 'WS',
    name: 'Will Storey',
    title: 'Co-Founder & Lab Mentor',
    bio: 'Over 25 years of leadership and entrepreneurial experience with financial institutions. Proven track record of driving growth and innovation. Focused on helping companies maximize process efficiency and return on investment through Web3, blockchain, cloud, AI/ML, and automation.',
    linkedin: 'https://www.linkedin.com/in/will-storey-808a268/',
    photo: willPhoto,
  },
  {
    initials: 'DW',
    name: 'David Ward',
    title: 'Chief Revenue & Growth Officer',
    bio: '25+ years in Corporate Executive Leadership roles managing complex technology projects, overseeing teams of over 150 and handling budgets exceeding $40 million. At LPL Financial, led successful implementation of crucial platforms, enhancing service and sales channels. At Wells Fargo Advisors Technology, aligned & designed technological solutions with business strategies, significantly boosting operational efficiency and client satisfaction.',
    linkedin: 'https://www.linkedin.com/in/david-ward-6a852511/',
    photo: davidPhoto,
  },
  {
    initials: 'JS',
    name: 'Jim Stevenson',
    title: 'Contributor',
    bio: 'Wealth management expert with over 40 years of experience, including 25 years at Wells Fargo Advisors. Expert at blending finance with technology, having led the creation of 1,700+ APIs for a top advisor platform. Known for a client-first approach combining technical know-how with a personal touch to deliver results and manage risks.',
    linkedin: 'https://www.linkedin.com/in/jim-stevenson-0568b32/',
    photo: jimPhoto,
  },
]

function TeamCard({ member }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
      variants={staggerChild}
    >
      {/* Avatar — real photo or initials fallback */}
      {member.photo ? (
        <img
          src={member.photo}
          alt={`${member.name} headshot`}
          className="w-24 h-24 rounded-full object-cover object-top shadow-md"
        />
      ) : (
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md"
          style={{ background: 'linear-gradient(135deg, #00B4D8, #0A3D62)' }}
          aria-label={`${member.name} initials`}
        >
          {member.initials}
        </div>
      )}
      <h3 className="text-navy font-bold text-xl mt-4">{member.name}</h3>
      <p className="text-teal font-medium text-sm mt-1">{member.title}</p>
      <div className="border-t border-gray-100 mt-5 pt-5 w-full">
        <p className="text-textdark text-sm leading-relaxed">{member.bio}</p>
      </div>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on LinkedIn`}
        className="mt-4 text-teal hover:opacity-70 transition"
      >
        <Linkedin size={20} />
      </a>
    </motion.div>
  )
}

export default function OurTeam() {
  return (
    <>
      <Helmet>
        <title>Our Team | TheoremLabs</title>
        <meta name="description" content="Meet the team behind TheoremLabs — 75+ years of combined Fintech, AI, and technology leadership experience." />
      </Helmet>

      {/* HERO */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.h1 variants={staggerChild} className="text-white mb-6">Our Team</motion.h1>
            <motion.p variants={staggerChild} className="text-white/70 text-lg leading-relaxed">
              At Theoremlabs, we combine the expertise of management consulting with hands-on build and experimentation labs. Our focus is on developing innovative products powered by advancements in AI, Data, and Cloud technologies, alongside mature Web 3 innovations. We are passionate about marrying cutting-edge technology with mainstream businesses and empowering traditional tech companies with AI-driven solutions for transformative growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <CTASection
        bg="bg-navy"
        heading="Interested in working with us?"
        body="We are always looking for seasoned professionals and sharp emerging talent to join our growing team."
        primaryLabel="Get in Touch"
        primaryHref="/lets-be-in-touch"
      />
    </>
  )
}
