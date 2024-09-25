import React from "react";
import AllLaunches from "./container/AllLaunches";
import CreateTeleFun from "./container/CreateTeleFun.tsx";
import NotFound from "./container/NotFound";
import BuyPage from "./container/BuyPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params';
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import Profile from "./container/Profile.tsx";
import EditProfile from "./container/EditProfile";
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from "@web3modal/react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import './index.css';

const projectId = '4807d388fe495226b7fc14743af2e1d9'

const holesky = {
  id: 17000,
  network: "holesky",
  name: "Holesky",
  nativeCurrency: {
    name: "Holesky Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://ethereum-holesky-rpc.publicnode.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://holesky.etherscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 77,
    },
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      blockCreated: 801613,
    },
    ensUniversalResolver: {
      address: '0x2548a7E09deE955c4d97688dcB6C5b24085725f5',
      blockCreated: 815385,
    },
  },
  testnet: true,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    holesky,
    sepolia
  ],
  [w3mProvider({ projectId })],
)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains);


const App = () => {
  return (
    <Router>
      <QueryParamProvider>
        <div>
          <WagmiConfig config={config}>
            <Toaster
              position="top-right"
              reverseOrder={true}
              toastOptions={{ duration: 5000 }}
            >
              {(t) => (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toast.dismiss(t.id)}
                >
                  <ToastBar onClick={() => alert(1)} toast={t} />
                </div>
              )}
            </Toaster>
            <Switch>
              <Route exact path="/">
                <AllLaunches />
              </Route>
              <Route exact path="/AllLaunches">
                <AllLaunches />
              </Route>
              <Route exact path="/CreateTeleFun">
                <CreateTeleFun />
              </Route>
              <Route exact path="/Buy">
                <BuyPage />
              </Route>
              <Route exact path="/Profile">
                <Profile />
              </Route>
              <Route exact path="/EditProfile">
                <EditProfile />
              </Route>
              <Route exact path="/NotFound">
                <NotFound />
              </Route>
            </Switch>
          </WagmiConfig>
          <Web3Modal
            projectId={projectId}
            ethereumClient={ethereumClient}
          />
        </div>
      </QueryParamProvider>
    </Router>
  );
};

export default App;
