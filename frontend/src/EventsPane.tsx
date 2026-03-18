import { Calendar, Clock, MapPin, Music, GlassWater, Sun, Wine, Mail, Sparkles, MoveRight } from 'lucide-react';
import { useState } from 'react';

const events = [
  {
    id: 1,
    title: 'Sunset Oysters & Champagne',
    date: 'Tonight',
    time: '19:00 - 21:00',
    location: 'Ostrea Pier',
    icon: GlassWater,
    color: 'from-amber-500/20 to-orange-600/20',
    borderColor: 'group-hover:border-amber-500/50',
    iconColor: 'group-hover:text-amber-400',
    email: 'concierge@ostrea.hr',
    description: 'Join us for a luxurious evening on the Ostrea Pier. Savor the world-renowned local Mali Ston oysters, harvested just moments before serving, perfectly paired with a curated selection of the finest international champagnes and local sparkling wines. As the sun sets over the bay, casting a golden hue over the ancient walls of Ston, enjoy the gentle sea breeze and a truly unforgettable gastronomic experience.',
  },
  {
    id: 2,
    title: 'Local Klapa Music Night',
    date: 'Tomorrow',
    time: '20:30 - 23:00',
    location: 'Lobby Lounge',
    icon: Music,
    color: 'from-brand-primary/20 to-blue-600/20',
    borderColor: 'group-hover:border-brand-primary/50',
    iconColor: 'group-hover:text-brand-primary',
    email: 'events@ostrea.hr',
    description: 'Immerse yourself in the soulful, hauntingly beautiful sounds of Dalmatia. Klapa is a UNESCO-protected traditional form of a cappella singing that celebrates love, the sea, and homeland. Grab a glass of local wine and let the harmonic, powerful voices of a renowned local Klapa group transport you to another era, right in the intimate comfort of our deep-sea inspired Lobby Lounge.',
  },
  {
    id: 3,
    title: 'Pelješac Wine Masterclass',
    date: 'Friday',
    time: '15:00 - 17:00',
    location: 'The Cellar',
    icon: Wine,
    color: 'from-purple-500/20 to-rose-600/20',
    borderColor: 'group-hover:border-purple-500/50',
    iconColor: 'group-hover:text-purple-400',
    email: 'sommelier@ostrea.hr',
    description: 'Embark on a sprawling journey through the esteemed vineyards of the Pelješac peninsula without leaving the hotel. Our head sommelier will guide you through an exclusive, blind tasting of indigenous grape varieties, focusing intensely on the celebrated Plavac Mali. Discover the history, the unforgiving rocky terroir, and the unique characteristics that make Dalmatian wines truly exceptional globally. Small artisanal tapas bites will be perfectly paired with each glass.',
  },
  {
    id: 4,
    title: 'Morning Yoga by the Bay',
    date: 'Saturday',
    time: '07:00 - 08:30',
    location: 'Private Beach',
    icon: Sun,
    color: 'from-emerald-500/20 to-teal-600/20',
    borderColor: 'group-hover:border-emerald-500/50',
    iconColor: 'group-hover:text-emerald-400',
    email: 'wellness@ostrea.hr',
    description: 'Start your day with profound tranquility and intention. Our expert resident yogi will lead a gentle, restorative Vinyasa flow session perfectly suited for all levels. Set against the serene backdrop of our private pebble beach, you will find inner peace accompanied continuously by the gentle sound of morning waves and the rising Adriatic sun. High-quality mats, blocks, infused water, and fresh towels are complimentary.',
  },
];

