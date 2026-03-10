import { Info, History, MapPin, Building, Star, Quote } from 'lucide-react';

export default function AboutHotelPane() {
  return (
    <div className="flex-1 flex flex-col h-full text-brand-50 overflow-hidden animate-in fade-in zoom-in-95 duration-700 rounded-3xl relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="p-8 pb-4 border-b border-brand-800/50 flex-none bg-brand-900/40 backdrop-blur-md relative z-10 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-light text-white mb-2 tracking-wide flex items-center gap-4">
            <Building className="w-10 h-10 text-brand-primary" />
            The Ostrea Story
          </h2>
          <p className="text-brand-300 text-sm tracking-widest uppercase">Tradition & Hospitality</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 md:p-10 scroller relative z-10 space-y-12">
         
         {/* Hero Block */}
         <div className="relative bg-brand-950/50 backdrop-blur-xl border border-brand-800/50 rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden group">
           <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full group-hover:bg-brand-primary/30 transition-colors duration-700 z-0"></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center mb-8 border border-brand-primary/30 shadow-[0_0_30px_rgba(2,132,199,0.2)]">
                 <Info className="w-10 h-10 text-brand-primary" />
               </div>
               <h3 className="text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight leading-tight">Indulge in the Pelješac style of life.</h3>
               <p className="text-xl text-brand-300 leading-relaxed font-light mb-6">
                 Hotel Ostrea Mali Ston is more than just a place to stay; it's a symbol of tradition and hospitality on the Pelješac Peninsula. Named after the Latin word for oyster, Hotel Ostrea reflects the rich heritage of Mali Ston, famous for its oysters and stunning coastal views.
               </p>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-900/60 border border-brand-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-square shadow-inner hover:-translate-y-2 transition-transform duration-500">
                   <History className="w-8 h-8 text-brand-400 mb-3" />
                   <div className="text-3xl font-light text-white mb-1">1998</div>
                   <div className="text-xs text-brand-400 uppercase tracking-widest">Established</div>
                </div>
                <div className="bg-brand-900/60 border border-brand-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-square shadow-inner translate-y-8 hover:translate-y-6 transition-transform duration-500">
                   <MapPin className="w-8 h-8 text-brand-400 mb-3" />
                   <div className="text-3xl font-light text-white mb-1">Ston</div>
                   <div className="text-xs text-brand-400 uppercase tracking-widest">Location</div>
                </div>
             </div>
           </div>
         </div>

         {/* Quote Section */}
         <div className="relative bg-gradient-to-r from-brand-900/40 to-brand-950/40 backdrop-blur-md border border-brand-800/30 rounded-[2rem] p-10 mt-12 flex flex-col items-center text-center">
            <Quote className="w-12 h-12 text-brand-primary/40 mb-6" />
            <p className="text-2xl lg:text-3xl text-white font-light italic leading-relaxed max-w-4xl tracking-wide">
              "Our goal was to transform traditional houses into touristic objects in order to protect them from devastation, but also to give them a new chance to shine thus, preserving them as valuable bits of history, available to everyone."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-800 border border-brand-700/50 shadow-inner"></div>
              <div className="text-left">
                <div className="text-white font-medium">The Kralj Family</div>
                <div className="text-brand-400 text-sm">Founders & Owners</div>
              </div>
            </div>
         </div>

         {/* Badges */}
         <div className="flex flex-wrap justify-center gap-6 mt-8">
           <div className="flex items-center gap-3 bg-brand-950/60 border border-brand-800/80 px-6 py-3 rounded-full shadow-lg">
             <Star className="w-5 h-5 text-amber-400" />
             <span className="text-brand-200 text-sm font-medium tracking-wide">Award-Winning Hospitality</span>
           </div>
           <div className="flex items-center gap-3 bg-brand-950/60 border border-brand-800/80 px-6 py-3 rounded-full shadow-lg">
             <Star className="w-5 h-5 text-amber-400" />
             <span className="text-brand-200 text-sm font-medium tracking-wide">Heritage Architecture</span>
           </div>
           <div className="flex items-center gap-3 bg-brand-950/60 border border-brand-800/80 px-6 py-3 rounded-full shadow-lg">
             <Star className="w-5 h-5 text-amber-400" />
             <span className="text-brand-200 text-sm font-medium tracking-wide">Sustainable Tourism</span>
           </div>
         </div>

         {/* Detailed Story Blocks */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
           <div className="bg-brand-950/40 backdrop-blur-md border border-brand-800/50 rounded-3xl p-8 hover:border-brand-primary/30 transition-colors">
              <h4 className="text-2xl text-white font-light mb-4">Our Commitment</h4>
              <p className="text-brand-300 leading-relaxed font-light text-lg">
                We believe in authentic experiences. From the stonework of our walls to the locally sourced ingredients in Kapetanova Kuča, every detail is deeply connected to the Pelješac peninsula. We operate with a deep respect for our environment, ensuring that the pristine waters of Mali Ston bay remain protected for future generations of oyster farmers and travelers alike.
              </p>
           </div>
           <div className="bg-brand-950/40 backdrop-blur-md border border-brand-800/50 rounded-3xl p-8 hover:border-brand-primary/30 transition-colors flex flex-col justify-center">
              <h4 className="text-2xl text-white font-light mb-6">Property Details</h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center border-b border-brand-800/50 pb-4">
                    <span className="text-brand-400 font-medium tracking-wide text-sm uppercase">Rooms & Suites</span>
                    <span className="text-white text-lg">14 Boutique Units</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-brand-800/50 pb-4">
                    <span className="text-brand-400 font-medium tracking-wide text-sm uppercase">Architecture</span>
                    <span className="text-white text-lg">Restored 19th c. Stone</span>
                 </div>
                 <div className="flex justify-between items-center pb-2">
                    <span className="text-brand-400 font-medium tracking-wide text-sm uppercase">Signature Dining</span>
                    <span className="text-white text-lg">Kapetanova Kuča</span>
                 </div>
              </div>
           </div>
         </div>

      </div>
    </div>
  );
}
