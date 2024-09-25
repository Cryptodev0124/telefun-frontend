import { createPublicClient, createWalletClient,  http } from 'viem'
import { mainnet, sepolia, holesky } from 'viem/chains'
import Web3 from 'web3'

export const multicallAddress = {
    11155111: "0x2166c19AD09e4C055e68726E47E2b9090C2c0dAe",
    17000: "0xfdFbb6076B1621d862CE5F61813391ACde8ac00E",
};
export const factoryAddress = {
    11155111: "0xE401d2aC9e52920059c43a975A42b9d8b1B29Ecb",
    17000: "0x02F74C9C857c4c77d4EE06480C204b34393E9df2",
};
export const contractAddress = "0x0000000000000000000000000000000000000000";
export const WETHAddress = {
    11155111: "0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa",
    17000: "0x94373a4919B3240D86eA41593D5eBa789FEF3848",
};
export const routerAddress = {
    11155111: "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008",
    17000: "0x81a80fED3F02867a1c27B6FF6979022607a13e55",
};
export const defaultAddress = "0x0000000000000000000000000000000000000000";

const PROVIDER_URL_SEP = 'https://ethereum-sepolia-rpc.publicnode.com'
export const web3Client = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL_SEP))

const PROVIDER_URL_HOL = 'https://ethereum-holesky-rpc.publicnode.com'
export const holeskyWeb3Client = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL_HOL))

export const web3Clients = {
    17000: holeskyWeb3Client,
    11155111: web3Client
}

export const scanLinks = {
    17000: 'https://holesky.etherscan.io/',
    11155111: 'https://sepolia.etherscan.io/'
}

export const scanApiLinks = {
    17000: 'https://api-holesky.etherscan.io/api',
    11155111: 'https://api-sepolia.etherscan.io/api'
}

export const publicClient = createPublicClient({
    chain: holesky,
    transport: http()
})

export const walletClient = createWalletClient({
    chain: mainnet,
    transport: http()
  })

export const supportedChainIds = [holesky.id, sepolia.id]

export const chainLogos = {
    17000: '/optimism.svg',
    11155111: '/eth.svg'
}

export const imageUrl = 'https://api.shitlordme.me/api/uploads/'

export const apiUrl = 'https://api.shitlordme.me'

export const ethPriceApiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'

export const imageUploadUrl = 'https://api.shitlordme.me/'

export default function formatNumber(number) {
    if (number >= 1000000) {
        return (number / 1000000).toLocaleString() + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toLocaleString() + 'K';
    } else {
        return number.toLocaleString();
    }
}