function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A]">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-2 border-[#1F2937] rounded-full flex items-center justify-center mb-6">
          <div className="w-5 h-5 border-2 border-[#3B82F6] border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        <h2 className="text-lg font-semibold text-[#E5E7EB] mb-2">CodeDose</h2>
        <p className="text-sm text-[#9CA3AF]">Loading questions...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
