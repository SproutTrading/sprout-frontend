import React, { useState } from 'react';
import Background from '../components/Background';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import BannerGenerator from '../components/branding/BannerGenerator';
import ProfilePictureGenerator from '../components/branding/ProfilePictureGenerator';
import BrandingPreview from '../components/branding/BrandingPreview';

const BrandingPage: React.FC = () => {
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [profileUrl, setProfileUrl] = useState<string | null>(null);

  const handleDownload = (type: 'banner' | 'profile') => {
    const url = type === 'banner' ? bannerUrl : profileUrl;
    if (!url) return;

    const link = document.createElement('a');
    link.href = url;
    link.download = type === 'banner' ? 'sprout-banner.png' : 'sprout-profile.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Background />
      <Header />
      
      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="container max-w-4xl mx-auto px-4 py-24">
            <div className="space-y-12">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-emerald-800">Branding Assets</h1>
                <p className="text-sm text-emerald-600 mt-2">
                  Official branding assets for Sprout.trading
                </p>
              </div>

              <BrandingPreview 
                type="banner"
                imageUrl={bannerUrl}
                onDownload={() => handleDownload('banner')}
              />

              <BrandingPreview 
                type="profile"
                imageUrl={profileUrl}
                onDownload={() => handleDownload('profile')}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Hidden generators */}
      <BannerGenerator onBannerGenerated={setBannerUrl} />
      <ProfilePictureGenerator onPictureGenerated={setProfileUrl} />
    </div>
  );
};

export default BrandingPage;