import { Map, Anchor, Grape, Compass, Ship, Navigation, Car, ArrowLeft, Wine, Mountain, Landmark, Camera, Trees, Sparkles, Droplets, MapPin } from 'lucide-react';
import { useState } from 'react';

const regions = [
  {
    id: 1,
    title: 'Pelje\u0161ac Peninsula',
    shortDescription: 'Renowned for its stark, mountainous landscape cascading into crystal clear waters. Pelje\u0161ac is Croatia\'s premier wine region.',
    longDescription: 'Pelje\u0161ac is an untouched gem of the Adriatic, offering an authentically rugged Dalmatian experience. Stretching almost 65 kilometers, it is a paradise for wine lovers and foodies alike. Here, ancient vineyards cling to steep, rocky slopes, producing the world-class Plavac Mali wine. The area is equally famous for Mali Ston Bay, where the mingling of fresh and salt waters creates the perfect environment for cultivating some of the most sought-after oysters globally. Whether you are scaling the Sveti Ilija mountain, wandering the epic Walls of Ston (the longest in Europe), or simply enjoying secluded pebble beaches, Pelje\u0161ac guarantees breathtaking natural beauty at an unhurried pace.',
    icon: Grape,
    tag: 'You are here',
    tagIcon: Navigation,
    heroColor: 'from-purple-500/30 to-fuchsia-600/30',
    borderColor: 'hover:border-purple-500/50',
    iconColor: 'text-purple-400 group-hover:border-purple-500/50',
    glowColor: 'bg-purple-500/5 group-hover:bg-purple-500/20',
    highlights: [
      { name: 'Plavac Mali Vineyards', desc: 'World-renowned bold red wines grown on steep, sun-drenched coastal cliffs.', icon: Wine },
      { name: 'Ston Salt Pans', desc: 'One of the oldest active set of salt pans in Europe, harvested naturally since antiquity.', icon: Droplets },
      { name: 'Oyster Farms', desc: 'Floating farms in Mali Ston bay producing premium oysters renowned globally.', icon: Anchor },
      { name: 'Medieval Walls', desc: 'A 5.5km long stone fortification system built by the Republic of Ragusa.', icon: Landmark },
      { name: 'Sveti Ilija', desc: 'A challenging hike rewarding you with panoramic views of the entire archipelago.', icon: Mountain },
    ]
  },
  {
    id: 2,
    title: 'Kor\u010Dula Island',
    shortDescription: 'Just a short boat ride from the peninsula lies Kor\u010Dula, a spectacularly preserved medieval walled town.',
    longDescription: 'Often referred to as a "Little Dubrovnik", Kor\u010Dula is an enchanting island rich in art, culture, and deep pine forests. The main town is ingeniously built in a fishbone pattern protruding into the sea, designed to protect citizens from harsh winds while allowing cooling summer breezes to circulate. Legends claim this is the birthplace of the great explorer Marco Polo. Today, it invites visitors to lose themselves in narrow alleys lined with Venetian-Renaissance architecture, taste the exclusive Po\u0161ip white wines, and perhaps witness the thrilling traditional Moreska sword dance.',
    icon: Anchor,
    tag: '1 Hour Boat Ride',
    tagIcon: Ship,
    heroColor: 'from-sky-500/30 to-blue-600/30',
    borderColor: 'hover:border-sky-500/50',
    iconColor: 'text-sky-400 group-hover:border-sky-500/50',
    glowColor: 'bg-sky-500/5 group-hover:bg-sky-500/20',
    highlights: [
      { name: 'Marco Polo\'s Birthplace', desc: 'The reputed historic stone house where the legendary merchant traveler was born.', icon: MapPin },
      { name: 'Moreska Sword Dance', desc: 'A dramatic, centuries-old traditional combat dance featuring clashing swords.', icon: Sparkles },
      { name: 'Po\u0161ip White Wine', desc: 'A crisp, elegant indigenous white wine exclusively cultivated in the island\'s central valleys.', icon: Wine },
      { name: 'Lumbarda Beaches', desc: 'Rare proper sandy beaches like Vela Pr\u017Eina, offering a perfect day of relaxation.', icon: Trees },
    ]
  },
  {
    id: 3,
    title: 'Dubrovnik',
    shortDescription: 'The "Pearl of the Adriatic" is a UNESCO World Heritage site and one of the world\'s most magnificent walled cities.',
    longDescription: 'Dubrovnik is universally celebrated for its stunning historic town center, enclosed by massive 16th-century stone walls looking out over the endless blue sea. As the capital of the historic maritime Republic of Ragusa, it amassed immense wealth and architectural splendor, which is evident in its gleaming Stradun promenade, ornate Baroque churches, and grand palazzos. Whether you are walking the full length of the ramparts, taking a cable car up Mount Sr\u0111 for an aerial view, or escaping to the peacocks and botanical gardens of nearby Lokrum Island, Dubrovnik offers an unforgettable, world-class historic immersion.',
    icon: Compass,
    tag: '50 Min Drive',
    tagIcon: Car,
    heroColor: 'from-amber-500/30 to-orange-600/30',
    borderColor: 'hover:border-amber-500/50',
    iconColor: 'text-amber-400 group-hover:border-amber-500/50',
    glowColor: 'bg-amber-500/5 group-hover:bg-amber-500/20',
    highlights: [
      { name: 'Old Town Walls', desc: 'Walk the majestic nearly 2km unbroken circuit framing the terracotta-roofed city.', icon: Landmark },
      { name: 'The Stradun', desc: 'The wide, polished limestone main street dating back to the 13th century.', icon: Map },
      { name: 'Lokrum Island', desc: 'A lush nature reserve just a 15-minute ferry ride away, featuring a monastery.', icon: Trees },
      { name: 'Filming Tours', desc: 'Discover iconic filming locations for "King\'s Landing" hidden throughout the streets.', icon: Camera },
    ]
  },
  {
    id: 4,
    title: 'Mostar',
    shortDescription: 'A historic crossroads of Eastern and Western cultures, famous for its iconic 16th-century Ottoman bridge.',
    longDescription: 'Situated in the heart of Bosnia and Herzegovina, Mostar is a mesmerizing city where distinct cultural influences converge. The city is defined by the Stari Most (Old Bridge), a magnificent stone arch spanning the emerald-green Neretva River. Destroyed during the war and meticulously rebuilt, it stands as a powerful symbol of reconciliation. Visitors can wander through the Old Bazaar (Kujund\u017Eiluk), filled with traditional crafts, copperware, and the aroma of Turkish coffee and grilled \u0107evapi. Mostar offers a unique glimpse into the Ottoman heritage that shaped this part of the Balkans, all nestled within a dramatic mountain valley.',
    icon: Landmark,
    tag: '1.5 Hour Drive',
    tagIcon: Car,
    heroColor: 'from-emerald-500/30 to-teal-600/30',
    borderColor: 'hover:border-emerald-500/50',
    iconColor: 'text-emerald-400 group-hover:border-emerald-500/50',
    glowColor: 'bg-emerald-500/5 group-hover:bg-emerald-500/20',
    highlights: [
      { name: 'Stari Most', desc: 'The iconic bridge where local divers perform daring leaps into the cold river below.', icon: Landmark },
      { name: 'Old Bazaar', desc: 'A vibrant marketplace filled with artisan shops, traditional restaurants, and colorful stalls.', icon: Map },
      { name: 'Blagaj Tekke', desc: 'A stunning 15th-century Dervish monastery built into the side of a cliff near a spring.', icon: Mountain },
      { name: 'Kravice Waterfalls', desc: 'Enormous tufa cascades on the Trebi\u017Eat River, often called the Niagara of Herzegovina.', icon: Droplets },
    ]
  }
];

