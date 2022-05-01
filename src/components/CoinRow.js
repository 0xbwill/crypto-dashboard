import React from "react";

const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td className="flex">
        <img
          src={coin.image}
          alt=""
          className="rounded-lg m-3"
          style={{ width: "9%" }}
        />
        <div className="tokenContainer">
        <span>{coin.name}</span>
        <span>({coin.symbol.toUpperCase()})</span>
        </div>
      </td>

      <td>${coin.current_price.toLocaleString()}</td>

      <td className={coin.price_change_percentage_24h > 0 ? "text-[#22c55e]" : "text-[#ef4444]"}>
        {parseFloat(coin.price_change_percentage_24h).toFixed(2)} %
      </td>

      <td>
        ${coin.total_volume.toLocaleString()}
      </td>
    </tr>
  );
};

export default CoinRow;
