import { useState } from 'react';

const LANGUAGES = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'cpp', label: 'C++' },
  { value: 'java', label: 'Java' }
];

function Navbar({ language, setLanguage, onReset, resetting }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const selectedLang = LANGUAGES.find(l => l.value === language);

  return (
    <nav className="sticky top-0 z-40 bg-[#0F172A] border-b border-[#1F2937]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-[60px]">
          <div className="flex items-center gap-3">
            <img src="/icon-192.png" alt="CodeDose" className="w-9 h-9 object-contain" />
            <span className="text-lg font-semibold text-[#E5E7EB]">CodeDose</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="btn-secondary flex items-center gap-2 min-w-[120px] justify-between"
              >
                <span>{selectedLang?.label}</span>
                <svg className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {showDropdown && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowDropdown(false)}
                  />
                  <div className="absolute right-0 mt-2 w-36 bg-[#111827] border border-[#1F2937] rounded-lg shadow-xl z-20 overflow-hidden">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.value}
                        onClick={() => {
                          setLanguage(lang.value);
                          setShowDropdown(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm hover:bg-[#1F2937] transition-colors ${
                          language === lang.value ? 'text-[#3B82F6] bg-[#1F2937]/50' : 'text-[#E5E7EB]'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={onReset}
              disabled={resetting}
              className="btn-primary flex items-center gap-2"
            >
              <svg className={`w-4 h-4 ${resetting ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              {resetting ? 'Loading...' : 'Reset'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
