import { ArrowRight } from 'lucide-react';

export default function WelcomeScreen({ onCheckIn }: { onCheckIn: () => void }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-brand-950">
      
      {/* Dynamic Sea Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-brand-950">
        {/* Deep water gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-brand-primary/20 via-brand-950 to-brand-950"></div>
        
        {/* Sea Caustics & Flowing Orbs using arbitrary tailwind animations */}
        <div className="absolute top-[10%] left-[-20vw] w-[80vw] h-[80vw] bg-sky-500/10 rounded-[40%] blur-[120px] mix-blend-color-dodge animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute top-[-20vw] right-[-10vw] w-[60vw] h-[60vw] bg-brand-primary/20 rounded-[35%] blur-[100px] mix-blend-screen animate-[spin_25s_linear_infinite_reverse]"></div>
        <div className="absolute bottom-[-30vw] left-[20vw] w-[70vw] h-[60vw] bg-emerald-500/10 rounded-[45%] blur-[150px] mix-blend-screen animate-[spin_40s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-brand-900/20 backdrop-blur-[2px]"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-4 w-full h-full justify-center">
        
        {/* Massive Dramatic Title */}
        <div className="relative mb-12 group">
          <div className="absolute inset-0 bg-brand-primary/10 blur-[150px] rounded-full mix-blend-screen -z-10 group-hover:bg-brand-primary/30 transition-all duration-1000"></div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-tight font-thin tracking-[0.1em] text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] animate-in fade-in slide-in-from-bottom-12 duration-[1500ms] fill-mode-both uppercase">
            Hotel<br className="md:hidden" /> <span className="font-light italic tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-br from-white via-brand-100 to-brand-500 drop-shadow-[0_0_30px_rgba(2,132,199,0.5)]">Ostrea</span>
          </h1>
        </div>
        
        <p className="text-2xl md:text-3xl lg:text-4xl text-brand-300 font-light mb-24 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-[1500ms] delay-500 fill-mode-both tracking-[0.2em] uppercase leading-[1.8] md:leading-[2]">
          A seamless journey begins.<br className="md:hidden"/> Guided by AI.
        </p>

        <button
          onClick={onCheckIn}
          className="group relative cursor-pointer inline-flex items-center justify-center px-16 py-8 md:px-20 md:py-10 text-3xl md:text-4xl font-light text-white bg-brand-900/40 hover:bg-brand-primary/30 border border-brand-primary/30 hover:border-white transition-all duration-700 ease-out rounded-full shadow-[0_0_50px_rgba(2,132,199,0.2)] hover:shadow-[0_0_80px_rgba(2,132,199,0.6)] hover:scale-105 backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95 duration-[1500ms] delay-[1000ms] fill-mode-both"
        >
          {/* Button inner glow and ripple sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out"></div>
          
          <span className="relative z-10 flex items-center gap-6 uppercase tracking-widest">
            Begin Your Stay
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-3 transition-transform duration-500" />
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}
