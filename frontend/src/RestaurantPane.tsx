import { Utensils, ChefHat, Wine, CheckCircle2, Star, FishSymbol, Flame, Clock, History } from 'lucide-react';

export default function RestaurantPane() {
  return (
    <div className="flex-1 flex flex-col h-full text-brand-50 overflow-hidden animate-in fade-in zoom-in-95 duration-700 rounded-3xl relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="p-6 pb-4 md:p-8 md:pb-6 border-b border-brand-800/50 flex-none bg-brand-900/40 backdrop-blur-md relative z-10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-1 md:mb-2 tracking-wide flex items-center gap-3 md:gap-4">
            <Utensils className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
            Kapetanova Kuča
          </h2>
          <p className="text-brand-300 text-xs md:text-sm tracking-widest uppercase">The Captain's House \u2022 Seafood Gastronomy</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 scroller relative z-10 space-y-6 md:space-y-10">
        
        {/* Main Story & Hero Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="relative bg-brand-950/40 backdrop-blur-xl border border-brand-800/50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-2xl flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4 md:mb-6 flex items-center gap-3">
               <ChefHat className="w-6 h-6 md:w-8 md:h-8 text-brand-primary" />
               A Culinary Tradition
            </h3>
            <p className="text-brand-300 leading-relaxed text-base md:text-lg font-light mb-6">
               Located just steps away from Hotel Ostrea along the Mali Ston waterfront, Kapetanova Kuča is proudly owned by the Kralj family. Recognized across Croatia and internationally as a premier destination for seafood, our restaurant honors deep Dalmatian roots with centuries-old recipes passed down through generations.
            </p>
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-brand-800/50">
               <Clock className="w-5 h-5 text-brand-500" />
               <span className="text-brand-400 text-sm font-medium">Open Daily: 12:00 PM - 11:00 PM</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-brand-900/60 rounded-[2rem] md:rounded-[2.5rem] border border-brand-800 shadow-inner flex flex-col items-center justify-center p-6 hover:bg-brand-800/40 transition-colors cursor-pointer group">
               <FishSymbol className="w-10 h-10 md:w-12 md:h-12 text-brand-400 mb-3 md:mb-4 group-hover:text-brand-primary transition-colors" />
               <h4 className="text-white font-medium text-base md:text-lg mb-1">Daily Catch</h4>
               <p className="text-brand-500 text-xs text-center">Fresh from the Adriatic</p>
             </div>
             <div className="bg-brand-900/60 rounded-[2rem] md:rounded-[2.5rem] border border-brand-800 shadow-inner flex flex-col items-center justify-center p-6 hover:bg-brand-800/40 transition-colors cursor-pointer group">
               <Flame className="w-10 h-10 md:w-12 md:h-12 text-amber-500/80 mb-3 md:mb-4 group-hover:text-amber-500 transition-colors" />
               <h4 className="text-white font-medium text-base md:text-lg mb-1">Peka Style</h4>
               <p className="text-brand-500 text-xs text-center">Traditional under the bell</p>
             </div>
             <div className="col-span-2 bg-brand-900/60 rounded-[2rem] md:rounded-[2.5rem] border border-brand-800 shadow-inner p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-4 md:gap-6 relative overflow-hidden group">
               <div className="absolute right-0 top-0 w-32 h-32 bg-purple-500/10 blur-[50px] group-hover:bg-purple-500/20 transition-colors"></div>
               <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                 <Wine className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
               </div>
               <div className="relative z-10">
                 <h4 className="text-white font-medium text-lg md:text-xl mb-1 md:mb-2">Award-Winning Cellar</h4>
                 <p className="text-brand-400 text-xs md:text-sm leading-relaxed">Featuring an exceptional curated list of Dalmatian wines with a special emphasis on Pelješac Peninsula's finest Plavac Mali.</p>
               </div>
             </div>
          </div>
        </div>

        {/* The Origin Story */}
        <div className="relative bg-gradient-to-r from-brand-900/40 to-brand-950/40 backdrop-blur-md border border-brand-800/30 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
           <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/30">
               <History className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
           </div>
           <div>
              <h4 className="text-xl md:text-2xl text-white font-light mb-3 md:mb-4">The Captain's Legacy</h4>
              <p className="text-brand-300 leading-relaxed font-light text-base md:text-lg">
                The name "Kapetanova Kuča" directly translates to "The Captain's House." The building itself historically served as the actual residence of the harbor captain of Mali Ston during the era when the Republic of Ragusa (Dubrovnik) controlled these critical salt pans. Today, we honor that maritime legacy by serving exclusively wild-caught fish brought in daily by local fishermen to the very same harbor steps.
              </p>
           </div>
        </div>

        {/* Signature Dish Spotlight */}
        <div className="bg-gradient-to-r from-brand-950/80 to-brand-900/50 backdrop-blur-xl border border-brand-700/30 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-10">
           <div className="absolute left-0 top-0 w-1/3 h-full bg-brand-primary/5 blur-[50px]"></div>
           <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-brand-900 border-4 border-brand-800/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center relative z-10">
              <Star className="w-12 h-12 md:w-16 md:h-16 text-amber-400/50" />
           </div>
           <div className="relative z-10 text-center md:text-left">
              <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-brand-primary/20 text-brand-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 border border-brand-primary/30">Signature Hero Dish</div>
              <h4 className="text-2xl md:text-3xl font-light text-white mb-3 md:mb-4">The Mali Ston Risotto</h4>
              <p className="text-brand-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                Our closely guarded Kralj family recipe. We mix incredibly fresh Mali Ston oysters with local Mediterranean herbs, virgin olive oil, and perfectly al dente arborio rice, finished with a touch of local white wine. It is a masterpiece of unpretentious coastal luxury.
              </p>
           </div>
        </div>
        
        {/* Booking Card */}
        <div className="bg-brand-primary/10 backdrop-blur-xl border border-brand-primary/30 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-[0_20px_50px_rgba(2,132,199,0.15)] relative overflow-hidden group">
           <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-primary/30 blur-[100px] rounded-full group-hover:bg-brand-primary/40 transition-colors duration-700"></div>
           <div className="relative z-10 text-center md:text-left">
             <h4 className="text-2xl md:text-3xl font-light text-white mb-2 md:mb-3">Hotel Guest Priority</h4>
             <p className="text-brand-200 text-base md:text-lg max-w-xl font-light">As a treasured guest of Hotel Ostrea, enjoy exclusive priority booking for our highly coveted sea-view terrace tables.</p>
           </div>
           <button onClick={() => alert('Reservation requested for Kapetanova Kuča!')} className="relative z-10 shrink-0 w-full md:w-auto px-6 md:px-10 py-4 md:py-5 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full text-base md:text-lg font-medium transition-all shadow-[0_0_30px_rgba(2,132,199,0.4)] hover:shadow-[0_0_40px_rgba(2,132,199,0.6)] hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2 md:gap-3">
             Reserve a Table
             <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
           </button>
        </div>

      </div>
    </div>
  );
}
