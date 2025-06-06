
import HomeStatusOrb from './HomeStatusOrb';
import LightingModule from './LightingModule';
import ClimateModule from './ClimateModule';
import SecurityModule from './SecurityModule';
import EnergyModule from './EnergyModule';
import ScenesModule from './ScenesModule';
import QuickStats from './QuickStats';
import RecentActivity from './RecentActivity';
import WeatherWidget from './WeatherWidget';
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-6 sm:space-y-10 w-full mx-auto">
      {/* Home Status Section with enhanced layout */}
      <div className="flex flex-col items-center justify-center mb-6 sm:mb-10 relative">
        <div className="absolute w-52 sm:w-64 h-52 sm:h-64 bg-cosmic-teal/5 rounded-full blur-3xl -z-10"></div>
        <HomeStatusOrb size={isMobile ? "md" : "lg"} />
        <div className="mt-4 text-center">
          <h2 className="font-orbitron text-xl sm:text-2xl bg-gradient-to-r from-white via-cosmic-teal to-white bg-clip-text text-transparent">Comfort Level</h2>
          <p className="text-sm sm:text-base text-white/70">All systems operational</p>
        </div>
      </div>
      
      {/* Quick Statistics Row */}
      <section className="mb-6 sm:mb-10">
        <QuickStats />
      </section>
      
      {/* Quick Scene Access - Consistent Section */}
      <section className="mb-6 sm:mb-10">
        <div className="flex items-center mb-4 sm:mb-6">
          <h2 className="font-orbitron text-lg sm:text-xl text-white">Quick Scenes</h2>
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-cosmic-teal/30 to-transparent ml-4"></div>
        </div>
        <ScenesModule />
      </section>
      
      {/* Weather and Recent Activity - Equal Height Section */}
      <section className="mb-6 sm:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-1 h-full">
            <WeatherWidget />
          </div>
          <div className="lg:col-span-2 h-full">
            <RecentActivity />
          </div>
        </div>
      </section>
      
      {/* Main Control Panels - Equal Sections with Consistent Styling */}
      <section className="mb-6 sm:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <div className="relative h-full">
            <div className="absolute w-full h-full bg-cosmic-amber/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
            <LightingModule />
          </div>
          <div className="relative h-full">
            <div className="absolute w-full h-full bg-cosmic-teal/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
            <ClimateModule />
          </div>
        </div>
      </section>
      
      {/* Second Row of Control Panels - Equal Height and Consistent with First Row */}
      <section className="mb-6 sm:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <div className="relative h-full">
            <div className="absolute w-full h-full bg-cosmic-teal/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
            <SecurityModule />
          </div>
          <div className="relative h-full">
            <div className="absolute w-full h-full bg-cosmic-amber/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
            <EnergyModule />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
