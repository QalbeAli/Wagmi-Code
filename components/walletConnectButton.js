import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from "../styles/WalletConnectButton.module.css"

export const Connect = ({ btnText }) => {

    return (
        <ConnectButton.Custom >
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                // console.log(account);
                
                return (
                    <div
                        {...(!mounted && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!mounted || !account || !chain) {
                                if (btnText === "btnNavBar") {
                                    return (
                                        < button className={styles.connectButton} onClick={openConnectModal} type="button" >
                                            Connect Wallet
                                        </button>
                                    );
                                } else
                                    return (
                                        <button className={styles.btn4} onClick={openConnectModal} type="button">Connect Wallet to Stake</button>
                                    );
                            }

                            if (chain.unsupported) {
                                return (
                                    <button onClick={openChainModal} type="button">
                                        Wrong network
                                    </button>
                                );
                            }
                            return (
                                <div className={styles.chainBtnDiv} style={{ display: 'flex', gap: 12 }}>
                                    <button
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                        className={styles.network}
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 35,
                                                    height: 35,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src="binance-coin-bnb.svg"
                                                        className={styles.chainIcon}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        &nbsp;&nbsp;{chain.name}
                                    </button>

                                    <button className={styles.address} onClick={openAccountModal} type="button">
                                        {/* {`${account.address.slice(0, 7)}...${account.address.slice(-4)}`} */}
                                        <span className={styles.level1}>Level 1</span>&nbsp;&nbsp;
                                        {account.address
                                            ? `${account.address.slice(0, 7)}...${account.address.slice(-4)}`
                                            : ''}
                                        <img src="ellipse1.png" className={styles.img1}></img>
                                    </button>

                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom >
    );
};