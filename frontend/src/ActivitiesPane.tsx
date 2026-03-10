import { MapPin, Wine, Compass, Ship, Leaf, Mountain, Clock, Users, ArrowLeft, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const activities = [
  {
    id: 1,
    title: 'Oyster Tasting in Mali Ston',
    description: 'Savor world-class oysters fresh from the bay in Mali Ston, renowned globally since Roman times.',
    longDescription: 'Join a local multi-generational oyster farmer on a traditional wooden boat to visit the historic oyster beds floating in the Mali Ston bay. Learn about the centuries-old tradition of sustainable oyster farming before tasting them straight from the pristine sea. Served immediately with a squeeze of fresh lemon and an unlimited pairing of local Dalmatian sparkling wine. A truly unforgettable, hyper-local gastronomic experience wrapped in sea salt and sunshine.',
    icon: Ship,
    duration: '2-3 hours',
    price: '\u20AC85 per person',
    groupSize: 'Min: 2 \u2022 Max: 8',
    includes: ['Private boat ride', 'Fresh Oyster Tasting', 'Local Wine Pairing', 'Expert Farmer Guide'],
    heroColor: 'from-blue-500/30 to-sky-600/30',
  },
  {
    id: 2,
    title: 'Pelješac Wine Journey',
    description: 'Discover the rich, bold flavors of Pelješac peninsula\'s famous Plavac Mali wines.',
    longDescription: 'Dive into the heart of Croatian winemaking. Visit three prestigious, family-owned boutique wineries scattered across the dramatic mountain slopes of the Pelješac peninsula. You will take an exclusive guided tour of the vineyards and underground cellars, followed by a curated tasting of Plavac Mali, Dingač, and Postup varieties. Each flight is delicately paired with artisanal local cheeses, olive oil, and prosciutto. Meet the winemakers and learn the secrets of the rocky terroir.',
    icon: Wine,
    duration: '3.5 hours',
    price: '\u20AC95 per person',
    groupSize: 'Min: 2 \u2022 Max: 12',
    includes: ['VIP Cellar Tours', 'Wine Tastings', 'Charcuterie Board', 'Luxury Transportation', 'Sommelier Guide'],
    heroColor: 'from-purple-500/30 to-pink-600/30',
  },
  {
    id: 3,
    title: 'Dubrovnik Old Town Tour',
    description: 'Explore the spectacular medieval walls and history of the nearby Pearl of the Adriatic.',
    longDescription: 'Walk the ancient gleaming limestone streets of the Stradun and scale the magnificent, unbroken city walls of Dubrovnik. This private guided tour delves deeply into the history of the legendary Republic of Ragusa. You will visit hidden cloisters, ancient pharmacies, and iconic filming locations. Enjoy free time for a seaside Mediterranean lunch and shopping before a comfortable, air-conditioned private transfer back to the hotel.',
    icon: Compass,
    duration: 'Full Day (8 hrs)',
    price: '\u20AC250 per person',
    groupSize: 'Min: 2 \u2022 Max: 6',
    includes: ['Private Transfer', 'Expert Local Guide', 'Wall Tickets', 'Skip-the-line passes'],
    heroColor: 'from-amber-500/30 to-orange-600/30',
  },
  {
    id: 4,
    title: 'Korčula Island Excursion',
    description: 'Visit the historic island town of Korčula, the legendary fortified birthplace of Marco Polo.',
    longDescription: 'Take a short, highly scenic private speedboat or ferry crossing to the island of Korčula. Explore the incredibly preserved, fishbone-patterned medieval town center. Stand before the legendary house of Marco Polo and marvel at the intricate stone carvings of St. Mark\'s Cathedral. Finish the day tasting the famous local white wine, Pošip, in a historic tavern overlooking the archipelago.',
    icon: Ship,
    duration: 'Half Day',
    price: '\u20AC180 per person',
    groupSize: 'Min: 2 \u2022 Max: 8',
    includes: ['Speedboat/Ferry Tickets', 'Guided Walking Tour', 'Pošip Wine Tasting', 'Transfer to Port'],
    heroColor: 'from-emerald-500/30 to-teal-600/30',
  },
  {
    id: 5,
    title: 'Premium Olive Tasting',
    description: 'Taste liquid gold from ancient Dalmatian olive groves towering over the sea.',
    longDescription: 'Delve into the liquid gold of Dalmatia. Walk through ancient olive groves, some featuring trees over 500 years old. Learn the delicate art of harvesting and the modern precision of the cold-press extraction process. Taste a professional flight of award-winning extra virgin olive oils (monovarietal and blended) paired beautifully with homemade sourdough bread, local sea salt, and a dash of Mediterranean herbs.',
    icon: Leaf,
    duration: '2 hours',
    price: '\u20AC60 per person',
    groupSize: 'Min: 2 \u2022 Max: 10',
    includes: ['Ancient Grove Walk', 'Masterclass Flight', 'Tapas', 'Souvenir Oil Bottle'],
    heroColor: 'from-green-500/30 to-emerald-600/30',
  },
  {
    id: 6,
    title: 'Hiking Pelješac Peaks',
    description: 'Hike rugged trails offering breathtaking panoramic views of the entire Adriatic archipelago.',
    longDescription: 'For the adventurous heart, take a guided hike up the highest peaks of the peninsula, including the majestic Sveti Ilija (961m). Experience untouched Mediterranean scrubland, discover hidden grottos, and be rewarded at the summit with unparalleled, 360-degree views of the coastal islands, the winding coastline, and even Italy on a clear day. A thrilling mixture of endurance and raw natural beauty.',
    icon: Mountain,
    duration: '5 hours',
    price: '\u20AC90 per person',
    groupSize: 'Min: 1 \u2022 Max: 6',
    includes: ['Professional Alpine Guide', 'Energy Snacks', 'Walking Poles', 'Return Transfer'],
    heroColor: 'from-indigo-500/30 to-blue-600/30',
  },
];

export default function ActivitiesPane() {
  const [selectedActId, setSelectedActId] = useState<number | null>(null);
  const [bookingState, setBookingState] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const selectedAct = activities.find(a => a.id === selectedActId);

  return (
    <div className="flex-1 flex flex-col h-full text-brand-50 overflow-hidden animate-in fade-in zoom-in-95 duration-700 rounded-3xl relative">
      
      {selectedAct ? (
        /* Overlay View for Selected Activity */
        <div className="absolute inset-0 z-50 bg-brand-900 flex flex-col animate-in fade-in zoom-in-[0.98] duration-500">
          
          <div className="p-4 md:p-8 flex-none border-b border-brand-800/50 flex items-center justify-between relative overflow-hidden bg-brand-950/40 backdrop-blur-md gap-4">
             <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${selectedAct.heroColor} blur-[140px] rounded-full pointer-events-none z-0`}></div>
             
             <div className="flex items-center gap-4 md:gap-6 relative z-10 w-full md:w-auto">
               <button onClick={() => {
                 if (bookingState || bookingSubmitted) {
                    setBookingState(false);
                    setBookingSubmitted(false);
                 } else {
                    setSelectedActId(null);
                 }
               }} title="Go Back" aria-label="Go Back" className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-full bg-brand-900 border border-brand-700/50 flex items-center justify-center text-brand-300 hover:text-white hover:bg-brand-800 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer hover:-translate-x-1">
                 <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
               </button>
               <div className="flex-1">
                  <h2 className="text-xs md:text-sm uppercase tracking-widest text-brand-400 font-medium truncate">{bookingState || bookingSubmitted ? 'Booking Request' : 'Experience Details'}</h2>
               </div>
             </div>
             
             <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl md:rounded-[1.5rem] bg-brand-950/80 items-center justify-center text-white border border-brand-700/50 shadow-2xl hidden md:flex">
               <selectedAct.icon className="w-8 h-8 md:w-10 md:h-10" />
             </div>
          </div>
          
          <div className="flex-1 overflow-y-auto scroller p-6 md:p-8 lg:p-12 pb-32 relative">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

             <div className="max-w-4xl mx-auto relative z-10 pt-4">
               <h2 className="text-3xl md:text-5xl lg:text-7xl font-light text-white mb-6 md:mb-8 tracking-tight leading-tight">{selectedAct.title}</h2>
               
               <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-10 md:mb-14">
                 <div className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-2.5 bg-brand-950/80 border border-brand-800 rounded-full text-brand-200 text-xs md:text-sm font-medium shadow-inner">
                   <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                   {selectedAct.duration}
                 </div>
                 <div className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-2.5 bg-brand-950/80 border border-brand-800 rounded-full text-brand-200 text-xs md:text-sm font-medium shadow-inner">
                   <Users className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                   {selectedAct.groupSize}
                 </div>
                 <div className="flex items-center gap-2 md:gap-3 px-5 py-2 md:px-6 md:py-2.5 bg-brand-primary/20 border border-brand-primary/50 shadow-[0_0_20px_rgba(2,132,199,0.3)] rounded-full text-white font-medium text-base md:text-lg">
                   {selectedAct.price}
                 </div>
               </div>

               {bookingState && !bookingSubmitted ? (
                 <form 
                   onSubmit={(e) => { e.preventDefault(); setBookingSubmitted(true); }}
                   className="w-full space-y-6 bg-brand-950/40 backdrop-blur-md p-6 sm:p-10 rounded-[2.5rem] border border-brand-800/50 shadow-xl animate-in fade-in zoom-in-95"
                 >
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div className="space-y-3 relative">
                       <label className="text-sm font-medium text-brand-300 block ml-1">Preferred Date & Time</label>
                       <div className="relative group">
                         <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                         <input title="Preferred Date and Time" type="datetime-local" className="w-full pl-14 pr-5 py-5 bg-black/20 border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-white placeholder:text-brand-500 shadow-inner" required />
                       </div>
                     </div>
       
                     <div className="space-y-3 relative">
                       <label className="text-sm font-medium text-brand-300 block ml-1">Number of Guests</label>
                       <div className="relative group">
                         <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                         <input title="Number of Guests" type="number" min="1" max="20" className="w-full pl-14 pr-5 py-5 bg-black/20 border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-white placeholder:text-brand-500 shadow-inner" placeholder={`E.g. 2 (${selectedAct.groupSize})`} required />
                       </div>
                     </div>
       
                     <div className="space-y-3 relative sm:col-span-2">
                       <label className="text-sm font-medium text-brand-300 block ml-1">Special Requirements or Allergies</label>
                       <div className="relative group">
                         <Sparkles className="absolute left-5 top-6 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                         <textarea title="Special Requirements" className="w-full pl-14 pr-5 py-5 bg-black/20 border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-white placeholder:text-brand-500 shadow-inner min-h-[140px]" placeholder="Specific dietary requirements, mobility needs, etc."></textarea>
                       </div>
                     </div>
                   </div>
                   
                   <button type="submit" className="w-full cursor-pointer bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl py-6 text-xl font-medium transition-all mt-4 shadow-[0_0_30px_rgba(2,132,199,0.3)] border border-brand-primary/50 group flex items-center justify-center gap-3">
                     Confirm Booking Request
                     <CheckCircle2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                   </button>
                 </form>
               ) : bookingSubmitted ? (
                 <div className="flex flex-col items-center justify-center text-center space-y-6 bg-brand-950/30 p-12 rounded-[2.5rem] border border-brand-800/50 backdrop-blur-md animate-in fade-in zoom-in-95">
                   <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex flex-col items-center justify-center border border-emerald-500/30">
                     <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                   </div>
                   <div>
                     <h3 className="text-3xl font-light text-white mb-4">Request Sent</h3>
                     <p className="text-brand-300 text-lg max-w-lg mx-auto leading-relaxed font-light">Your Day Trip / Activity request for <strong>{selectedAct.title}</strong> has been sent securely to our concierge desk. We will arrange the details and follow up with you shortly via email.</p>
                   </div>
                 </div>
               ) : (
                 <>
                   <p className="text-lg md:text-2xl text-brand-200 leading-relaxed font-light mb-12 md:mb-16 italic border-l-4 border-brand-primary/50 pl-6 md:pl-8">
                     {selectedAct.longDescription}
                   </p>
    
                   <div className="bg-brand-900/40 border border-brand-800/50 rounded-[2.5rem] p-10 mb-12 shadow-2xl backdrop-blur-xl group hover:border-brand-primary/30 transition-colors">
                     <h3 className="text-xl font-medium text-white mb-8 flex items-center gap-3 tracking-wide">
                        <Sparkles className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform" /> 
                        What's Included
                     </h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                       {selectedAct.includes.map((item, idx) => (
                         <div key={idx} className="flex items-center gap-4">
                           <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                           <span className="text-brand-100 text-lg font-light">{item}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 </>
               )}
             </div>
          </div>
          
          {!bookingState && !bookingSubmitted && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-950 via-brand-950/90 to-transparent p-8 pointer-events-none flex justify-center z-50">
               <button onClick={() => setBookingState(true)} className="pointer-events-auto w-full max-w-lg cursor-pointer bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full py-5 text-xl font-medium transition-all shadow-[0_10px_40px_rgba(2,132,199,0.4)] hover:shadow-[0_15px_50px_rgba(2,132,199,0.6)] hover:-translate-y-1 border border-brand-primary/50 group flex items-center justify-center gap-3">
                 Request Booking
                 <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          )}
        </div>
      ) : (
        /* Grid View */
        <div className="absolute inset-0 flex flex-col animate-in fade-in zoom-in-[0.98] duration-500">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

          <div className="p-6 pb-4 md:p-8 md:pb-6 border-b border-brand-800/50 flex-none relative z-10 bg-brand-900/40 backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-1 md:mb-2 tracking-wide flex items-center gap-3 md:gap-4">
              <MapPin className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
              Experiences
            </h2>
            <p className="text-brand-300 text-xs md:text-sm uppercase tracking-widest">Curated Local Adventures</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 scroller relative z-10">
             <div className="columns-1 lg:columns-2 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
               {activities.map((act) => (
                 <div 
                   key={act.id} 
                   onClick={() => setSelectedActId(act.id)}
                   className="break-inside-avoid group relative bg-brand-950/40 backdrop-blur-xl border border-brand-800/50 hover:border-brand-primary/50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(2,132,199,0.25)]"
                 >
                   {/* Hover Glow */}
                   <div className={`absolute -inset-24 bg-gradient-to-tr ${act.heroColor} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`}></div>
                   
                   <div className="flex justify-between items-start mb-10 relative z-10">
                     <div className="w-20 h-20 rounded-[1.5rem] bg-brand-900 flex items-center justify-center border border-brand-800 shrink-0 shadow-inner text-brand-300 group-hover:text-white group-hover:bg-brand-primary/20 transition-all duration-500 group-hover:scale-110">
                       <act.icon className="w-10 h-10" />
                     </div>
                     <div className="w-12 h-12 rounded-full border border-brand-700/50 bg-brand-950 shrink-0 flex items-center justify-center text-brand-500 group-hover:text-white group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                       <svg className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                       </svg>
                     </div>
                   </div>
                   
                   <div className="relative z-10">
                     <h3 className="text-3xl font-light mb-4 text-brand-50 group-hover:text-white transition-colors tracking-tight leading-tight">{act.title}</h3>
                     <p className="text-brand-300 text-base leading-relaxed font-light mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">{act.description}</p>
                     
                     <div className="flex items-center gap-4 text-sm font-medium text-brand-500 group-hover:text-brand-300 transition-colors duration-500 mt-auto pt-6 border-t border-brand-800/50">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {act.duration}</span>
                        <span>\u2022</span>
                        <span className="text-brand-primary font-bold">{act.price}</span>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
