import screen1 from '../assets/screen-1.png'
import screen2 from '../assets/screen-2.png'
import screen3 from '../assets/screen-3.png'
import screen4 from '../assets/screen-4.png'

export default function AppPreview() {
  return (
    <section className="py-16 sm:py-24 bg-magpie-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-magpie-black mb-4">
            See it in action
          </h2>
          <p className="text-lg text-magpie-dark max-w-2xl mx-auto">
            Whether it's articles to read later, inspiration, or important links, StashBin keeps everything in one place.
          </p>
        </div>
        
        {/* Screenshots */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Main screenshot */}
          <div className="relative">
            <div className="w-64 sm:w-72 bg-magpie-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full bg-magpie-charcoal rounded-[2.5rem] overflow-hidden">
                <img 
                  src={screen1} 
                  alt="StashBin main screen showing saved links" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Second main screenshot */}
          <div className="relative">
            <div className="w-64 sm:w-72 bg-magpie-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full bg-magpie-charcoal rounded-[2.5rem] overflow-hidden">
                <img 
                  src={screen2} 
                  alt="StashBin link detail view" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Side screenshots (hidden on mobile) */}
          <div className="hidden lg:flex flex-col gap-6">
            {/* Third screenshot */}
            <div className="w-48 bg-magpie-black rounded-[2rem] p-2 shadow-xl">
              <div className="w-full bg-magpie-charcoal rounded-[1.75rem] overflow-hidden">
                <img 
                  src={screen3} 
                  alt="StashBin categories view" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Fourth screenshot */}
            <div className="w-48 bg-magpie-black rounded-[2rem] p-2 shadow-xl">
              <div className="w-full bg-magpie-charcoal rounded-[1.75rem] overflow-hidden">
                <img 
                  src={screen4} 
                  alt="StashBin settings or additional view" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
