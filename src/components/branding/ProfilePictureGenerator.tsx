import React, { useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';

interface ProfilePictureGeneratorProps {
  onPictureGenerated: (url: string) => void;
}

const ProfilePictureGenerator: React.FC<ProfilePictureGeneratorProps> = ({ onPictureGenerated }) => {
  const pictureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generatePicture = async () => {
      if (!pictureRef.current) return;

      try {
        const canvas = await html2canvas(pictureRef.current, {
          width: 400,
          height: 400,
          scale: 4, // High scale for crisp output
          backgroundColor: '#f0fdf4',
          logging: false,
          useCORS: true,
          imageTimeout: 0,
          removeContainer: true
        });

        const url = canvas.toDataURL('image/png', 1.0);
        onPictureGenerated(url);
      } catch (error) {
        console.error('Error generating profile picture:', error);
      }
    };

    setTimeout(generatePicture, 2000);
  }, [onPictureGenerated]);

  return (
    <div 
      ref={pictureRef}
      className="fixed -left-[9999px] w-[400px] h-[400px] pointer-events-none bg-gradient-to-br from-emerald-50 to-white"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main circle container */}
        <div className="w-[360px] h-[360px] rounded-full bg-emerald-50 border-4 border-emerald-400 flex items-center justify-center overflow-hidden">
          {/* Sprout image */}
          <img 
            src="https://i.imgur.com/AtCOTrU.png"
            alt="Sprout"
            className="w-[240px] h-[240px] object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureGenerator;