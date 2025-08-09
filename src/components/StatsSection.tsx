const StatsSection = () => {
  return (
    <section className="relative px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Separator Line */}
        <div className="w-full h-px bg-white/20 mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-2">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                <span className="text-sm font-bold text-text-primary">01</span>
              </div>
              <div className="text-4xl font-bold text-text-primary">500+</div>
            </div>
            <p className="text-text-secondary">
              <span className="font-semibold">Successful</span> members
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-2">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                <span className="text-sm font-bold text-text-primary">02</span>
              </div>
              <div className="text-4xl font-bold text-text-primary">5,000=</div>
            </div>
            <p className="text-text-secondary">
              <span className="font-semibold">Followers</span> generated
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-2">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                <span className="text-sm font-bold text-text-primary">03</span>
              </div>
              <div className="text-4xl font-bold text-text-primary">Satisfied Clients</div>
            </div>
            <p className="text-text-secondary">
              <span className="font-semibold">3k+</span> Satisfied Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;