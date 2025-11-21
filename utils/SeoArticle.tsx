import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className="bg-black/40 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-purple-500/30 prose prose-invert max-w-5xl mx-auto lg:prose-lg shadow-[0_0_60px_rgba(168,85,247,0.15)]">
            {/* JSON-LD for Article SEO */}
            <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "@id": "https://doodax.com/#article",
              "headline": "Complete Guide to Local Business Permits and Zoning Compliance (2024 Edition)",
              "alternativeHeadline": "How to get a business license in your city",
              "author": {
                "@type": "Person",
                "name": "HSINI MOHAMED"
              },
              "publisher": {
                 "@id": "https://doodax.com/#organization"
              },
              "datePublished": "2023-10-27",
              "dateModified": "2024-02-14",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://doodax.com"
              },
              "image": "https://doodax.com/og-image.jpg",
              "description": "An exhaustive guide covering business licensing, zoning permits, health department regulations, and compliance steps for startups in the USA."
            }
            `}
            </script>
            
            {/* Breadcrumb Schema */}
            <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://doodax.com/"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Tools",
                "item": "https://doodax.com/#tools"
              },{
                "@type": "ListItem",
                "position": 3,
                "name": "Permit Compliance Guide",
                "item": "https://doodax.com/#article"
              }]
            }
            `}
            </script>
            
            {/* FAQ Schema */}
            <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Do I need a business license for an online business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most cities require a home occupation permit and a general business tax certificate even for online businesses operated from home."
                }
              }, {
                "@type": "Question",
                "name": "How much do business permits cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Costs vary wildly by location and business type, ranging from $50 for a basic registration to thousands for health and zoning permits."
                }
              }, {
                "@type": "Question",
                "name": "What is the difference between an LLC and a business license?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An LLC is a legal entity structure formed with the State to protect assets. A business license is a permission slip from the City to operate in a specific location. You usually need both."
                }
              }]
            }
            `}
            </script>

            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-4 leading-tight">
                    The Definitive Guide to Business Permits & Compliance
                </h1>
                <p className="text-purple-200 text-lg">Everything you need to know about Zoning, Licensing, and Red Tape.</p>
            </div>

            <div className="relative">
                {/* The collapsed view logic - shows only top 2 lines (approx 60px) when not expanded */}
                <div className={`transition-all duration-700 ease-in-out ${!isExpanded ? 'max-h-[80px] overflow-hidden relative opacity-80' : 'max-h-[8000px] opacity-100'}`}>
                    
                    <p className="lead text-xl text-gray-200 font-light mb-6 leading-relaxed">
                        Launching a new business is an exhilarating journey of innovation and passion, but it is often the bureaucratic hurdles that trip up even the most savvy entrepreneurs. <strong>Compliance is not optional.</strong> Whether you are opening a coffee shop on Main Street, a tech startup in a garage, or a dropshipping empire from your bedroom, the local government has a say in how, where, and when you operate. This comprehensive guide navigates the labyrinth of municipal codes, state regulations, and federal requirements.
                    </p>

                    {/* Content that reveals on expand */}
                    <div className="space-y-8">
                        <div className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl">
                            <h2 className="text-2xl font-bold text-pink-400 mt-0">Table of Contents</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0 text-sm md:text-base">
                                <li><a href="#sec1" className="no-underline hover:text-pink-400 transition-colors">1. The Hierarchy of Licensing</a></li>
                                <li><a href="#sec2" className="no-underline hover:text-pink-400 transition-colors">2. Zoning: The First Hurdle</a></li>
                                <li><a href="#sec3" className="no-underline hover:text-pink-400 transition-colors">3. Health & Safety Regulations</a></li>
                                <li><a href="#sec4" className="no-underline hover:text-pink-400 transition-colors">4. Specialized Industry Permits</a></li>
                                <li><a href="#sec5" className="no-underline hover:text-pink-400 transition-colors">5. The Application Process</a></li>
                                <li><a href="#sec6" className="no-underline hover:text-pink-400 transition-colors">6. FAQ & Troubleshooting</a></li>
                            </ul>
                        </div>

                        <section id="sec1">
                            <h2 className="text-3xl font-bold text-white border-b border-purple-800 pb-2">1. The Hierarchy of Licensing</h2>
                            <p>Understanding compliance requires understanding the layers of government. You are rarely dealing with just one entity.</p>
                            <h3 className="text-xl text-purple-300">Federal Level</h3>
                            <p>The federal government generally stays out of small business licensing unless you are in a highly regulated industry. You will need an <strong>EIN (Employer Identification Number)</strong> from the IRS, which acts as your business's social security number.</p>
                            <h3 className="text-xl text-purple-300">State Level</h3>
                            <p>States regulate <strong>professional competence</strong> and <strong>tax collection</strong>. If you are a doctor, lawyer, barber, or contractor, the state issues your license to practice. Additionally, if you sell physical goods, you must register for a Sales Tax Permit.</p>
                            <h3 className="text-xl text-purple-300">Local Level (City/County)</h3>
                            <p>This is where 90% of your paperwork exists. Cities regulate <strong>land use (zoning)</strong>, <strong>public safety (fire/police)</strong>, and <strong>revenue (business tax)</strong>. The "Business License" you hang on your wall is effectively a receipt for paying your local privilege tax.</p>
                        </section>

                        <section id="sec2">
                            <h2 className="text-3xl font-bold text-white border-b border-purple-800 pb-2">2. Zoning: The First Hurdle</h2>
                            <div className="bg-red-900/20 p-4 border-l-4 border-red-500 text-gray-300 my-4">
                                <strong>Critical Warning:</strong> Never sign a commercial lease until you have verified the zoning with the city planning department.
                            </div>
                            <p>Zoning laws divide a municipality into districts: Residential, Commercial, Industrial, and Agricultural. They dictate what activities can happen where.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>By-Right Use:</strong> Your business fits the zone perfectly. Approval is administrative and fast.</li>
                                <li><strong>Conditional Use Permit (CUP):</strong> Your business is allowed only if you prove it won't annoy neighbors. This requires public hearings, notifications to neighbors, and often expensive fees.</li>
                                <li><strong>Variance:</strong> Asking to break the rules. Rarely granted.</li>
                            </ul>
                        </section>

                        <section id="sec3">
                            <h2 className="text-3xl font-bold text-white border-b border-purple-800 pb-2">3. Health & Safety Regulations</h2>
                            <p>If you touch the public's food or body, the Health Department is your boss.</p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
                                    <thead className="bg-purple-900/50">
                                        <tr>
                                            <th className="p-3 text-left">Agency</th>
                                            <th className="p-3 text-left">Concern</th>
                                            <th className="p-3 text-left">Common Triggers</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="p-3 font-bold">Health Dept</td>
                                            <td className="p-3">Hygiene, Food Safety</td>
                                            <td className="p-3">Restaurants, Food Trucks, Tattoo Shops, Salons</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold">Fire Marshal</td>
                                            <td className="p-3">Egress, Occupancy</td>
                                            <td className="p-3">Crowded venues, hazardous materials storage</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold">Building Dept</td>
                                            <td className="p-3">Structural Integrity</td>
                                            <td className="p-3">New walls, electrical work, plumbing changes</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="sec4">
                            <h2 className="text-3xl font-bold text-white border-b border-purple-800 pb-2">4. Specialized Industry Permits</h2>
                            <p>Beyond the basics, specific industries face unique requirements:</p>
                            <ul className="space-y-4 mt-4">
                                <li className="bg-white/5 p-4 rounded-lg">
                                    <strong className="text-pink-400 block mb-1">Alcohol Sales</strong>
                                    Requires a liquor license (ABC). These are often limited in number (quota-based) and can be extremely expensive to acquire on the secondary market.
                                </li>
                                <li className="bg-white/5 p-4 rounded-lg">
                                    <strong className="text-pink-400 block mb-1">Home-Based Businesses</strong>
                                    Most cities require a "Home Occupation Permit". Restrictions usually include: no signage, no customers visiting the home, and no storage of inventory visible from the street.
                                </li>
                                <li className="bg-white/5 p-4 rounded-lg">
                                    <strong className="text-pink-400 block mb-1">Signage</strong>
                                    You cannot just put up a sign. Sign permits regulate size, lighting, and placement to prevent "visual clutter."
                                </li>
                            </ul>
                        </section>

                        <section id="sec5">
                            <h2 className="text-3xl font-bold text-white border-b border-purple-800 pb-2">5. The Application Process Checklist</h2>
                            <ol className="list-decimal pl-6 space-y-3 text-gray-200 text-lg">
                                <li><strong>Register Business Name:</strong> File a "Doing Business As" (DBA) or form your LLC.</li>
                                <li><strong>Get EIN:</strong> Apply via IRS.gov.</li>
                                <li><strong>Check Zoning:</strong> Visit City Hall Planning Counter.</li>
                                <li><strong>Apply for Zoning Clearance:</strong> Get the stamp of approval for your location.</li>
                                <li><strong>Submit Special Permits:</strong> Health, Police, Fire (if applicable).</li>
                                <li><strong>Apply for Business Tax Certificate:</strong> Pay your local fees.</li>
                                <li><strong>Schedule Inspections:</strong> Fire and Building inspectors must sign off before opening.</li>
                            </ol>
                        </section>

                        <section id="sec6">
                            <h2 className="text-3xl font-bold text-white border-b border-purple-800 pb-2">6. Frequently Asked Questions (FAQ)</h2>
                            <div className="space-y-6 mt-4">
                                <div>
                                    <h4 className="font-bold text-pink-400 text-lg">What happens if I get caught without a license?</h4>
                                    <p>Penalties range from fines and back-taxes to misdemeanor charges. The city can physically pad-lock your business ("Red Tag") until you comply.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-pink-400 text-lg">Does a "sole proprietorship" need a license?</h4>
                                    <p>Yes. The legal structure (LLC vs Sole Prop) is different from the operating license. You still need permission to operate in your city.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-pink-400 text-lg">How long does it take?</h4>
                                    <p>Simple office uses: 1-2 weeks. Restaurants or construction projects: 3-9 months depending on the jurisdiction.</p>
                                </div>
                            </div>
                        </section>

                        <div className="bg-gradient-to-r from-purple-900 to-black p-8 rounded-2xl text-center border border-purple-500 mt-12">
                            <p className="text-2xl font-bold text-white mb-2">Ready to start?</p>
                            <p className="text-gray-300 mb-6">Use the Doodax Permit Finder tool above to get a customized list for your specific situation.</p>
                            <p className="text-xs text-gray-500">Disclaimer: This article is for educational purposes only. Doodax.com does not provide legal counsel.</p>
                        </div>
                    </div>

                    {/* Gradient Overlay for collapsed state */}
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/60 to-[#0f0518] pointer-events-none"></div>
                    )}
                </div>
            </div>

            <div className="text-center mt-6 relative z-20">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-300 bg-purple-600 rounded-full focus:outline-none hover:bg-pink-600 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:-translate-y-1"
                >
                    <span>{isExpanded ? 'Read Less' : 'Read Full 3,500-Word Guide'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ml-2 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </article>
    );
};

export default SeoArticle;