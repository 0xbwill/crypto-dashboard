import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#262626]">
      <section className="w-full px-3 antialiased bg-[#171717] lg:px-6">
        <nav className="flex items-center w-full h-24">
          <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
            <a
              href="#_"
              className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0 text-white text-2xl"
            >
              CryptoSearch
            </a>
            <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex">
              <div className="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center md:w-2/3 md:mt-0 md:flex-row md:items-center">
                  <input
                    className="input"
                    type="text"
                    autoFocus
                    placeholder="Rechercher une cryptomonnaie"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <a
                className="w-[180px] mr-[70px] text-white"
                href="https://github.com/0xbwill"
                target="_blank"
              >
              <button className="cssbuttons-io">
                <span>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                      fill="currentColor"
                    ></path>
                  </svg>{" "}
                  0xbwill's GitHub
                </span>
              </button>
                
              </a>
            </div>
          </div>
        </nav>
      </section>
      <TableCoins coins={coins} search={search} />
    </div>
  );
}

export default App;
