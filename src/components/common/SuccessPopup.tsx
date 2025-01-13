import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { formatAddress } from '../../lib/format_address';

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  display_name: string;
  gardenerId: string;
  public_key: string;
  autoCloseDelay?: number;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({
  isOpen,
  onClose,
  display_name,
  gardenerId,
  public_key,
  autoCloseDelay = 5000
}) => {
  useEffect(() => {
    if (isOpen) {
      // Trigger confetti
      const end = Date.now() + 1000;

      // Launch multiple confetti bursts
      const frame = () => {
        confetti({
          particleCount: 25,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 }
        });

        confetti({
          particleCount: 25,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 }
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();

      // Auto close after delay
      const timer = setTimeout(onClose, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, autoCloseDelay]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl border border-emerald-200 p-6 animate-[fadeIn_0.3s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <img
              src="https://i.imgur.com/dVJ2OZf.png"
              alt="Success"
              className="w-8 h-8"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-emerald-800">
              Welcome, {display_name}!
            </h3>
            <p className="text-emerald-600">
              Your account has been successfully created.
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="text-emerald-700">
                You've been assigned{' '}
                <span className="font-bold">Gardener #{String(gardenerId).padStart(5, '0')}</span>
              </p>
              <p className="text-emerald-600 text-xs mt-1">
                Linked to wallet: {formatAddress(public_key)}
              </p>
            </div>

            <p className="text-emerald-600 italic">
              Make sure to contribute to our sprout to enter the leaderboards!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;