export default function AboutRegionPane() {
  const [selectedRegionId, setSelectedRegionId] = useState<number | null>(null);

  const region = regions.find(r => r.id === selectedRegionId);

  return (
    <div className="flex-1 flex flex-col h-full text-brand-50 overflow-hidden animate-in fade-in zoom-in-95 duration-700 rounded-3xl relative p-1">
      {region ? (
        /* Detailed Overlay View */
        <div className="absolute inset-0 z-50 bg-brand-900 flex flex-col animate-in fade-in zoom-in-[0.98] duration-500 rounded-[2rem] overflow-hidden">
          
          <div className="p-4 md:p-8 flex-none border-b border-brand-800/50 flex flex-col md:flex-row md:items-center justify-between relative overflow-hidden bg-brand-950/40 backdrop-blur-md gap-4">
             <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${region.heroColor} blur-[140px] rounded-full pointer-events-none z-0`}></div>
             
             <div className="flex items-center gap-4 md:gap-6 relative z-10 hidden md:flex">
               <button onClick={() => setSelectedRegionId(null)} title="Go Back" aria-label="Go Back" className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-brand-900 border border-brand-700/50 flex items-center justify-center text-brand-300 hover:text-white hover:bg-brand-800 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer hover:-translate-x-1">
                 <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
               </button>
               <div>
                  <h2 className="text-xs md:text-sm uppercase tracking-widest text-brand-400 font-medium">Region Overview</h2>
               </div>
             </div>
             
             <div className="flex items-center gap-4 relative z-10 md:hidden">
               <button onClick={() => setSelectedRegionId(null)} title="Go Back" aria-label="Go Back" className="w-10 h-10 rounded-full bg-brand-900 border border-brand-700/50 flex items-center justify-center text-brand-300 hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer">
                 <ArrowLeft className="w-5 h-5" />
               </button>
               <h2 className="text-xs uppercase tracking-widest text-brand-400 font-medium tracking-tight">Return</h2>
             </div>

             <div className="hidden md:flex relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[1.5rem] bg-brand-950/80 items-center justify-center text-white border border-brand-700/50 shadow-2xl">
               <region.icon className="w-8 h-8 md:w-10 md:h-10" />
             </div>
          </div>
          
          <div className="flex-1 overflow-y-auto scroller p-6 md:p-8 lg:p-12 pb-32 relative">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

             <div className="max-w-5xl mx-auto relative z-10 pt-4">
               
               <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-900 border border-brand-800 text-xs md:text-sm font-bold uppercase tracking-widest text-brand-300 flex items-center gap-2">
                     <region.tagIcon className="w-3 h-3 md:w-4 md:h-4 text-brand-primary" />
                     {region.tag}
                  </span>
               </div>
               
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-10 tracking-tight leading-tight">{region.title}</h2>
               
               <p className="text-lg md:text-xl lg:text-2xl text-brand-200 leading-relaxed font-light mb-12 md:mb-16 italic border-l-4 border-brand-primary/50 pl-6 md:pl-8">
                 {region.longDescription}
               </p>

               <h3 className="text-xl md:text-2xl font-light text-white mb-6 md:mb-8 flex items-center gap-3 tracking-wide">
                  <MapPin className="w-5 h-5 md:w-7 md:h-7 text-brand-primary" /> 
                  Key Highlights
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {region.highlights.map((highlight, idx) => (
                   <div key={idx} className="bg-brand-950/40 backdrop-blur-md border border-brand-800/50 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-brand-primary/30 transition-colors group flex gap-4 md:gap-6 items-start">
                     <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-900/80 border border-brand-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       <highlight.icon className="w-5 h-5 md:w-7 md:h-7 text-brand-400 group-hover:text-brand-primary transition-colors" />
                     </div>
                     <div>
                       <h4 className="text-lg md:text-xl text-white font-medium mb-1 md:mb-2">{highlight.name}</h4>
                       <p className="text-sm md:text-base text-brand-300 font-light leading-relaxed">{highlight.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>

             </div>
          </div>
        </div>
      ) : (
        /* Grid View */
        <div className="absolute inset-0 flex flex-col animate-in fade-in zoom-in-[0.98] duration-500">
          <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-brand-primary/10 to-transparent pointer-events-none z-0"></div>

          <div className="p-6 pb-4 md:p-8 md:pb-6 border-b border-brand-800/50 flex-none relative z-10 bg-brand-900/40 backdrop-blur-md rounded-t-[2rem]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-1 md:mb-2 tracking-wide flex items-center gap-3 md:gap-4">
              <Map className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
              The Dalmatian Coast
            </h2>
            <p className="text-brand-300 text-xs md:text-sm uppercase tracking-widest">Surrounding Wonders</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 scroller relative z-10">
             <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {regions.map((r) => (
                 <div 
                key={r.id}
                onClick={() => setSelectedRegionId(r.id)}
                className={`relative bg-brand-950/40 backdrop-blur-xl border border-brand-800/50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 overflow-hidden group cursor-pointer transition-all duration-700 shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${r.borderColor} h-full`}
              >
                <div className={`absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full blur-[100px] transition-all duration-1000 z-0 ${r.glowColor}`}></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-6 lg:gap-10 items-start">
                   <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0 rounded-[1.25rem] md:rounded-[1.5rem] bg-brand-950 border border-brand-800 flex items-center justify-center transition-all duration-700 shadow-xl group-hover:scale-105 ${r.iconColor}`}>
                     <r.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                   </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                       <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-brand-900 border border-brand-800 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-400 flex items-center gap-2">
                          <r.tagIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                          {r.tag}
                       </span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 md:mb-3 tracking-tight group-hover:text-brand-50 transition-colors">{r.title}</h3>
                    <p className="text-brand-300 leading-relaxed text-sm md:text-base font-light mb-4 md:mb-5 opacity-90 group-hover:opacity-100 transition-opacity">
                      {r.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                       {r.highlights.map((hlt, idx) => (
                         <div key={idx} className="px-4 py-2 rounded-xl bg-brand-900/80 border border-brand-800 text-brand-300 text-sm font-medium tracking-wide">
                           {hlt.name}
                         </div>
                       ))}
                    </div>
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
