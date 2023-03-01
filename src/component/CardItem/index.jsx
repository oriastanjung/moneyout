import React from "react";
import iconDrink from "../../assets/iconDrink.png";
import iconFood from "../../assets/iconFood.png";
import iconOtherThings from "../../assets/iconOtherThings.png";

function CardItem(props) {
  return (
    <div className="flex items-center gap-5 bg-[#f6f6f6] px-[13px] py-[15px]">
      <div className="bg-white p-2 flex items-center justify-center">
        <img src={`${props.title && props.title.toLowerCase().includes("minuman") ? iconDrink : props.title.toLowerCase().includes("makanan") ? iconFood : iconOtherThings}`} alt="" className="w-[20px] h-[20px]" />
      </div>
      <div className="flex items-center justify-between grow">
        <div>
          <h5 className="text-xs text-primaryBlue">{props.title}</h5>
          <p className="text-[10px] text-whiteTitle">Hari Ini, 28 Feb</p>
        </div>
        <div>
          <p className="text-xs text-primaryBlue">Rp.{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
