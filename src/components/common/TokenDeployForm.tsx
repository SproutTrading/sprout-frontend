import React, { useState, useRef } from 'react';
import { ImagePlus, AlertCircle, CheckCircle, Check } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useDesktopWindows } from '../../hooks/useDesktopWindows';
import { useWindowManager } from '../../hooks/useWindowManager';
import Window from '../Window';
import UnifiedProfile from '../profile/UnifiedProfile';
import ProfileIcon from '../icons/ProfileIcon';
import { SignInMessageSignerWalletAdapterProps } from '@solana/wallet-adapter-base';
import { Wallet } from '@solana/wallet-adapter-react';
export type FormKeys = 'name' | 'symbol' | 'description' | 'twitter' | 'telegram' | 'website' | 'value' | 'tip';
export type DeploymentConfig = {
  name: string;
  symbol: string;
  twitter: string;
  telegram: string;
  website: string;
  image: string | null;
  value: string,
  tip: string
}

interface TokenDeployFormProps {
  onDeploy: (formData: DeploymentConfig) => void;
  disabled?: boolean;
  signIn: SignInMessageSignerWalletAdapterProps['signIn'] | undefined;
  wallet: Wallet | null;
}

const TokenDeployForm: React.FC<TokenDeployFormProps> = ({ onDeploy, disabled, wallet, signIn }) => {
  const desktopRef = useRef<HTMLDivElement>(null);
  const {
    windows,
    minimized,
    handleToggleWindow,
    handleMinimize,
  } = useDesktopWindows();
  const { getZIndex, bringToFront } = useWindowManager();
  const { profile } = useAuthStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    description: '',
    symbol: '',
    twitter: '',
    telegram: '',
    website: '',
    value: '0.001',
    tip: '0.002'
  });
  const [validation, setValidation] = useState({
    image: false,
    name: false,
    description: false,
    symbol: false,
    twitter: false,
    telegram: false,
    website: false,
    value: true,
    tip: true
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
        setFormData(prev => ({ ...prev, image: '' }));
        setValidation(prev => ({ ...prev, image: false }));
        return;
      }
      setValidation(prev => ({ ...prev, image: true }));
    };

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
    img.src = URL.createObjectURL(file);
  };

  const validate = (key: FormKeys) => {
    const isValid = formData[key].trim() !== '';
    const val = formData[key].trim();
    switch (key) {
      case 'twitter':
        {
          const regex = /^[A-Za-z0-9_]{1,15}$/;
          if (!regex.test(val)) {
            setValidation(prev => ({ ...prev, [key]: false }));
            return;
          }
        }
        break;
      case 'telegram':
        {
          const regex = /^[a-zA-Z0-9_]{1,20}$/;
          if (!regex.test(val)) {
            setValidation(prev => ({ ...prev, [key]: false }));
            return;
          }
        }
        break;
      case 'website':
        {
          const regex = /^(https?|ftp):\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;%=]*)?$/;
          if (!regex.test(val)) {
            setValidation(prev => ({ ...prev, [key]: false }));
            return;
          }
        }
        break;
    }
    if (isValid !== validation[key]) {
      setValidation(prev => ({ ...prev, [key]: isValid }));
    }
  };

  const isValidForm = () => {
    let keys = Object.keys(validation) as FormKeys[];
    let non_valid = keys.find(key => !validation[key])

    return !non_valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidForm() || !profile) return;

    onDeploy({
      ...formData
    });
  };

  return (<>
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Token Image */}
      <div className="relative">
        <label className="block text-sm font-medium text-emerald-700 mb-2">
          Token Image (200x200px max)
        </label>
        <div className="flex items-start gap-4">
          <div className={`w-24 h-24 bg-emerald-50 rounded-lg border-2 border-dashed transition-colors flex items-center justify-center overflow-hidden ${validation.image ? 'border-emerald-500' : 'border-red-500'
            }`}>
            {formData.image ? (
              <img
                src={formData.image}
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
      </div>

      {/* Token Details */}
      <div className="grid grid-cols-2 gap-4 relative">
        <div className="relative">
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/f24M9Gv.png" alt="" className="w-4 h-4" />
            Token Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, name: e.target.value }));
              validate('name');
            }}
            onKeyUp={() => validate('name')}
            onBlur={() => validate('name')}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.name ? 'border-emerald-500' : 'border-red-500'
              }`}
            required
          />
          <div style={{ top: 12.5, right: -5, position: 'absolute' }}
            className={"absolute rounded-full flex items-center justify-center " + (validation.name ? 'bg-emerald-500 w-5 h-5' : 'w-6 h-6')}
          >
            {
              validation.name ? <Check className="w-3 h-3 text-white stroke-[3]" /> : <img src='https://i.imgur.com/GccdDTc.png' />
            }
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/2It0idh.png" alt="" className="w-4 h-4" />
            Token Ticker
          </label>
          <input
            type="text"
            value={formData.symbol}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, symbol: e.target.value.toUpperCase() }));
              validate('symbol');
            }}
            onKeyUp={() => validate('symbol')}
            onBlur={() => validate('symbol')}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors uppercase ${validation.symbol ? 'border-emerald-500' : 'border-red-500'
              }`}
            required
          />
          <div style={{ top: 12.5, right: -5, position: 'absolute' }}
            className={"absolute rounded-full flex items-center justify-center " + (validation.symbol ? 'bg-emerald-500 w-5 h-5' : 'w-6 h-6')}
          >
            {
              validation.symbol ? <Check className="w-3 h-3 text-white stroke-[3]" /> : <img src='https://i.imgur.com/GccdDTc.png' />
            }
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 relative">
        <div className="relative">
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/ES7HTbh.png" alt="" className="w-4 h-4" />
            Token Description
          </label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, description: e.target.value }));
              validate('description');
            }}
            onKeyUp={() => validate('description')}
            onBlur={() => validate('description')}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.description ? 'border-emerald-500' : 'border-red-500'
              }`}
            required
          />
          <div style={{ top: 12.5, right: -5, position: 'absolute' }}
            className={"absolute rounded-full flex items-center justify-center " + (validation.description ? 'bg-emerald-500 w-5 h-5' : 'w-6 h-6')}
          >
            {
              validation.description ? <Check className="w-3 h-3 text-white stroke-[3]" /> : <img src='https://i.imgur.com/GccdDTc.png' />
            }
          </div>
        </div>
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
                validate('twitter');
              }}
              onKeyUp={() => validate('twitter')}
              onBlur={() => validate('twitter')}
              className={`w-full pl-8 pr-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.twitter ? 'border-emerald-500' : 'border-red-500'
                }`}
            />
            <div style={{ top: -7.5, right: -5, position: 'absolute' }} className={"absolute rounded-full flex items-center justify-center " + (validation.twitter ? 'bg-emerald-500 w-5 h-5' : 'w-6 h-6')}
            >
              {
                validation.twitter ? <Check className="w-3 h-3 text-white stroke-[3]" /> : <img src='https://i.imgur.com/GccdDTc.png' />
              }
            </div>
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
                validate('telegram');
              }}
              onKeyUp={() => validate('telegram')}
              onBlur={() => validate('telegram')}
              className={`w-full pl-12 pr-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.telegram ? 'border-emerald-500' : 'border-red-500'
                }`}
            />
            <div style={{ top: -7.5, right: -5, position: 'absolute' }} className={"absolute rounded-full flex items-center justify-center " + (validation.telegram ? 'bg-emerald-500 w-5 h-5' : 'w-6 h-6')}
            >
              {
                validation.telegram ? <Check className="w-3 h-3 text-white stroke-[3]" /> : <img src='https://i.imgur.com/GccdDTc.png' />
              }
            </div>
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-emerald-700 mb-1 flex items-center gap-2">
            <img src="https://i.imgur.com/iZz9b18.png" alt="" className="w-4 h-4" />
            Website URL
          </label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, website: e.target.value }));
              validate('website');
            }}
            onKeyUp={() => validate('website')}
            onBlur={() => validate('website')}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors ${validation.website ? 'border-emerald-500' : 'border-red-500'
              }`}
            placeholder="https://"
          />
          <div style={{ top: 12.5, right: -5, position: 'absolute' }}
            className={"absolute rounded-full flex items-center justify-center " + (validation.website ? 'bg-emerald-500 w-5 h-5' : 'w-6 h-6')}
          >
            {
              validation.website ? <Check className="w-3 h-3 text-white stroke-[3]" /> : <img src='https://i.imgur.com/GccdDTc.png' />
            }
          </div>
        </div>
      </div>

      {/* Wallet Connection */}
      {wallet != undefined && signIn != undefined && profile ? <div className="space-y-3">
        <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-500" />
          <span className="text-sm text-emerald-700">
            Connected account: Gardener #{String(profile.id).padStart(5, '0')}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1 relative">
            <label className="block text-sm font-medium text-emerald-700">
              Developer purchase (SOL)
            </label>
            <input
              type="number"
              value={formData.value}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, value: e.target.value }));
                validate('value');
              }}
              onKeyUp={() => validate('value')}
              onBlur={() => validate('value')}
              step="0.001"
              min="0"
              className={"w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors " + (validation.value ? 'focus:border-emerald-400 border-emerald-400' : 'focus:border-red-400 border-red-500')}
            />
            <div style={{ top: 12.5, right: -5, position: 'absolute' }} className={"absolute rounded-full flex items-center justify-center " + (validation.value ? 'bg-emerald-500 w-5 h-5' : 'w-6 h-6')}
            >
              {
                validation.value ? <Check className="w-3 h-3 text-white stroke-[3]" /> : <img src='https://i.imgur.com/GccdDTc.png' />
              }
            </div>
          </div>

          <div className="space-y-1 relative">
            <label className="block text-sm font-medium text-emerald-700">
              Jito Tip (SOL)
            </label>
            <input
              type="number"
              value={formData.tip}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, tip: e.target.value }));
                validate('tip');
              }}
              onKeyUp={() => validate('tip')}
              onBlur={() => validate('tip')}
              step="0.0001"
              min="0"
              className={"w-full px-3 py-2 bg-white border rounded-lg focus:outline-none transition-colors " + (validation.tip ? 'focus:border-emerald-400 border-emerald-400' : 'focus:border-red-400 border-red-500')}
            />
            <div style={{ top: 12.5, right: -5, position: 'absolute' }} className={"absolute rounded-full flex items-center justify-center " + (validation.tip ? 'bg-emerald-500 w-5 h-5' : 'w-6 h-6')}
            >
              {
                validation.tip ? <Check className="w-3 h-3 text-white stroke-[3]" /> : <img src='https://i.imgur.com/GccdDTc.png' />
              }
            </div>
          </div>
        </div>
      </div> : <div>
        <button type="button"
          onClick={() => {
            handleToggleWindow('profile', true);
            bringToFront('profile');
          }}
          className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all"
        >
          <img src="https://i.imgur.com/k1c0SFG.png" alt="Phantom" className="w-5 h-5" />
          Sign with Phantom Wallet
        </button>
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
        disabled={disabled || !profile || !isValidForm() || !wallet || !signIn}
        className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Deploy Token
      </button>

    </form>
    <Window
      title="Profile"
      isOpen={windows.profile && !minimized.profile}
      onClose={() => handleToggleWindow('profile', false)}
      onMinimize={() => handleMinimize('profile')}
      icon={ProfileIcon}
      containerRef={desktopRef}
      zIndex={getZIndex('profile')}
      onFocus={() => bringToFront('profile')}
    >
      <UnifiedProfile />
    </Window>
  </>);
};

export default TokenDeployForm;