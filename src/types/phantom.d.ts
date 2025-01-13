declare interface Window {
  phantom?: {
    solana?: {
      isPhantom?: boolean;
      connect: () => Promise<{ publicKey: { toBase58: () => string } }>;
      disconnect: () => Promise<void>;
      signMessage: (message: Uint8Array) => Promise<Uint8Array>;
      on: (event: string, callback: () => void) => void;
      off: (event: string, callback: () => void) => void;
    };
  };
}