export default function EventsPane() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="flex-1 flex flex-col h-full text-brand-50 overflow-hidden animate-in fade-in zoom-in-95 duration-700 rounded-3xl relative">
      
      {/* Decorative background element unique to events */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="p-5 md:p-6 lg:p-8 pb-3 md:pb-4 lg:pb-6 border-b border-brand-800/50 flex-none relative z-10 flex justify-between items-center bg-brand-900/40 backdrop-blur-md rounded-t-[2rem]">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-1 tracking-wide flex items-center gap-3">
             <Sparkles className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 text-brand-primary" />
             Upcoming Events
          </h2>
          <p className="text-brand-300 text-xs uppercase tracking-widest">Curated Hotel Experiences</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 bg-brand-950/80 shadow-inner rounded-full border border-brand-800 backdrop-blur-md">
          <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-brand-primary" />
          <span className="text-xs lg:text-sm font-medium text-brand-100 uppercase tracking-widest">This Week</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 md:p-5 lg:p-10 flex flex-col gap-4 md:gap-5 lg:gap-6 scroller relative z-10">
        
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-10 lg:left-[4.5rem] top-10 bottom-10 w-px bg-gradient-to-b from-brand-primary/80 via-brand-800 to-transparent hidden sm:block pointer-events-none z-0"></div>

        {events.map((evt) => {
          const isExpanded = expandedId === evt.id;
          return (
            <div 
              key={evt.id} 
              onClick={() => setExpandedId(isExpanded ? null : evt.id)}
              className="group relative flex items-start gap-4 sm:gap-6 lg:gap-10 cursor-pointer w-full z-10"
            >
              
              {/* Timeline Dot & Icon */}
              <div className={`hidden sm:flex flex-none w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-brand-950 border-2 items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out ${isExpanded ? 'scale-110 border-brand-primary shadow-[0_0_30px_rgba(2,132,199,0.5)]' : 'border-brand-800 group-hover:scale-110'} ${!isExpanded && evt.borderColor}`}>
                <evt.icon className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-colors duration-700 ${isExpanded ? 'text-brand-primary animate-pulse' : `text-brand-400 ${evt.iconColor}`}`} />
              </div>

              {/* Event Card */}
              <div className={`flex-1 relative bg-brand-950/40 backdrop-blur-xl border border-brand-800/50 transition-all duration-700 rounded-[1.5rem] md:rounded-[1.5rem] lg:rounded-[2rem] p-4 md:p-5 lg:p-8 overflow-hidden shadow-xl ${isExpanded ? 'shadow-[0_20px_60px_rgba(2,132,199,0.2)] lg:-ml-4 border-brand-primary/50' : `hover:bg-brand-950/80 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${evt.borderColor}`}`}>
                
                {/* Dynamic Theme Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${evt.color} ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-1000 pointer-events-none`}></div>
                
                <div className="relative z-10 flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4 sm:hidden">
                      <evt.icon className={`w-6 h-6 text-brand-400 ${evt.iconColor}`} />
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-brand-200 mb-4">
                      <div className="flex items-center gap-2 bg-brand-900/80 px-4 py-2 rounded-full border border-brand-800 shadow-inner">
                        <Calendar className="w-4 h-4 text-brand-primary" />
                        {evt.date}
                      </div>
                      <div className="flex items-center gap-2 bg-brand-900/80 px-4 py-2 rounded-full border border-brand-800 shadow-inner">
                        <Clock className="w-4 h-4 text-brand-primary" />
                        {evt.time}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-4xl font-light text-white mb-2 leading-tight tracking-tight">{evt.title}</h3>

                    {/* Expandable Section */}
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-6 md:mt-8' : 'max-h-0 opacity-0 mt-0'}`}>
                      <div className="w-12 h-px bg-brand-500/50 mb-6"></div>
                      <p className="text-brand-200 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-3xl font-light">{evt.description}</p>
                      <button 
                        onClick={(e) => { e.stopPropagation(); window.location.href = `mailto:${evt.email}`; }}
                        className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-brand-primary hover:bg-white text-white hover:text-brand-900 transition-all text-sm md:text-base font-medium shadow-[0_10px_30px_rgba(2,132,199,0.3)] hover:shadow-xl cursor-pointer hover:-translate-y-0.5"
                      >
                        <Mail className="w-4 h-4 md:w-5 md:h-5" />
                        Inquire with {evt.email}
                        <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-brand-400 shrink-0 text-base font-medium border-t border-brand-800/50 pt-6 xl:border-t-0 xl:pt-0">
                    <MapPin className="w-5 h-5 shrink-0 text-brand-500" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
