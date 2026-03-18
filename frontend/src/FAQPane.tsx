import { HelpCircle, Clock, Wifi, Coffee, Car, PawPrint, Anchor, Search, Info } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    category: 'Stay',
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in is at 15:00, and check-out is at 11:00. Late check-out may be requested subject to availability by contacting the concierge via the Chat pane.',
    icon: Clock,
  },
  {
    id: 2,
    category: 'Dining',
    question: 'Is breakfast included?',
    answer: 'Yes, a complimentary Mediterranean breakfast buffet is served daily from 07:00 to 10:30 at our sea-view restaurant terrace.',
    icon: Coffee,
  },
  {
    id: 3,
    category: 'Transport',
    question: 'Is parking available at the hotel?',
    answer: 'We offer secure valet parking for all our guests at a rate of \u20AC15 per day. High-speed electric vehicle charging stations are also available on-site.',
    icon: Car,
  },
  {
    id: 4,
    category: 'Stay',
    question: 'Are pets allowed?',
    answer: 'We are a proudly pet-friendly resort! Small and medium-sized dogs are welcome for a small additional cleaning fee. We even provide a specialized pet welcome kit upon arrival.',
    icon: PawPrint,
  },
  {
    id: 5,
    category: 'Amenities',
    question: 'How fast is the Wi-Fi?',
    answer: 'Our guests enjoy high-speed fiber-optic Wi-Fi throughout the entire property, perfect for 4K streaming or remote work from your balcony.',
    icon: Wifi,
  },
  {
    id: 6,
    category: 'Amenities',
    question: 'Do you offer private boat moorings?',
    answer: 'Yes, we have a private deep-water dock exclusively for our guests. Accommodating vessels up to 25 meters, our moorings include fresh water hookups, shore power (16A/32A), and seamless access to the Kapetanova Kuča restaurant. Please contact the concierge well in advance to secure your spot during the busy summer months.',
    icon: Anchor,
  },
  {
    id: 7,
    category: 'Dining',
    question: 'Do you cater to specific dietary requirements?',
    answer: 'Absolutely. Whether you require gluten-free, vegan, kosher-style, or specific allergy-conscious preparations, our executive chef creates tailored menus without compromising on the authentic Dalmatian flavor. Please notify us of your requirements either during booking or at check-in.',
    icon: Coffee,
  },
  {
    id: 8,
    category: 'Transport',
    question: 'How do I arrange transport from Dubrovnik Airport (DBV)?',
    answer: 'We provide a fleet of luxury sedans and premium vans for seamless transfers from DBV (approximately 1 hour drive). You can book this directly through the "Book Transfer" pane in this app. Ensure you provide your flight number so our drivers can track any delays.',
    icon: Car,
  },
  {
    id: 9,
    category: 'Amenities',
    question: 'Is there a fitness center or spa on site?',
    answer: 'While we preserve the historic architecture of our traditional stone houses and do not have a large indoor gym, we offer in-room massage treatments (Swedish, Deep Tissue, and Aromatherapy) upon request. We also provide complimentary yoga mats and mapped jogging routes along the scenic medieval walls.',
    icon: Info,
  },
  {
    id: 10,
    category: 'Stay',
    question: 'What is the cancellation policy?',
    answer: 'For standard rates, cancellations made up to 7 days before arrival are fully refundable. Cancellations within 7 days incur a 50% charge of the total stay. Non-refundable promotional rates cannot be canceled or modified. Exceptions are made for verifiable travel disruptions.',
    icon: Search,
  },
  {
    id: 11,
    category: 'Experiences',
    question: 'Can you help arrange wine tasting tours?',
    answer: 'Certainly. Pelješac is the heart of Croatian winemaking. Our concierge, functioning as a local expert, can curate half-day or full-day private tours to elite boutique wineries (like Dingač and Postup regions). You can request these experiences directly through the "Experiences" pane.',
    icon: HelpCircle,
  },
  {
    id: 12,
    category: 'Amenities',
    question: 'Are the rooms air-conditioned?',
    answer: 'Yes, despite being housed in centuries-old stone architecture, every single room and suite is equipped with a modern, whisper-quiet independent climate control system, allowing you to perfectly adjust both heating and cooling to your exact preference.',
    icon: Wifi,
  },
  {
    id: 13,
    category: 'Stay',
    question: 'Do you have facilities for families with young children?',
    answer: 'We are a family-owned hotel and welcome guests of all ages. We provide complimentary high-quality cribs, high chairs in the restaurant, and can arrange experienced local babysitting services with 24 hours notice. Please request cribs prior to arrival.',
    icon: Info,
  },
  {
    id: 14,
    category: 'Dining',
    question: 'Is there a dress code for Kapetanova Kuča?',
    answer: 'We embrace a "Smart Casual" Mediterranean atmosphere. While daytime dining on the terrace is very relaxed, we request that guests avoid wearing swimwear, excessively casual beachwear, or flip-flops during dinner service inside the main dining room.',
    icon: Coffee,
  },
  {
    id: 15,
    category: 'Transport',
    question: 'Can I rent a car or scooter directly at the hotel?',
    answer: 'Yes! We proudly partner with a premium local mobility service. We can have a rental car (ranging from compacts to luxury SUVs) or a Vespa scooter delivered directly to the hotel parking lot within an hour of your request during standard business hours.',
    icon: Car,
  }
];

