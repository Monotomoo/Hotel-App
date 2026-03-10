import { Mic } from 'lucide-react';

export default function ChatPane({ hideInput = false }: { hideInput?: boolean }) {
  return (
    <div className="flex-1 flex flex-col h-full text-brand-50">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 flex flex-col scroller">
        {/* AI Message */}
        <div className="flex justify-start">
          <div className="max-w-[90%] md:max-w-[85%] bg-brand-800/60 backdrop-blur-sm shadow-xl rounded-2xl p-4 md:p-5 border border-brand-700/50 rounded-tl-sm animate-in slide-in-from-left-4 fade-in duration-500">
            <p className="text-brand-100 text-base md:text-lg leading-relaxed">
              Welcome to Hotel Ostrea! Are you looking to check in, or do you have a question about your stay?
            </p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-[90%] md:max-w-[85%] bg-brand-primary text-white rounded-2xl p-4 md:p-5 shadow-lg rounded-tr-sm animate-in slide-in-from-right-4 fade-in duration-500 delay-300 fill-mode-both">
            <p className="text-white text-base md:text-lg leading-relaxed">
              I'd like to check in.
            </p>
          </div>
        </div>

        {/* AI Message 2 */}
        <div className="flex justify-start">
          <div className="max-w-[90%] md:max-w-[85%] bg-brand-800/60 backdrop-blur-sm shadow-xl rounded-2xl p-4 md:p-5 border border-brand-700/50 rounded-tl-sm animate-in slide-in-from-left-4 fade-in duration-500 delay-700 fill-mode-both">
            <p className="text-brand-100 text-base md:text-lg leading-relaxed">
              Wonderful. Please fill in your details on the right to start the check-in process.
            </p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      {!hideInput && (
        <div className="p-4 md:p-6 bg-brand-900/50 border-t border-brand-800/50">
          <div className="relative flex items-center">
            <input 
              type="text" 
              disabled 
              placeholder="Listening..." 
              className="w-full bg-white border border-brand-700/50 rounded-full py-3 md:py-4 pl-5 md:pl-6 pr-14 md:pr-16 text-base md:text-lg text-brand-900 placeholder:text-brand-400 cursor-not-allowed focus:outline-none shadow-inner"
            />
            <button 
              disabled 
              className="absolute right-1.5 md:right-2 p-2 md:p-3 bg-brand-primary/20 text-brand-primary rounded-full cursor-not-allowed border border-brand-primary/30"
              title="Voice Input (Disabled)"
              aria-label="Voice Input (Disabled)"
            >
              <Mic className="w-6 h-6 animate-pulse" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
