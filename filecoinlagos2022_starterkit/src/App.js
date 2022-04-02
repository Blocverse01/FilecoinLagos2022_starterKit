import logo from "./logo.svg";
import "./App.css";
import { connectWallet } from "./utils/web3User";
import { useState } from "react";

function App() {
  const [userWallet, setUserWallet] = useState("Connect Wallet");
  const login = async () => {
    let connectedWallet = await connectWallet({
      signingMessage: "Build with filecoin",
      chainId: 97,
    });
    setUserWallet(connectedWallet);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            login();
          }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noref
          errer"
        >
          {userWallet}
        </button>
      </header>
    </div>
  );
}

export default App;
