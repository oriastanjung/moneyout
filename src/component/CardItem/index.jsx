import React from "react";
import iconDrink from "../../assets/iconDrink.png";
import iconFood from "../../assets/iconFood.png";
import iconOtherThings from "../../assets/iconOtherThings.png";
import { getMonth } from "../../utils/getMonth";

function CardItem(props) {
  return (
    <div className="flex items-center gap-5 ">
      <div className="bg-white ">
        <img
          src={`${
            props.title && props.title.toLowerCase().includes("minuman")
              ? iconDrink
              : props.title.toLowerCase().includes("makanan")
              ? iconFood
              : iconOtherThings
          }`}
          alt=""
          className="w-[36px] h-[36px]"
        />
      </div>
      <div className="flex items-center justify-between grow">
        <div className="flex flex-col gap-[4px]">
          <h5 className="text-[14px] font-medium  ">{props.title}</h5>
          <p className="text-[10px] text-[#B3B3B3]">
            {new Date(props.date).getDate()} {" "}
            {getMonth(new Date(props.date).getMonth())} { " "}
            {new Date(props.date).getFullYear()}
          </p>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#F82727]">Rp.{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
