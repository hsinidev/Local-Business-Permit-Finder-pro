import React, { useState, useMemo, useEffect } from 'react';
import { validateForm } from '../lib/formValidation';

interface FormData {
    businessType: string;
    city: string;
    state: string;
}

const businessTypes = [
    'Restaurant/Food Service',
    'Retail Store',
    'Consulting/Office',
    'Home-Based Business',
    'Construction/Trade',
    'Personal Care (Salon/Spa)',
];

const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const PermitFinderUI: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        businessType: '',
        city: '',
        state: '',
    });
    
    const [isSearching, setIsSearching] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing...');
    const [showResults, setShowResults] = useState(false);
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);
    const [recentSearches, setRecentSearches] = useState<FormData[]>([]);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    // Load history from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('permit_history');
        if (saved) {
            try {
                setRecentSearches(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse history");
            }
        }
    }, []);

    const validationErrors = useMemo(() => validateForm(formData), [formData]);
    const isFormValid = Object.keys(validationErrors).length === 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (showResults) setShowResults(false);
    };

    const loadHistoryItem = (item: FormData) => {
        setFormData(item);
        setShowResults(false);
    };

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            // Start simulated search process
            setIsSearching(true);
            setShowResults(false);
            setProgress(0);

            // Loading simulation steps
            const steps = [
                { pct: 10, text: `Connecting to ${formData.city} database...` },
                { pct: 40, text: 'Analyzing Zoning Regulations...' },
                { pct: 70, text: 'Cross-referencing State requirements...' },
                { pct: 90, text: 'Finalizing Permit List...' },
                { pct: 100, text: 'Done!' }
            ];

            let currentStep = 0;
            
            const interval = setInterval(() => {
                if (currentStep >= steps.length) {
                    clearInterval(interval);
                    setIsSearching(false);
                    setShowResults(true);
                    setSubmittedData(formData);
                    
                    // Save to history (unique by city+business)
                    setRecentSearches(prev => {
                        const newItem = formData;
                        const filtered = prev.filter(p => !(p.city === newItem.city && p.businessType === newItem.businessType));
                        const newHistory = [newItem, ...filtered].slice(0, 3);
                        localStorage.setItem('permit_history', JSON.stringify(newHistory));
                        return newHistory;
                    });
                } else {
                    const step = steps[currentStep];
                    setProgress(step.pct);
                    setLoadingText(step.text);
                    currentStep++;
                }
            }, 400); // Total time approx 2 seconds
        }
    };
    
    const handlePrint = () => {
        window.print();
    };

    const handleShare = () => {
        const text = `I found my business permit requirements for a ${submittedData?.businessType} in ${submittedData?.city} using Doodax! Check it out at https://doodax.com`;
        navigator.clipboard.writeText(text).then(() => {
            showToast('Link & Summary copied to clipboard!');
        });
    };

    return (
        <section className="bg-gray-900/70 backdrop-blur-xl p-6 md:p-10 rounded-2xl shadow-2xl border border-gray-700/50 shadow-[0_0_30px_rgba(8,145,178,0.2)] relative overflow-hidden">
            {/* Toast Notification */}
            {toastMessage && (
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce z-50 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {toastMessage}
                </div>
            )}

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-3 drop-shadow-sm">
                        Business Permit Finder
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                        Navigate the bureaucracy instantly. Enter your business details below to generate a customized compliance checklist.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Business Type */}
                    <div className="md:col-span-4 flex flex-col group">
                        <label htmlFor="businessType" className="mb-2 font-semibold text-cyan-300 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            Business Type
                        </label>
                        <div className="relative">
                             <select id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} className="w-full bg-gray-800/80 border border-gray-600 text-white rounded-lg p-3 pl-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none hover:bg-gray-800">
                                <option value="" disabled>Select Category...</option>
                                {businessTypes.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                        {validationErrors.businessType && <p className="text-red-400 text-xs mt-1 ml-1">{validationErrors.businessType}</p>}
                    </div>

                    {/* City */}
                     <div className="md:col-span-3 flex flex-col group">
                        <label htmlFor="city" className="mb-2 font-semibold text-cyan-300 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            City
                        </label>
                        <input type="text" id="city" name="city" placeholder="e.g. Austin" value={formData.city} onChange={handleChange} className="w-full bg-gray-800/80 border border-gray-600 text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all hover:bg-gray-800 placeholder-gray-500" />
                        {validationErrors.city && <p className="text-red-400 text-xs mt-1 ml-1">{validationErrors.city}</p>}
                    </div>

                    {/* State */}
                    <div className="md:col-span-3 flex flex-col group">
                        <label htmlFor="state" className="mb-2 font-semibold text-cyan-300 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 7m0 13V7" /></svg>
                            State
                        </label>
                        <div className="relative">
                            <select id="state" name="state" value={formData.state} onChange={handleChange} className="w-full bg-gray-800/80 border border-gray-600 text-white rounded-lg p-3 pl-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none hover:bg-gray-800">
                                <option value="" disabled>State...</option>
                                {states.map(state => <option key={state} value={state}>{state}</option>)}
                            </select>
                             <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                        {validationErrors.state && <p className="text-red-400 text-xs mt-1 ml-1">{validationErrors.state}</p>}
                    </div>
                    
                    {/* Submit Button */}
                    <div className="md:col-span-2 flex flex-col md:mt-8">
                        <button 
                            type="submit" 
                            disabled={!isFormValid || isSearching} 
                            className={`w-full h-[50px] font-bold rounded-lg transition-all duration-300 transform flex items-center justify-center gap-2 shadow-lg
                                ${!isFormValid || isSearching 
                                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white hover:scale-105 hover:shadow-cyan-500/30'
                                }
                            `}
                        >
                            {isSearching ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : 'Search'}
                        </button>
                    </div>
                </form>

                {/* Recent Searches - UX Enhancement */}
                {recentSearches.length > 0 && !showResults && !isSearching && (
                    <div className="mt-8 animate-fade-in">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Recent Searches</p>
                        <div className="flex flex-wrap gap-3">
                            {recentSearches.map((search, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => loadHistoryItem(search)}
                                    className="bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500/50 rounded-full px-4 py-2 text-sm text-gray-300 flex items-center gap-2 transition-all"
                                >
                                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                    {search.businessType} in {search.city}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Loading State Visuals */}
                {isSearching && (
                    <div className="mt-10 animate-fade-in text-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4 overflow-hidden relative">
                            <div className="bg-cyan-500 h-2.5 rounded-full transition-all duration-300 ease-out relative overflow-hidden" style={{ width: `${progress}%` }}>
                                <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full -translate-x-full animate-[shimmer_1s_infinite]"></div>
                            </div>
                        </div>
                        <p className="text-cyan-300 font-mono text-sm animate-pulse">{loadingText}</p>
                    </div>
                )}

                {/* Results Card */}
                {showResults && submittedData && (
                    <div className="mt-10 pt-6 border-t border-gray-700/50 animate-fade-in-up print-content">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="text-green-400">✓</span> Analysis Complete
                            </h3>
                            
                            <div className="flex gap-2">
                                <button onClick={handleShare} className="p-2 bg-gray-800 hover:bg-gray-700 rounded text-gray-300 hover:text-white transition" title="Copy Link">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                                </button>
                                <button onClick={handlePrint} className="p-2 bg-gray-800 hover:bg-gray-700 rounded text-gray-300 hover:text-white transition" title="Print Checklist">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl">
                            <div className="flex flex-col md:flex-row justify-between md:items-end mb-6 border-b border-gray-700 pb-4">
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider">Target Jurisdiction</p>
                                    <p className="text-xl font-bold text-white">{submittedData.city}, {submittedData.state}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider text-right md:text-right mt-4 md:mt-0">Business Category</p>
                                    <p className="text-xl font-bold text-cyan-400 text-right md:text-right">{submittedData.businessType}</p>
                                </div>
                            </div>

                            <h4 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Recommended Permits & Licenses
                            </h4>
                            
                            <ul className="space-y-3 mb-6">
                                <li className="bg-gray-800/50 p-3 rounded border-l-4 border-blue-500 flex justify-between items-center">
                                    <span className="text-gray-200 font-medium">General Business Tax Certificate</span>
                                    <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">Mandatory</span>
                                </li>
                                <li className="bg-gray-800/50 p-3 rounded border-l-4 border-green-500 flex justify-between items-center">
                                    <span className="text-gray-200 font-medium">Zoning Clearance / Use Permit</span>
                                    <span className="text-xs bg-green-900 text-green-200 px-2 py-1 rounded">Location Based</span>
                                </li>
                                {submittedData.businessType.includes('Food') && (
                                    <li className="bg-gray-800/50 p-3 rounded border-l-4 border-red-500 flex justify-between items-center">
                                        <span className="text-gray-200 font-medium">County Health Permit</span>
                                        <span className="text-xs bg-red-900 text-red-200 px-2 py-1 rounded">High Priority</span>
                                    </li>
                                )}
                                {submittedData.businessType.includes('Retail') && (
                                    <li className="bg-gray-800/50 p-3 rounded border-l-4 border-purple-500 flex justify-between items-center">
                                        <span className="text-gray-200 font-medium">Sales Tax Permit (State Level)</span>
                                        <span className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded">Tax</span>
                                    </li>
                                )}
                                <li className="bg-gray-800/50 p-3 rounded border-l-4 border-gray-500 flex justify-between items-center">
                                    <span className="text-gray-200 font-medium">Fire Department Inspection</span>
                                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Safety</span>
                                </li>
                            </ul>

                            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg flex gap-3">
                                <svg className="w-6 h-6 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <div>
                                    <p className="font-bold text-yellow-400 text-sm mb-1">Official Verification Required</p>
                                    <p className="text-yellow-200/80 text-xs leading-relaxed">
                                        Fees and forms vary by zip code. This is a simulation. You must contact the {submittedData.city} City Clerk's office for official filings.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <a 
                                    href={`https://www.google.com/search?q=${submittedData.city}+business+license+portal`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/50"
                                >
                                    Open Official {submittedData.city} Portal
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PermitFinderUI;