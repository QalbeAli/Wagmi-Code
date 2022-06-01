import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@rainbow-me/rainbowkit/styles.css';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  getDefaultWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { darkTheme } from '@rainbow-me/rainbowkit';

/////////////////////////// BSC Chain Configuration /////////////////////////
const SmartChain = {
  id: 56,
  name: 'Binance Smart Chain',
  nativeCurrency: {
    decimals: 18,
    name: ' Binance Smart Chain',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org/',
  },
  blockExplorers: {
    etherscan: { name: 'Bscscan', url: 'https://bscscan.com' },
    default: { name: 'Bscscan', url: 'https://bscscan.com' },
  },
  testnet: false,
}
///////////////////// BSC TestNet configuration //////////////////////////////////
const SmartChainTestNet = {
  id: 97,
  name: 'Smart Chain Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Smart Chain',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  },
  blockExplorers: {
    etherscan: { name: 'Bscscan', url: 'https://testnet.bscscan.com' },
    default: { name: 'Bscscan', url: 'https://testnet.bscscan.com' },
  },
  testnet: true,
}

const { chains, provider } = configureChains(
  [SmartChain, SmartChainTestNet],
  [jsonRpcProvider({
    rpc: (chain) => ({ rpcUrl: chain.rpcUrls.default })
  }),
  publicProvider()],
)

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
