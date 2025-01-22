import { ButtonProps } from '@mui/material';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useEffect, useMemo, useRef, useState } from 'react';


type Props = ButtonProps & {
    labels: Omit<
        { [TButtonState in ReturnType<typeof useWalletMultiButton>['buttonState']]: string },
        'connected' | 'disconnecting'
    > & {
        'copy-address': string;
        copied: string;
        'change-wallet': string;
        disconnect: string;
    };
};

export function BaseWalletMultiButton({ children, labels, ...props }: Props) {
    const { setVisible: setModalVisible } = useWalletModal();
    const { buttonState, onConnect, onDisconnect, publicKey } = useWalletMultiButton({
        onSelectWallet() {
            setModalVisible(true);
        },
    });
    const [copied, setCopied] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const ref = useRef<HTMLUListElement>(null);
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const node = ref.current;

            // Do nothing if clicking dropdown or its descendants
            if (!node || node.contains(event.target as Node)) return;

            setMenuOpen(false);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, []);
    const content = useMemo(() => {
        if (children) {
            return children;
        } else if (publicKey) {
            const base58 = publicKey.toBase58();
            return base58.slice(0, 4) + '..' + base58.slice(-4);
        } else if (buttonState === 'connecting' || buttonState === 'has-wallet') {
            return labels[buttonState];
        } else {
            return labels['no-wallet'];
        }
    }, [buttonState, children, labels, publicKey]);
    return (
        <div className="wallet-adapter-dropdown">
            {/* <BaseWalletConnectionButton
                {...props}
                aria-expanded={menuOpen}
                style={{ pointerEvents: menuOpen ? 'none' : 'auto', ...props.style }}
                onClick={() => {
                    switch (buttonState) {
                        case 'no-wallet':
                            setModalVisible(true);
                            break;
                        case 'has-wallet':
                            if (onConnect) {
                                onConnect();
                            }
                            break;
                        case 'connected':
                            setMenuOpen(true);
                            break;
                    }
                }}
                walletIcon={walletIcon}
                walletName={walletName}
            >
                123   {content}
            </BaseWalletConnectionButton> */}

            <button type="button"

                aria-expanded={menuOpen}
                style={{ pointerEvents: menuOpen ? 'none' : 'auto', ...props.style }}
                onClick={() => {
                    switch (buttonState) {
                        case 'no-wallet':
                            setModalVisible(true);
                            break;
                        case 'has-wallet':
                            if (onConnect) {
                                onConnect();
                            }
                            break;
                        case 'connected':
                            setMenuOpen(true);
                            break;
                    }
                }}
                className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all">
                <img src="https://i.imgur.com/k1c0SFG.png" alt="Phantom" className="w-5 h-5" />
                {content}
                {/* {walletIcon && walletName ? walletName! : 'Sign with Phantom Wallet'} */}

            </button>
            <ul
                aria-label="dropdown-list"
                className={`wallet-adapter-dropdown-list ${menuOpen && 'wallet-adapter-dropdown-list-active'}`}
                ref={ref}
                role="menu"
            >
                {publicKey ? (
                    <li
                        className="wallet-adapter-dropdown-list-item"
                        onClick={async () => {
                            await navigator.clipboard.writeText(publicKey.toBase58());
                            setCopied(true);
                            setTimeout(() => setCopied(false), 400);
                        }}
                        role="menuitem"
                    >
                        {copied ? labels['copied'] : labels['copy-address']}
                    </li>
                ) : null}
                <li
                    className="wallet-adapter-dropdown-list-item"
                    onClick={() => {
                        setModalVisible(true);
                        setMenuOpen(false);
                    }}
                    role="menuitem"
                >
                    {labels['change-wallet']}
                </li>
                {onDisconnect ? (
                    <li
                        className="wallet-adapter-dropdown-list-item"
                        onClick={() => {
                            onDisconnect();
                            setMenuOpen(false);
                        }}
                        role="menuitem"
                    >
                        {labels['disconnect']}
                    </li>
                ) : null}
            </ul>
        </div>
    );
}


const LABELS = {
    'change-wallet': 'Change wallet',
    connecting: 'Connecting ...',
    'copy-address': 'Copy address',
    copied: 'Copied',
    disconnect: 'Disconnect',
    'has-wallet': 'Connect',
    'no-wallet': 'Sign with Phantom Wallet',
} as const;

export function WalletMultiButton(props: ButtonProps) {
    return <BaseWalletMultiButton {...props} labels={LABELS} />;
}
