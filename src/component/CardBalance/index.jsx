import React from "react";
import { useSelector } from "react-redux";
import cardBG from "../../assets/cardBalance.png";
import { getMonth } from "../../utils/getMonth";
import { setPrice } from "../../utils/setPrice";
function CardBalance(props) {
  const { data } = useSelector((state) => state.money);
  const filteredData = data ? data.filter((item) => {
    return getMonth(new Date(item.date).getMonth()) === props.month;
  }) : []

  const total = filteredData ?  filteredData.reduce((acc,current) => {
    return acc + (+current.biaya)
  },0) : 0

  return (
    <div
      className="border border-[#D8D8D8] rounded-[10px] text-black p-[30px] md:h-[23rem] lg:h-[200px] w-[100%]"
      style={{ background: `url(${cardBG}) no-repeat`, backgroundSize: "100%", }}
    >
      <h2 className="text-base md:text-lg font-semibold mb-[31px]">
        {props.month}
      </h2>
      <div className="flex flex-col gap-[5px]">
        <p className="text-xs md:text-base font-light">Total Pengeluaran</p>
        <p className="text-2xl md:text-3xl font-semibold">
          Rp{total ? setPrice(total) : "0"}
        </p>
      </div>
    </div>
  );
}

export default CardBalance;
