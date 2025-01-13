import { useState } from 'react';

interface WalletState {
  connected: boolean;
  publicKey: string | null;
  connecting: boolean;
  error: string | null
}

export function useWallet() {
  const [state, setState] = useState<WalletState>({
    connected: false,
    publicKey: null,
    connecting: false,
    error: null
  });

  const getProvider = () => {
    const isPhantomInstalled = window.phantom?.solana?.isPhantom;
    if (!isPhantomInstalled) {
      return null;
    }

    if ('phantom' in window) {
      const provider = window.phantom?.solana;

      if (provider?.isPhantom) {
        return provider;
      }
    }
    return null;
  };

  const connect = async () => {
    try {
      setState(prev => ({ ...prev, connecting: true, error: null }));

      if (!getProvider()) {
        window.open('https://phantom.app/', '_blank');
        throw new Error('Please install Phantom wallet');
      }

      const response = await getProvider()!.connect();
      const publicKey = response.publicKey.toBase58();

      setState(prev => ({
        ...prev,
        connected: true,
        publicKey,
        connecting: false,
        error: null
      }));

      return publicKey;
    } catch (error) {
      console.error('Connection error:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to connect',
        connecting: false
      }));
      throw error;
    }
  };

  const signMessage = async (message: string): Promise<number[]> => {
    if (!getProvider()) {
      throw new Error('Phantom wallet not installed');
    }

    try {
      const encodedMessage = new TextEncoder().encode(message);
      const signedMessage = await getProvider()!.signMessage(encodedMessage);
      return Array.from((signedMessage as any).signature);
    } catch (error) {
      console.error('Signing error:', error);
      throw error;
    }
  };

  return {
    ...state,
    connect,
    signMessage,
    getProvider
  };
}