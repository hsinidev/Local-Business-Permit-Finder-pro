import React, { useState, useCallback } from 'react';

const Modal: React.FC<{ title: string; content: React.ReactNode; onClose: () => void }> = ({ title, content, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md flex justify-center items-center z-50 transition-opacity duration-300 p-4" onClick={onClose}>
            <div className="bg-[#0f0518] text-white rounded-2xl shadow-[0_0_50px_rgba(124,58,237,0.5)] border border-purple-900/50 p-6 md:p-8 w-full max-w-4xl flex flex-col max-h-[90vh] transform transition-transform duration-300 scale-100 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center border-b border-purple-800/50 pb-4 mb-4 shrink-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-pink-500 text-4xl transition-colors leading-none">&times;</button>
                </div>
                <div className="prose prose-invert prose-purple max-w-none overflow-y-auto pr-2 custom-scrollbar flex-grow">
                    {content}
                </div>
                <div className="mt-6 pt-4 border-t border-purple-800/50 shrink-0">
                     <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4 flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div>
                            <p className="text-sm text-red-200 font-semibold">
                                CAUTION & DISCLAIMER
                            </p>
                            <p className="text-xs text-red-300/80 mt-1">
                                This application (doodax.com) is a demonstration tool. The results provided are simulated and do not constitute legal advice. Google and other entities require verification of official business documents. Always consult official local government sources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

    const openModal = useCallback((title: string, content: React.ReactNode) => {
        setModalContent({ title, content });
    }, []);

    const closeModal = useCallback(() => {
        setModalContent(null);
    }, []);

    // Content Definitions for Modals
    const contentMap: Record<string, React.ReactNode> = {
        'About': (
            <div className="space-y-4">
                <p className="text-lg">Welcome to <strong>Doodax.com - Local Business Permit Finder</strong>.</p>
                <p>This project is a high-fidelity civic-tech demonstration designed by <strong>HSINI MOHAMED</strong>. It addresses the real-world friction entrepreneurs face when trying to understand local compliance.</p>
                <p>Built with React and TypeScript, it showcases how complex government data can be presented in a user-friendly, accessible, and modern interface.</p>
            </div>
        ),
        'Contact': (
            <div className="space-y-6 text-center">
                <p className="text-xl text-gray-200">We are here to help with your web development needs.</p>
                <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/30 inline-block w-full max-w-md mx-auto">
                    <div className="mb-6">
                        <h3 className="text-sm uppercase tracking-widest text-purple-400 mb-1">Website</h3>
                        <a href="https://doodax.com" className="text-2xl font-bold hover:text-pink-400 transition-colors">doodax.com</a>
                    </div>
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-purple-400 mb-1">Email</h3>
                        <a href="mailto:hsini.web@gmail.com" className="text-xl font-bold hover:text-pink-400 transition-colors">hsini.web@gmail.com</a>
                    </div>
                </div>
                <p className="text-sm text-gray-500">Response time is typically within 24 hours.</p>
            </div>
        ),
        'Guide': (
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-pink-400">User Guide</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                    <li><strong>Select Business Category:</strong> Choose from the dropdown list (e.g., Restaurant, Retail).</li>
                    <li><strong>Location Data:</strong> Input your target City and State.</li>
                    <li><strong>Generate Report:</strong> Click "Search".</li>
                    <li><strong>Analyze:</strong> Review the list of probable permits required for your specific niche.</li>
                </ol>
                <div className="bg-purple-900/20 p-4 rounded-lg mt-4">
                    <p className="text-sm font-bold">Note for Google/Advertisers:</p>
                    <p className="text-xs">This site provides informational guides on business licensing. It does not sell government documents directly.</p>
                </div>
            </div>
        ),
        'Privacy Policy': (
            <div className="space-y-3 text-sm">
                <h3 className="text-lg font-bold text-white">Privacy Policy for Doodax.com</h3>
                <p><strong>Effective Date: October 2023</strong></p>
                <p>Your privacy is important to us. It is Doodax's policy to respect your privacy regarding any information we may collect from you across our website.</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>We do not ask for personal information unless we truly need it.</li>
                    <li>We do not share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
                    <li>We do not store personal information on our servers unless required for the on-going operation of one of our services.</li>
                </ul>
                <p><strong>Contact:</strong> hsini.web@gmail.com</p>
            </div>
        ),
        'Terms of Service': (
            <div className="space-y-3 text-sm">
                <h3 className="text-lg font-bold text-white">Terms of Service</h3>
                <p>By accessing the website at <a href="https://doodax.com" className="text-pink-400">doodax.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                <p><strong>Disclaimer:</strong> The materials on Doodax's website are provided on an 'as is' basis. Doodax makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </div>
        ),
        'DMCA': (
            <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">DMCA Copyright Policy</h3>
                <p>Doodax respects the intellectual property rights of others. If you believe that material available on or through our website infringes upon any copyright you own or control, please immediately notify our Designated Copyright Agent.</p>
                <p className="bg-white/5 p-3 rounded">
                    <strong>Report Infringement to:</strong><br/>
                    Email: hsini.web@gmail.com<br/>
                    Subject: DMCA Takedown Request
                </p>
            </div>
        )
    };

    const navItems = Object.keys(contentMap);

    return (
        <div className="relative min-h-screen flex flex-col font-sans text-gray-100 selection:bg-pink-500 selection:text-white">
            {/* Content Wrapper to sit above fixed background */}
            <div className="relative z-10 flex flex-col min-h-screen w-full">
                <header className="bg-black/30 backdrop-blur-md sticky top-0 z-40 border-b border-white/10">
                    <nav className="container mx-auto px-4 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.reload()}>
                                <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Doodax</h1>
                                    <p className="text-xs text-purple-300 tracking-widest uppercase">Permit Finder</p>
                                </div>
                            </div>
                            
                            {/* Desktop Nav */}
                            <div className="hidden lg:flex space-x-6">
                                {navItems.slice(0, 3).map(item => (
                                    <button key={item} onClick={() => openModal(item, contentMap[item])} className="text-sm font-medium text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-105 uppercase tracking-widest">
                                        {item}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Menu Trigger */}
                            <div className="lg:hidden">
                                <button onClick={() => openModal("Menu", <div className="flex flex-col space-y-4">{navItems.map(item => <button key={item} onClick={() => {closeModal(); setTimeout(() => openModal(item, contentMap[item]), 300)}} className="text-left text-xl font-medium border-b border-white/10 pb-2">{item}</button>)}</div>)} className="text-white p-2">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>

                <main className="flex-grow w-full flex flex-col items-center justify-center">
                    {children}
                </main>

                <footer className="bg-black/80 backdrop-blur-xl py-10 mt-auto border-t border-white/10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                {navItems.map(item => (
                                     <button key={item} onClick={() => openModal(item, contentMap[item])} className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-white/10 text-center">
                             <p className="text-gray-400 text-sm mb-2">
                                &copy; {new Date().getFullYear()} Doodax.com. All rights reserved.
                            </p>
                            <div className="inline-block p-4 rounded-xl bg-white/5 border border-purple-500/20 hover:border-pink-500/50 transition-colors duration-300">
                                <p className="text-gray-300 text-base font-medium mb-1">
                                    Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-bold">HSINI MOHAMED</span>
                                </p>
                                <a 
                                    href="https://github.com/hsinidev" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                    <span>github.com/hsinidev</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            
            {/* Global Modal Container */}
            {modalContent && <Modal title={modalContent.title} content={modalContent.content} onClose={closeModal} />}
        </div>
    );
};

export default Layout;