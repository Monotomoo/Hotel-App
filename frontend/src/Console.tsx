import { useState } from 'react';
import ChatPane from './ChatPane';
import ActionPane from './ActionPane';
import ActivitiesPane from './ActivitiesPane';
import EventsPane from './EventsPane';
import FAQPane from './FAQPane';
import AboutHotelPane from './AboutHotelPane';
import AboutRegionPane from './AboutRegionPane';
import BookTransferPane from './BookTransferPane';
import RestaurantPane from './RestaurantPane';
import { ArrowLeft, MessageSquare } from 'lucide-react';

type Tab = 'Chat' | 'Activities' | 'Events' | 'FAQ' | 'About Hotel' | 'About Region' | 'Kapetanova Kuča' | 'Transfers';

export default function Console({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>('Chat');

  return (
    <div className="w-full h-full flex flex-col bg-brand-900 text-brand-50 overflow-hidden animate-in fade-in duration-500 relative">
      {/* Dynamic Deep Sea Background */}
      <div className="absolute inset-0 bg-brand-950 z-0 overflow-hidden">
        {/* Deep ambient gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/10 via-brand-950 to-brand-950"></div>
        
        {/* Subtle Caustics & Flowing Orbs */}
        <div className="absolute top-[5%] left-[-10vw] w-[60vw] h-[60vw] bg-sky-500/5 rounded-[40%] blur-[100px] mix-blend-color-dodge animate-[spin_40s_linear_infinite] pointer-events-none"></div>
        <div className="absolute bottom-[-10vw] right-[-10vw] w-[50vw] h-[50vw] bg-brand-primary/10 rounded-[45%] blur-[120px] mix-blend-screen animate-[spin_30s_linear_infinite_reverse] pointer-events-none"></div>
        
        {/* Grain overlay for composite texture */}
        <div className="absolute inset-0 bg-brand-900/10 backdrop-blur-[1px]"></div>
      </div>

      {/* Header with Navigation Menu */}
      <header className="flex-none h-24 bg-brand-900/60 backdrop-blur-md border-b border-brand-800/50 flex flex-col justify-center px-6 md:px-8 shadow-sm z-10 relative">
        <div className="flex items-center justify-between w-full h-full relative">
          {/* Left Area */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0 z-20">
          <button 
            onClick={onBack}
            className="p-1.5 md:p-2 -ml-2 rounded-full hover:bg-brand-800 text-brand-300 hover:text-white transition-colors cursor-pointer flex items-center justify-center title-back"
            title="Go Back"
            aria-label="Go Back"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <h1 className="text-xl md:text-2xl font-light text-white tracking-tight hidden lg:block">Ostrea</h1>
          </div>

          {/* Centered Large Top Menu */}
          <nav className="absolute inset-x-0 w-full hidden md:flex justify-center items-center">
            <div className="flex items-center justify-center gap-1 xl:gap-2 2xl:gap-3 bg-brand-950/30 p-1 md:p-1.5 rounded-full border border-brand-800/50 shadow-inner overflow-hidden whitespace-nowrap">
              {(['Chat', 'Activities', 'Events', 'FAQ', 'About Hotel', 'About Region', 'Kapetanova Kuča', 'Transfers'] as Tab[]).map((item) => {
                const isActive = activeTab === item;
                return (
                  <button 
                    key={item} 
                    onClick={() => setActiveTab(item)}
                    className={`px-3 md:px-4 xl:px-5 py-1.5 md:py-2 xl:py-2.5 rounded-full text-xs md:text-sm xl:text-[15px] font-medium transition-all duration-300 cursor-pointer ${isActive ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/30 shadow-[0_0_15px_rgba(2,132,199,0.3)]' : 'text-brand-300 hover:text-white hover:bg-brand-800/80 border border-transparent'}`}>
                    {item}
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="flex items-center gap-3 shrink-0 z-20">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
          <span className="text-sm font-medium text-brand-300">AI Active</span>
        </div>
      </div>
    </header>

      {/* Main Content Area (Windowed layout) */}
      <main className="flex-1 flex min-h-0 relative z-10 p-4 md:p-6 lg:p-8 xl:p-12 gap-4 md:gap-6 lg:gap-8">
        {/* Left Pane: Dynamic Content + Chat */}
        <section className="w-full lg:w-[65%] min-w-[300px] flex flex-col gap-3 md:gap-4 relative isolate">
          
          {/* Main Left Content Panel */}
          <div className="transition-all duration-500 ease-in-out bg-brand-950/40 backdrop-blur-xl border border-brand-800/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col flex-1">
            {activeTab === 'Chat' && <ChatPane />}
            {activeTab === 'Activities' && <ActivitiesPane />}
            {activeTab === 'Events' && <EventsPane />}
            {activeTab === 'FAQ' && <FAQPane />}
            {activeTab === 'About Hotel' && <AboutHotelPane />}
            {activeTab === 'About Region' && <AboutRegionPane />}
            {activeTab === 'Kapetanova Kuča' && <RestaurantPane />}
            {activeTab === 'Transfers' && <BookTransferPane />}
          </div>

          {/* Collapsed Chat Bar (Visible when Chat is NOT the active tab) */}
          <div className={`transition-all duration-500 ease-in-out rounded-3xl flex-none overflow-hidden bg-brand-950/60 backdrop-blur-xl border-brand-800/50 shadow-xl ${activeTab === 'Chat' ? 'h-0 opacity-0 border-none' : 'h-[80px] opacity-100 border'}`}>
            <div className="p-3 w-full h-full">
              <div 
                onClick={() => setActiveTab('Chat')}
                className="w-full h-full bg-slate-100 hover:bg-white border border-slate-200 rounded-2xl px-6 flex items-center gap-4 text-brand-900 text-left cursor-pointer transition-all shadow-lg"
              >
                <MessageSquare className="w-6 h-6 text-brand-primary animate-pulse" />
                <span className="text-lg font-medium tracking-wide">Tap to chat with your AI Concierge...</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Pane: Actions & Forms Window */}
        <section className="hidden lg:flex lg:w-[35%] bg-gradient-to-br from-brand-900/60 to-brand-950/40 backdrop-blur-3xl border border-brand-700/40 rounded-3xl shadow-[0_0_50px_rgba(2,132,199,0.15)] flex-col overflow-hidden relative p-8 ring-1 ring-white/5">
          {/* subtle inner lighting for right pane differentiation */}
          <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-bl from-white/5 to-transparent pointer-events-none rounded-tr-3xl"></div>
          
          <ActionPane />
        </section>
      </main>
    </div>
  );
}
