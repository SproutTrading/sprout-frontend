import React from 'react';
import { Download } from 'lucide-react';

interface BrandingPreviewProps {
  type: 'banner' | 'profile';
  imageUrl: string | null;
  onDownload: () => void;
}

const BrandingPreview: React.FC<BrandingPreviewProps> = ({ type, imageUrl, onDownload }) => {
  const dimensions = type === 'banner' ? '1500x500' : '400x400';
  const aspectRatio = type === 'banner' ? 'aspect-[3/1]' : 'aspect-square';
  const title = type === 'banner' ? 'Twitter Banner' : 'Profile Picture';

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-bold text-emerald-800">{title}</h2>
        <p className="text-sm text-emerald-600 mt-1">{dimensions} pixels, optimized for Twitter</p>
      </div>

      <div className="bg-white rounded-lg border-2 border-emerald-200 p-6">
        <div className={`relative w-full ${aspectRatio} bg-gradient-to-br from-emerald-50 to-white rounded-lg border-2 border-emerald-300 overflow-hidden`}>
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={onDownload}
            disabled={!imageUrl}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={16} />
            Download {type === 'banner' ? 'Banner' : 'Picture'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandingPreview;