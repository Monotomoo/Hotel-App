import { useState, useEffect } from 'react';
import { FileUp, Loader2, CheckCircle2, QrCode, MessageSquare, Utensils } from 'lucide-react';

type Step = 'form' | 'upload' | 'loading' | 'success' | 'welcome';

export default function ActionPane() {
  const [step, setStep] = useState<Step>('form');
  const [sendEmail, setSendEmail] = useState(false);

  useEffect(() => {
    if (step === 'loading') {
      const timer = setTimeout(() => {
        setStep('success');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <div className="w-full max-w-lg x-auto">
        
        {/* State A: User Details Form */}
        {step === 'form' && (
          <div className="relative bg-brand-900/50 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-brand-700/50 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both text-brand-50 overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl z-0 group-hover:bg-brand-primary/20 transition-all duration-1000"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-light text-white mb-8 tracking-tight">Guest Details</h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep('upload'); }}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-300 block ml-1">First Name</label>
                <input type="text" className="w-full px-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all text-lg text-brand-900 placeholder:text-brand-400 shadow-inner" placeholder="Paulo" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-300 block ml-1">Surname</label>
                <input type="text" className="w-full px-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all text-lg text-brand-900 placeholder:text-brand-400 shadow-inner" placeholder="Kralj" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-300 block ml-1">Date of Birth</label>
                <input type="date" className="w-full px-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all text-lg text-brand-900 shadow-inner" required />
              </div>
              
              <button type="submit" className="w-full cursor-pointer bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl py-4 text-lg font-medium transition-colors mt-8 shadow-[0_0_20px_rgba(2,132,199,0.4)] border border-brand-primary/50">
                Continue
              </button>
              </form>
            </div>
          </div>
        )}

        {/* State B: ID Upload */}
        {step === 'upload' && (
          <div className="relative bg-brand-900/50 backdrop-blur-xl rounded-[2.5rem] p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-brand-700/50 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-500 fill-mode-both text-brand-50 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative z-10 flex flex-col items-center w-full text-center">
              <div className="w-24 h-24 bg-brand-800/80 rounded-full flex items-center justify-center mb-6 text-brand-primary border border-brand-700/50 shadow-[0_0_30px_rgba(2,132,199,0.2)]">
                <QrCode className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-light text-white mb-4 tracking-tight">Identity Verification</h2>
              <p className="text-brand-300 mb-10 text-lg max-w-sm">Please scan your passport or upload an official ID card to proceed.</p>
              
              <div className="w-full space-y-4">
                <button onClick={() => setStep('loading')} className="w-full cursor-pointer border border-brand-600/50 hover:border-brand-primary/80 bg-brand-900/40 hover:bg-brand-800/60 transition-all duration-300 rounded-2xl py-12 flex flex-col items-center justify-center gap-4 text-brand-300 group/btn shadow-inner backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <FileUp className="relative z-10 w-12 h-12 group-hover/btn:-translate-y-2 group-hover/btn:text-white transition-all text-brand-primary mb-2 shadow-black/50 drop-shadow-lg" />
                  <span className="relative z-10 font-medium text-xl text-white tracking-wide">Tap to Scan / Upload ID</span>
                </button>
              
                <button onClick={() => setStep('form')} className="w-full py-4 text-brand-400 hover:text-white transition-colors font-medium cursor-pointer mt-2 relative z-10">
                  Back
                </button>
              </div>
            </div>
          </div>
        )}

        {/* State C: Loading */}
        {step === 'loading' && (
          <div className="bg-brand-900/60 backdrop-blur-md rounded-[2rem] p-12 shadow-2xl border border-brand-700/50 flex flex-col items-center text-center animate-in fade-in zoom-out-95 duration-500 fill-mode-both h-80 justify-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full"></div>
              <Loader2 className="w-16 h-16 text-brand-primary animate-spin relative z-10" />
            </div>
            <h2 className="text-2xl font-light text-white mb-4">Verifying Reservation...</h2>
            <p className="text-brand-300 text-lg">Matching your identity with our records</p>
          </div>
        )}

        {/* State D: Success */}
        {step === 'success' && (
          <div className="bg-brand-900/60 backdrop-blur-md rounded-[2rem] p-10 shadow-[0_20px_60px_-15px_rgba(2,132,199,0.4)] border border-brand-primary/30 flex flex-col items-center text-center animate-in fade-in zoom-in-105 duration-700 fill-mode-both mt-4 relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl z-0"></div>
            
            <div className="relative z-10 w-20 h-20 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 text-emerald-400 animate-bounce shadow-[0_0_30px_rgba(52,211,153,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="relative z-10 text-4xl font-light text-white mb-2">Welcome, Paulo Kralj</h2>
            <p className="relative z-10 text-xl text-brand-300 mb-6">You are successfully checked in.</p>
            
            <div className="relative z-10 w-full bg-brand-950/60 rounded-2xl p-6 border border-brand-800/80 mb-6 flex divide-x divide-brand-800/80 shadow-inner">
              <div className="flex-1 px-4 flex flex-col items-center">
                <span className="text-sm font-medium text-brand-400 uppercase tracking-wider mb-2">Room</span>
                <span className="text-4xl font-bold text-white">204</span>
              </div>
              <div className="flex-1 px-4 flex flex-col items-center">
                <span className="text-sm font-medium text-brand-400 uppercase tracking-wider mb-2">PIN</span>
                <span className="text-4xl font-bold text-brand-primary tracking-widest drop-shadow-[0_0_10px_rgba(2,132,199,0.5)]">8492</span>
              </div>
            </div>

            <p className="relative z-10 text-brand-200 mb-8 font-light italic text-lg w-full text-center border-t border-b border-brand-800/50 py-4 bg-brand-900/30">Your room is on the second floor, doors at the end of the hallway. Have a nice stay!</p>
            
            <div className="relative z-10 w-full mb-8 text-left bg-brand-950/40 p-5 rounded-2xl border border-brand-800/50 group hover:border-brand-primary/30 transition-colors">
              <label className="flex items-start gap-4 cursor-pointer">
                <div className="mt-1">
                  <input type="checkbox" title="Opt-in to itinerary email" checked={sendEmail} onChange={(e) => setSendEmail(e.target.checked)} className="w-5 h-5 rounded border-brand-700 bg-brand-900/50 text-brand-primary focus:ring-brand-primary/50 focus:ring-offset-brand-900 transition-all cursor-pointer" />
                </div>
                <div className="flex-1">
                  <span className="text-brand-100 font-medium block mb-1 group-hover:text-white transition-colors">Email my itinerary</span>
                  <span className="text-brand-400 text-sm leading-relaxed block">Send me the check-in verification, lunch details, and tomorrow's short program.</span>
                  {sendEmail && (
                    <input type="email" title="Email address" placeholder="Email address" className="mt-4 w-full px-4 py-3 bg-brand-900/80 border border-brand-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-white placeholder:text-brand-500 transition-all text-sm shadow-inner" required />
                  )}
                </div>
              </label>
            </div>
            
            <button onClick={() => setStep('welcome')} className="relative z-10 cursor-pointer bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl py-4 px-10 text-lg font-medium transition-colors shadow-[0_0_20px_rgba(2,132,199,0.4)] border border-brand-primary/50 uppercase tracking-widest w-full">
              Finish
            </button>
          </div>
        )}

        {/* State E: Welcome / Next Steps */}
        {step === 'welcome' && (
          <div className="bg-brand-900/60 backdrop-blur-md rounded-[2rem] p-10 shadow-[0_20px_60px_-15px_rgba(2,132,199,0.4)] border border-brand-primary/30 flex flex-col items-center text-center animate-in fade-in zoom-in-105 duration-700 fill-mode-both mt-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

            <h2 className="relative z-10 text-4xl font-light text-white mb-4">Have a wonderful stay!</h2>
            <p className="relative z-10 text-lg text-brand-300 mb-10 font-light max-w-sm">We are delighted to have you as our guest. While you settle in, explore what our application has to offer:</p>
            
            <div className="relative z-10 w-full space-y-4 mb-8 text-left">
               <button onClick={() => alert("Redirecting to AI Concierge...")} className="w-full flex items-center gap-6 p-6 bg-brand-950/40 hover:bg-brand-900/60 transition-colors border border-brand-800/50 hover:border-brand-primary/50 rounded-2xl group cursor-pointer shadow-inner">
                 <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors shrink-0">
                   <MessageSquare className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-white text-lg font-medium mb-1">Talk to AI Concierge</h3>
                   <p className="text-brand-400 text-sm font-light">Ask questions, request room service, or book a transfer.</p>
                 </div>
               </button>

               <button onClick={() => alert("Redirecting to Kapetanova Kuča...")} className="w-full flex items-center gap-6 p-6 bg-brand-950/40 hover:bg-brand-900/60 transition-colors border border-brand-800/50 hover:border-amber-500/30 rounded-2xl group cursor-pointer shadow-inner">
                 <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors shrink-0">
                   <Utensils className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-white text-lg font-medium mb-1">Reserve a Table</h3>
                   <p className="text-brand-400 text-sm font-light">Book priority seating at Kapetanova Kuča for tomorrow.</p>
                 </div>
               </button>
            </div>
            
            <button onClick={() => setStep('form')} className="relative z-10 cursor-pointer text-brand-500 hover:text-white font-medium transition-colors p-2 text-sm uppercase tracking-widest">
              Return to Start
            </button>
          </div>
        )}

      </div>
      
      {/* Dev helper to quickly switch states manually */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-20 hover:opacity-100 transition-opacity z-50">
        <button onClick={() => setStep('form')} className={`px-3 py-1 text-xs rounded-full cursor-pointer ${step === 'form' ? 'bg-brand-primary text-white border-brand-primary' : 'bg-brand-950 border-brand-800 text-brand-400'} border transition-colors`}>State A</button>
        <button onClick={() => setStep('upload')} className={`px-3 py-1 text-xs rounded-full cursor-pointer ${step === 'upload' ? 'bg-brand-primary text-white border-brand-primary' : 'bg-brand-950 border-brand-800 text-brand-400'} border transition-colors`}>State B</button>
        <button onClick={() => setStep('loading')} className={`px-3 py-1 text-xs rounded-full cursor-pointer ${step === 'loading' ? 'bg-brand-primary text-white border-brand-primary' : 'bg-brand-950 border-brand-800 text-brand-400'} border transition-colors`}>State C</button>
        <button onClick={() => setStep('success')} className={`px-3 py-1 text-xs rounded-full cursor-pointer ${step === 'success' ? 'bg-brand-primary text-white border-brand-primary' : 'bg-brand-950 border-brand-800 text-brand-400'} border transition-colors`}>State D</button>
        <button onClick={() => setStep('welcome')} className={`px-3 py-1 text-xs rounded-full cursor-pointer ${step === 'welcome' ? 'bg-brand-primary text-white border-brand-primary' : 'bg-brand-950 border-brand-800 text-brand-400'} border transition-colors`}>State E</button>
      </div>
    </div>
  );
}
