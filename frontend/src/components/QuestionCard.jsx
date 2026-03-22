function QuestionCard({ question, index, onOpenProblem, onViewSolution }) {
  const difficultyClass = {
    'Easy': 'badge-easy',
    'Medium': 'badge-medium',
    'Hard': 'badge-hard'
  }[question.difficulty] || 'badge-easy';

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 bg-[#1F2937] text-[#9CA3AF] text-xs font-medium rounded flex items-center justify-center">
              {index + 1}
            </span>
            <span className="badge badge-platform">{question.platform}</span>
            <span className={`badge ${difficultyClass}`}>{question.difficulty}</span>
          </div>
          <h3 className="text-base font-semibold text-[#E5E7EB] leading-snug">
            {question.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        <button
          onClick={onOpenProblem}
          className="btn-primary flex-1 flex items-center justify-center gap-2 min-w-[140px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          Open Problem
        </button>

        <button
          onClick={onViewSolution}
          className="btn-secondary flex-1 flex items-center justify-center gap-2 min-w-[140px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          View Solution
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
