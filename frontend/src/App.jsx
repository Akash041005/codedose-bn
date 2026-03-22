import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import QuestionCard from './components/QuestionCard';
import SolutionModal from './components/SolutionModal';
import LoadingScreen from './components/LoadingScreen';
import { fetchQuestions, getSolution } from './utils/api';
import { toast } from './utils/toast';

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('javascript');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [solution, setSolution] = useState(null);
  const [solutionLoading, setSolutionLoading] = useState(false);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      setLoading(true);
      const data = await fetchQuestions(2);
      setQuestions(data.questions || []);
    } catch (error) {
      toast.error('Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    loadQuestions();
    toast.success('New questions loaded!');
  };

  const handleOpenProblem = (question) => {
    window.open(question.link, '_blank', 'noopener,noreferrer');
  };

  const handleViewSolution = async (question) => {
    setSelectedQuestion(question);
    setShowSolution(true);
    setSolutionLoading(true);
    setSolution(null);
    
    try {
      const data = await getSolution(question.title, language);
      if (data.success) {
        setSolution(data.solution);
      } else {
        toast.error(data.error || 'Failed to load solution');
      }
    } catch (error) {
      toast.error('Failed to load solution');
    } finally {
      setSolutionLoading(false);
    }
  };

  const handleCopySolution = async () => {
    if (solution) {
      try {
        await navigator.clipboard.writeText(solution);
        toast.success('Code copied to clipboard!');
      } catch (error) {
        toast.error('Failed to copy');
      }
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onReset={handleReset}
        resetting={loading}
      />

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#E5E7EB] mb-1">Daily Questions</h1>
          <p className="text-sm text-[#9CA3AF]">{new Date().toISOString().split('T')[0]}</p>
        </div>

        {questions.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#9CA3AF] mb-4">No questions available</p>
            <button onClick={handleReset} className="btn-primary">
              Load Questions
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {questions.map((question, index) => (
              <QuestionCard
                key={question.title + index}
                question={question}
                index={index}
                onOpenProblem={() => handleOpenProblem(question)}
                onViewSolution={() => handleViewSolution(question)}
              />
            ))}
          </div>
        )}
      </main>

      {showSolution && selectedQuestion && (
        <SolutionModal
          question={selectedQuestion}
          solution={solution}
          loading={solutionLoading}
          onClose={() => {
            setShowSolution(false);
            setSelectedQuestion(null);
            setSolution(null);
          }}
          onCopy={handleCopySolution}
        />
      )}
    </div>
  );
}

export default App;
