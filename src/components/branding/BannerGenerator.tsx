import React, { useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';

interface BannerGeneratorProps {
  onBannerGenerated: (url: string) => void;
}

const BannerGenerator: React.FC<BannerGeneratorProps> = ({ onBannerGenerated }) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateBanner = async () => {
      if (!bannerRef.current) return;

      try {
        const canvas = await html2canvas(bannerRef.current, {
          width: 1500,
          height: 500,
          scale: 2,
          backgroundColor: '#f0fdf4',
          logging: false,
          useCORS: true
        });

        const url = canvas.toDataURL('image/png');
        onBannerGenerated(url);
      } catch (error) {
        console.error('Error generating banner:', error);
      }
    };

    // Small delay to ensure fonts and images are loaded
    setTimeout(generateBanner, 1000);
  }, [onBannerGenerated]);

  return (
    <div 
      ref={bannerRef}
      className="fixed -left-[9999px] w-[1500px] h-[500px] pointer-events-none bg-gradient-to-br from-emerald-50 to-white"
      style={{ fontFamily: '"Ubuntu Mono", monospace' }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <div className="text-[72px] font-bold text-emerald-800">
          Sprout.trading
        </div>
        <div className="flex items-center gap-3 text-xl text-emerald-600">
          <span>Contribute</span>
          <div className="flex items-center gap-3">
            <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-8 h-8" />
            <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-8 h-8" />
            <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-8 h-8" />
          </div>
          <span>to support our sprout and earn token allocation rewards</span>
        </div>
      </div>
    </div>
  );
};

export default BannerGenerator;