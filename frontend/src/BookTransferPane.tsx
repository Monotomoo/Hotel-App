import { Car, Plane, MapPin, Calendar, Star, PlaneTakeoff, PlaneLanding, Map, CarFront, Users } from 'lucide-react';
import { useState } from 'react';

export default function BookTransferPane() {
  const [submitted, setSubmitted] = useState(false);
  const [transferType, setTransferType] = useState('Airport Transfer');

  return (
    <div className="flex-1 flex flex-col h-full text-brand-50 overflow-hidden animate-in fade-in zoom-in-95 duration-500 rounded-3xl relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="p-8 pb-4 border-b border-brand-800/50 flex-none bg-brand-900/30 relative z-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-light text-white mb-2 tracking-wide flex items-center gap-3">
            <Car className="w-8 h-8 text-brand-primary" />
            Transfer Booking
          </h2>
          <p className="text-brand-300 text-sm">Seamless curated travel arrangements.</p>
        </div>
        <PlaneTakeoff className="w-12 h-12 text-brand-800 hidden sm:block" />
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 md:p-8 scroller relative z-10">
        {!submitted ? (
          <form 
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="w-full max-w-3xl mx-auto space-y-6 bg-brand-950/40 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-brand-800/50 shadow-xl"
          >
            {/* Transfer Type Selection */}
            <div className="space-y-3 mb-6">
              <label className="text-sm font-medium text-brand-300 block ml-1 uppercase tracking-wider">Service Type</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div onClick={() => setTransferType('Airport Transfer')} className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col items-center gap-2 relative overflow-hidden group ${transferType === 'Airport Transfer' ? 'bg-brand-primary/20 border-brand-primary text-white shadow-[0_0_15px_rgba(2,132,199,0.3)]' : 'bg-brand-900/50 border-brand-800 hover:border-brand-600 text-brand-300'}`}>
                  {transferType === 'Airport Transfer' && <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent pointer-events-none"></div>}
                  <PlaneLanding className={`w-8 h-8 mb-1 group-hover:-translate-y-1 transition-transform duration-300 ${transferType === 'Airport Transfer' ? 'text-brand-primary' : 'text-brand-400'}`} />
                  <div className="font-medium text-center">Airport Transfer</div>
                </div>
                <div onClick={() => setTransferType('Day Trip Transfer')} className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col items-center gap-2 relative overflow-hidden group ${transferType === 'Day Trip Transfer' ? 'bg-brand-primary/20 border-brand-primary text-white shadow-[0_0_15px_rgba(2,132,199,0.3)]' : 'bg-brand-900/50 border-brand-800 hover:border-brand-600 text-brand-300'}`}>
                  {transferType === 'Day Trip Transfer' && <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent pointer-events-none"></div>}
                  <Map className={`w-8 h-8 mb-1 group-hover:-translate-y-1 transition-transform duration-300 ${transferType === 'Day Trip Transfer' ? 'text-brand-primary' : 'text-brand-400'}`} />
                  <div className="font-medium text-center">Day Trip</div>
                </div>
                <div onClick={() => setTransferType('Regular Transfer')} className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col items-center gap-2 relative overflow-hidden group ${transferType === 'Regular Transfer' ? 'bg-brand-primary/20 border-brand-primary text-white shadow-[0_0_15px_rgba(2,132,199,0.3)]' : 'bg-brand-900/50 border-brand-800 hover:border-brand-600 text-brand-300'}`}>
                  {transferType === 'Regular Transfer' && <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent pointer-events-none"></div>}
                  <CarFront className={`w-8 h-8 mb-1 group-hover:-translate-y-1 transition-transform duration-300 ${transferType === 'Regular Transfer' ? 'text-brand-primary' : 'text-brand-400'}`} />
                  <div className="font-medium text-center">Regular Transfer</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-brand-300 block ml-1">Pickup Location</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                  <input type="text" className="w-full pl-12 pr-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-brand-900 placeholder:text-brand-400 shadow-inner" placeholder="E.g. Dubrovnik Airport (DBV)" required />
                </div>
              </div>
              
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-brand-300 block ml-1">Drop-off Location</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                  <input type="text" className="w-full pl-12 pr-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-brand-900 placeholder:text-brand-400 shadow-inner" defaultValue="Hotel Ostrea" required />
                </div>
              </div>

              {transferType === 'Airport Transfer' && (
                <div className="space-y-2 relative">
                  <label className="text-sm font-medium text-brand-300 block ml-1">Flight Number (If applicable)</label>
                  <div className="relative group">
                    <Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                    <input type="text" className="w-full pl-12 pr-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-brand-900 placeholder:text-brand-400 shadow-inner" placeholder="E.g. LH1234" />
                  </div>
                </div>
              )}

              {transferType === 'Day Trip Transfer' && (
                <div className="space-y-2 relative">
                  <label className="text-sm font-medium text-brand-300 block ml-1">Day Trip Destination</label>
                  <div className="relative group">
                    <Map className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                    <select aria-label="Day Trip Destination" className="w-full pl-12 pr-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-brand-900 appearance-none shadow-inner cursor-pointer" defaultValue="" required>
                      <option value="" disabled>Select a destination...</option>
                      <option value="Dubrovnik">Dubrovnik Old Town</option>
                      <option value="Korcula">Korčula Island</option>
                      <option value="Peljesac">Pelješac Wine Region</option>
                      <option value="Split">Split</option>
                      <option value="Other">Other (Please specify in requests)</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-brand-300 block ml-1">Date & Time</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                  <input type="datetime-local" className="w-full pl-12 pr-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-brand-900 placeholder:text-brand-400 shadow-inner" required />
                </div>
              </div>

              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-brand-300 block ml-1">Number of Passengers</label>
                <div className="relative group">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                  <input type="number" min="1" max="15" className="w-full pl-12 pr-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-brand-900 placeholder:text-brand-400 shadow-inner" placeholder="E.g. 2" required />
                </div>
              </div>

              <div className="space-y-2 relative sm:col-span-2">
                <label className="text-sm font-medium text-brand-300 block ml-1">Special Requests</label>
                <div className="relative group">
                  <Star className="absolute left-4 top-5 w-5 h-5 text-brand-500 group-focus-within:text-brand-primary transition-colors" />
                  <textarea className="w-full pl-12 pr-5 py-4 bg-white border border-brand-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-lg text-brand-900 placeholder:text-brand-400 shadow-inner min-h-[120px]" placeholder="Child seat needed, extra luggage, etc."></textarea>
                </div>
              </div>

            </div>
            
            <button type="submit" className="w-full cursor-pointer bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl py-5 text-xl font-medium transition-colors mt-4 shadow-[0_0_30px_rgba(2,132,199,0.3)] border border-brand-primary/50 group flex items-center justify-center gap-3">
              Confirm {transferType}
              <Car className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 bg-brand-950/30 p-12 rounded-[2rem] border border-brand-800/50 backdrop-blur-md animate-in fade-in zoom-in-95 mt-10">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex flex-col items-center justify-center border border-emerald-500/30">
              <Car className="w-12 h-12 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-3xl font-light text-white mb-2">Request Received</h3>
              <p className="text-brand-300 text-lg max-w-md mx-auto leading-relaxed">Your transfer request has been securely sent to our concierge desk. We will confirm your details and driver information via the email on file shortly.</p>
            </div>
            <button onClick={() => setSubmitted(false)} className="text-brand-primary hover:text-white transition-colors cursor-pointer pt-4 uppercase tracking-widest text-sm font-medium border-b border-transparent hover:border-white">Book Another Transfer</button>
          </div>
        )}
      </div>
    </div>
  );
}
