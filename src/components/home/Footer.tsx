import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="backdrop-blur-sm bg-white/30 border-t border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-sm text-emerald-700">
            © 2024 Sprout.trading. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/sprout_trading"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/SproutTrading"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;