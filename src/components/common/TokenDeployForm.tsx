import React, { useState, useRef } from 'react';
import { ImagePlus, AlertCircle, X, CheckCircle } from 'lucide-react';
import ValidationCheckmark from './ValidationCheckmark';
import { useAuthStore } from '../../store/useAuthStore';
import LoginForm from '../profile/LoginForm';

export type DeploymentConfig = {
  name: string;
  symbol: string;
  twitter: string;
  telegram: string;
  website: string;
  image: string | null;
  value: string,
  tip: string,
  private_key: string,
}

interface TokenDeployFormProps {
  onDeploy: (formData: DeploymentConfig) => void;
  disabled?: boolean;
}

const TokenDeployForm: React.FC<TokenDeployFormProps> = ({ onDeploy, disabled }) => {
  const { profile } = useAuthStore();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    symbol: '',
    twitter: '',
    telegram: '',
    website: '',
    value: '0.125',
    tip: '0.002',
    private_key: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [validation, setValidation] = useState({
    image: false,
    tokenInfo: false,
    socials: false
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new Image();
    img.onload = () => {
      if (img.width > 200 || img.height > 200) {
        alert('Image dimensions must be 200x200 pixels or smaller');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        setImagePreview(null);
        setValidation(prev => ({ ...prev, image: false }));
        return;
      }
      setValidation(prev => ({ ...prev, image: true }));
    };

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    img.src = URL.createObjectURL(file);
  };

  const validateTokenInfo = () => {
    const isValid = formData.name.trim() !== '' && formData.symbol.trim() !== '';
    if (isValid !== validation.tokenInfo) {
      setValidation(prev => ({ ...prev, tokenInfo: isValid }));
    }
  };

  const validateSocials = () => {
    const isValid = formData.twitter.trim() !== '' &&
      formData.telegram.trim() !== '' &&
      formData.website.trim() !== '';
    if (isValid !== validation.socials) {
      setValidation(prev => ({ ...prev, socials: isValid }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imagePreview || !profile) return;

    onDeploy({
      ...formData,
      image: imagePreview
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Token Image */}
      <div className="relative">
        <label className="block text-sm font-medium text-emerald-700 mb-2">
          Token Image (200x200px max)
        </label>
        <div className="flex items-start gap-4">
          <div className={`w-24 h-24 bg-emerald-50 rounded-lg border-2 border-dashed transition-colors flex items-center justify-center overflow-hidden ${validation.image ? 'border-emerald-500' : 'border-emerald-200'
            }`}>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Token preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <ImagePlus className="w-8 h-8 text-emerald-400" />
            )}
          </div>
          <div className="flex-1">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="token-image"
            />
            <label
              htmlFor="token-image"
              className="inline-block px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer text-sm"
            >
              Choose Image
            </label>
            <p className="text-xs text-emerald-600 mt-2">
              Upload a square image (200x200px max) for your token
            </p>
          </div>
        </div>
        {validation.image && <ValidationCheckmark />}
      </div>

      {/* Token Details */}
      <div className="grid grid-cols-2 gap-4 relative">
        <div>
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/f24M9Gv.png" alt="" className="w-4 h-4" />
            Token Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, name: e.target.value }));
              validateTokenInfo();
            }}
            onBlur={validateTokenInfo}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.tokenInfo ? 'border-emerald-500' : 'border-emerald-200'
              }`}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/2It0idh.png" alt="" className="w-4 h-4" />
            Token Ticker
          </label>
          <input
            type="text"
            value={formData.symbol}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, symbol: e.target.value.toUpperCase() }));
              validateTokenInfo();
            }}
            onBlur={validateTokenInfo}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors uppercase ${validation.tokenInfo ? 'border-emerald-500' : 'border-emerald-200'
              }`}
            required
          />
        </div>
        {validation.tokenInfo && <ValidationCheckmark />}
      </div>

      <div className="grid grid-cols-1 gap-4 relative">
        <div>
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/f24M9Gv.png" alt="" className="w-4 h-4" />
            Token Description
          </label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, description: e.target.value }));
              validateTokenInfo();
            }}
            onBlur={validateTokenInfo}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.tokenInfo ? 'border-emerald-500' : 'border-emerald-200'
              }`}
            required
          />
        </div>
        {validation.tokenInfo && <ValidationCheckmark />}
      </div>

      {/* Social Links */}
      <div className="space-y-4 relative">
        <div>
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/kru56Iz.png" alt="" className="w-4 h-4" />
            Twitter Username
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400">@</span>
            <input
              type="text"
              value={formData.twitter}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, twitter: e.target.value }));
                validateSocials();
              }}
              onBlur={validateSocials}
              className={`w-full pl-8 pr-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.socials ? 'border-emerald-500' : 'border-emerald-200'
                }`}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/geNC3VN.png" alt="" className="w-4 h-4" />
            Telegram Group
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400">t.me/</span>
            <input
              type="text"
              value={formData.telegram}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, telegram: e.target.value }));
                validateSocials();
              }}
              onBlur={validateSocials}
              className={`w-full pl-12 pr-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.socials ? 'border-emerald-500' : 'border-emerald-200'
                }`}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/iZz9b18.png" alt="" className="w-4 h-4" />
            Website URL
          </label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, website: e.target.value }));
              validateSocials();
            }}
            onBlur={validateSocials}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.socials ? 'border-emerald-500' : 'border-emerald-200'
              }`}
            placeholder="https://"
          />
        </div>
        {validation.socials && <ValidationCheckmark />}
      </div>

      {/* Wallet Connection */}
      {profile ? <div className="space-y-3">
        <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-500" />
          <span className="text-sm text-emerald-700">
            Connected account: Gardener #{String(profile.id).padStart(5, '0')}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/iZz9b18.png" alt="" className="w-4 h-4" />
            Deployer Private Key
          </label>
          <input
            type="text"
            value={formData.private_key}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, private_key: e.target.value }));
            }}
            className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-emerald-700">
              Developer purchase (SOL)
            </label>
            <input
              type="number"
              value={formData.value}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, value: e.target.value }));
                validateTokenInfo();
              }}
              step="0.001"
              min="0"
              className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-emerald-700">
              Jito Tip (SOL)
            </label>
            <input
              type="number"
              value={formData.tip}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, tip: e.target.value }));
                validateTokenInfo();
              }}
              step="0.0001"
              min="0"
              className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>
      </div> : <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl border border-emerald-200 p-6 animate-[fadeIn_0.3s_ease-out]">
          <button
            onClick={() => false}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="text-center space-y-4">
            <LoginForm displayTitle={true} />
          </div>
        </div>
      </div>
      }

      {/* Info Box */}
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-700">
          <p className="font-medium mb-1">Launch Requirements:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>$25 worth of Sprout v1 tokens will be purchased</li>
            <li>0.5% of token supply will be allocated to collector wallet</li>
            <li>Listed on Pump.fun, and if it migrates to Raydium</li>
            <li>Sufficient SOL balance for transaction fees and Jito tip</li>
            <li>Sufficient SOL balance to cover the $25 Sprout v1 purchase</li>
          </ul>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={disabled || !validation.image || !validation.tokenInfo || !validation.socials || !profile}
        className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Deploy Token
      </button>
    </form>
  );
};

export default TokenDeployForm;