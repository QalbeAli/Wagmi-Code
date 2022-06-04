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
  name: 'BSC',
  network: 'Smart Chain',
  iconUrl: 'https://cdn.cdnlogo.com/logos/b/91/bnb.svg',
  iconBackground: '#fff',
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
  name: 'SCT',
  iconUrl: 'https://cdn.cdnlogo.com/logos/b/91/bnb.svg',
  iconBackground: '#fff',
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
  [
    // alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider({priority:0}),
    jsonRpcProvider({
      priority:1,
      rpc: (chain) => ({ rpcUrl: chain.rpcUrls.default, })
    }),
  ]
)

// [jsonRpcProvider({
//   rpc: (chain) => ({ rpcUrl: chain.rpcUrls.default })
// }),
// publicProvider()],

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

  // const [contract, setContract] = useState(null)

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
      })}>
        <Component {...pageProps}  />
      </RainbowKitProvider>
    </WagmiConfig>
  )

}

export default MyApp
