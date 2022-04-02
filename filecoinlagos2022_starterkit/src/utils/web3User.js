import { useMoralis } from "react-moralis";
import Moralis from "moralis";
const { authenticate, isAuthenticated, isAuthenticating, user, logout } =
  useMoralis();

export const connectWallet = async (moralisOptions) => {
  if (!isAuthenticated) {
    await authenticate({
      provider: window.ethereum ? null : "walletConnect",
      ...moralisOptions,
    })
      .then(function (user) {
        console.log("logged in user:", user);
        return user?.get("ethAddress");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

export const AuthenticationState = {
  isAuthenticated: isAuthenticated,
  isAuthenticating: isAuthenticating,
  user: user,
};

export const logOut = async () => {
  await logout();
  console.log("logged out");
};

/**
 * A function for connecting a contract with a web3 provider and a signer
 * sample usage: 
 * ...
 * import { contractWithSigner } from "utils/web3User";
 * const ABI = [
    "function name() view returns (string)",
    ...
  ];
 * contractWithSigner("0x0b83cd769f1cdd05052bc392ef1ff73bb412c483", ABI).name(); 
 */
export const contractWithSigner = async (contractAddress, ABI) => {
  let web3Provider = window.ethereum
    ? await Moralis.enableWeb3()
    : await Moralis.enableWeb3({ provider: "walletConnect" });
  let signer = web3Provider.getSigner();
  console.log(web3Provider);
  const Contract = new ethers.Contract(contractAddress, ABI, web3Provider);
  return Contract.connect(signer);
};
