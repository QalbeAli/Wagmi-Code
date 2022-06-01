import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@rainbow-me/rainbowkit/styles.css';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  getDefaultWallets,
  RainbowKitProvider,
  Chain
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { darkTheme } from '@rainbow-me/rainbowkit';

const binanceSmartChain = {
  id: 56,
  name: 'Smart Chain',
  network: 'Smart Chain',
  iconUrl: 'https://cdn.cdnlogo.com/logos/b/91/bnb.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Smart Chain',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://bscscan.com' },
    etherscan: { name: 'BscScan', url: 'https://bscscan.com' },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [binanceSmartChain],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== binanceSmartChain.id) return null
        return { http: chain.rpcUrls.default }
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
      })}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )

}

export default MyApp