export default function FAQPane() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const filteredFaqs = faqs.filter(f => f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex-1 flex flex-col h-full text-brand-50 overflow-hidden animate-in fade-in zoom-in-95 duration-700 rounded-3xl relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[140px] rounded-full pointer-events-none z-0"></div>

      <div className="p-4 md:p-6 lg:p-8 pb-4 md:pb-6 border-b border-brand-800/50 flex-none relative z-10 bg-brand-900/40 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
           <div>
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-1 md:mb-2 tracking-wide flex items-center gap-3 md:gap-4">
               <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" />
               Guest Directory
             </h2>
             <p className="text-brand-300 text-xs md:text-sm uppercase tracking-widest">Frequently Asked Questions</p>
           </div>
           
           <div className="relative w-full md:w-72 group">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
             <input 
               type="text" 
               placeholder="Search FAQs..." 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full pl-12 pr-4 py-3 bg-brand-950/60 border border-brand-800 rounded-full focus:outline-none focus:border-brand-primary/50 text-white placeholder:text-brand-500 transition-all shadow-inner"
             />
           </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 scroller relative z-10">
        
        {filteredFaqs.length === 0 ? (
           <div className="flex flex-col items-center justify-center h-full text-brand-400 space-y-4">
              <Search className="w-12 h-12 opacity-20" />
              <p className="text-lg font-light">No answers found for "{search}"</p>
           </div>
        ) : (
           <div className="grid grid-cols-1 gap-4">
             {filteredFaqs.map((faq) => {
               const isOpen = openId === faq.id;
               return (
                 <div 
                   key={faq.id} 
                   onClick={() => setOpenId(isOpen ? null : faq.id)}
                   className={`bg-brand-950/40 backdrop-blur-xl border ${isOpen ? 'border-brand-primary/50 shadow-[0_10px_30px_rgba(2,132,199,0.15)] bg-gradient-to-br from-brand-900/60 to-brand-950/60' : 'border-brand-800/50 hover:border-brand-600/50 hover:bg-brand-900/30'} transition-all duration-500 rounded-[1.5rem] p-5 md:p-6 cursor-pointer group overflow-hidden relative`}
                 >
                   {isOpen && <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[50px] rounded-full pointer-events-none"></div>}
                   
                   <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                     <div className="flex items-start gap-5 flex-1">
                       <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-500 ${isOpen ? 'bg-brand-primary/20 border-brand-primary/30 text-brand-primary' : 'bg-brand-900/80 border-brand-800 text-brand-400 group-hover:text-brand-300'}`}>
                         <faq.icon className="w-5 h-5 md:w-6 md:h-6" />
                       </div>
                       <div className="flex-1 md:pt-1">
                         <div className="flex items-center gap-3 mb-1 md:mb-2">
                           <span className="px-3 py-1 rounded-full bg-brand-900/80 border border-brand-800 text-[10px] uppercase font-bold tracking-widest text-brand-400">{faq.category}</span>
                         </div>
                         <h3 className={`text-base md:text-lg lg:text-xl transition-colors duration-300 ${isOpen ? 'text-white font-medium' : 'text-brand-100 font-light'}`}>{faq.question}</h3>
                       </div>
                     </div>
                     <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-500 ${isOpen ? 'border-brand-primary text-brand-primary rotate-180 bg-brand-primary/10' : 'border-brand-700/50 text-brand-500 group-hover:border-brand-500'}`}>
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </div>
                   </div>
                   
                   <div className={`overflow-hidden transition-all duration-700 ease-in-out relative z-10 ${isOpen ? 'max-h-[500px] opacity-100 mt-4 md:mt-6' : 'max-h-0 opacity-0'}`}>
                     <div className="pl-0 md:pl-[4.25rem] pr-0 md:pr-4 pt-4 md:pt-0">
                        <div className="h-px w-full bg-brand-800/50 mb-4 md:mb-6 hidden md:block"></div>
                        <p className="text-brand-200 text-sm md:text-base lg:text-lg border-t md:border-t-0 border-brand-800/50 pt-4 md:pt-0 leading-relaxed font-light">{faq.answer}</p>
                     </div>
                   </div>
                 </div>
               );
             })}
           </div>
        )}

        <div className="mt-12 bg-brand-900/40 border border-brand-800/50 rounded-3xl p-8 flex flex-col items-center text-center max-w-4xl mx-auto">
          <Info className="w-8 h-8 text-brand-500 mb-4" />
          <h4 className="text-xl text-white font-light mb-2">Still have questions?</h4>
          <p className="text-brand-400 mb-6">Your AI Concierge is available 24/7 to assist you with any specific requests.</p>
        </div>

      </div>
    </div>
  );
}
