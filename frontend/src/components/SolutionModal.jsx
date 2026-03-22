import { useState } from 'react';

function SolutionModal({ question, solution, loading, onClose, onCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-[#111827] border border-[#1F2937] rounded-xl w-full max-w-3xl max-h-[85vh] overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-[#1F2937]">
          <div>
            <h2 className="text-lg font-semibold text-[#E5E7EB]">{question.title}</h2>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="badge badge-platform">{question.platform}</span>
              <span className={`badge ${
                question.difficulty === 'Easy' ? 'badge-easy' : 
                question.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'
              }`}>
                {question.difficulty}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#1F2937] rounded-lg transition-colors text-[#9CA3AF] hover:text-[#E5E7EB]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="p-5 overflow-auto max-h-[calc(85vh-180px)]">
          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-10 h-10 border-2 border-[#1F2937] border-t-[#3B82F6] rounded-full animate-spin mb-4"></div>
              <p className="text-[#9CA3AF]">Loading solution...</p>
            </div>
          )}

          {!loading && solution && (
            <pre className="bg-[#020617] rounded-lg p-4 overflow-x-auto text-sm leading-relaxed border border-[#1F2937]">
              <code className="text-[#E5E7EB] font-mono whitespace-pre-wrap">
                {solution}
              </code>
            </pre>
          )}

          {!loading && !solution && (
            <div className="text-center py-12">
              <p className="text-[#9CA3AF]">Failed to load solution</p>
            </div>
          )}
        </div>

        {!loading && solution && (
          <div className="flex items-center justify-between p-4 border-t border-[#1F2937] bg-[#0F172A]/50">
            <span className="text-xs text-[#9CA3AF]">
              Generated with Gemini AI
            </span>
            <button 
              onClick={handleCopy} 
              className={`btn-primary flex items-center gap-2 ${copied ? 'bg-[#22C55E] hover:bg-[#16A34A]' : ''}`}
            >
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SolutionModal;
