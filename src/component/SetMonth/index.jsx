import React, { useEffect, useState } from "react";
import ButtonAdd from "../ButtonAdd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { test } from "../../store/reducer/moneySlice/moneySlice";
import { getMonth } from "../../utils/getMonth";
import iconDown from "../../assets/iconDown.png";
import styles from "./setMonth.module.css"
function SetMonth(props) {
  const [month, setMonth] = useState(getMonth(new Date().getMonth()))
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/add");
  };
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setMonth(e.target.value)
  }

  const checkActive = (e) => {
    console.log("e.terget.innerHtml >> ", e.target.innerHTML)
    if(getMonth(new Date().getMonth()) === e.target.innerHTML){
      e.target.style.color = "#EAB225"
    }
  }
  const { total } = useSelector((state) => state.money);
  useEffect(() => {
    // dispatch(test())
  }, []);
  return (
    <div className="flex flex-row justify-between items-center px-8">
      <div className="flex flex-col gap-1">
        <h3 className="text-black text-base font-medium">Bulan</h3>
        {/* <select onChange={handleChange} className=" flex flex-row items-center gap-1 text-black text-xs font-medium bg-white" value={month}>
          <option className="text-black text-xs font-medium" value={"Januari"}>
            Januari
          </option>
          <option className="text-black text-xs font-medium" value={"Februari"}>
            Februari
          </option>
          <option className="text-black text-xs font-medium" value={"Maret"}>
            Maret
          </option>
          <option className="text-black text-xs font-medium" value={"April"}>
            April
          </option>
          <option className="text-black text-xs font-medium" value={"Mei"}>
            Mei
          </option>

          <option className="text-black text-xs font-medium" value={"Juni"}>
            Juni
          </option>

          <option className="text-black text-xs font-medium" value={"Juli"}>
            Juli
          </option>

          <option className="text-black text-xs font-medium" value={"Agustus"}>
            Agustus
          </option>
          <option
            className="text-black text-xs font-medium"
            value={"September"}
          >
            September
          </option>
          <option className="text-black text-xs font-medium" value={"Oktober"}>
            Oktober
          </option>
          <option className="text-black text-xs font-medium" value={"November"}>
            November
          </option>
          <option className="text-black text-xs font-medium" value={"Desember"}>
            Desember
          </option>
        </select> */}
        <div className="max-w-sm">
        <div className={`${styles["container"]} overflow-auto p-4`}>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            Januari
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            Februari
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            Maret
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            April
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            Mei
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            Juni
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            Juli
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            Agustus
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            September
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            Oktober
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            November
          </button>
          <button className={`${styles["item"]} font-semibold  text-[#B3B3B3]`} >
            Desember
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SetMonth;
