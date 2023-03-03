import React, { useEffect, useState } from "react";
import ButtonAdd from "../ButtonAdd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { test } from "../../store/reducer/moneySlice/moneySlice";
import { getMonth } from "../../utils/getMonth";
import iconDown from "../../assets/iconDown.png";
import styles from "./setMonth.module.css";
function SetMonth(props) {
  const [month, setMonth] = useState(getMonth(new Date().getMonth()));
  const [active, setActive] = useState(false);
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/add");
  };
  const dispatch = useDispatch();

  const { total } = useSelector((state) => state.money);
  useEffect(() => {
    // dispatch(test())
  }, []);

  // Get the current month
  const currentMonth = new Date().getMonth();

  // Array of month names
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Find the index of the active month
  const activeIndex = months.findIndex(
    (month, index) => index === currentMonth
  );

  // Move the active month to the beginning of the array
  const filteredMonths = [
    months[activeIndex],
    ...months.slice(activeIndex+1, months.length -1),
    ...months.slice(0, activeIndex),
  ];

  // Use state to keep track of the currently active button
  const [activeButton, setActiveButton] = useState(filteredMonths[0]);

  // Handle button click by updating the active button state
  const handleClickMonth = (month) => {
    setActiveButton(month);
    // console.log("month >> ", month)
    props.setMonth(month)
  }
  // Loop through the months and create buttons
  const buttons = filteredMonths.map((month) => {
    // Add the active class to the active month
    const className = `${styles["item"]} font-semibold ${
      month === activeButton ? "text-[#FCD108]" : "text-[#B3B3B3]"
    }`;

    return (
      <button key={month} className={className} onClick={() => handleClickMonth(month)}>
        {month}
      </button>
    );
  });

  return (
    <div className="flex flex-row justify-between items-center px-8">
      <div className="flex flex-col gap-1 overflow-hidden">
        <h3 className="text-black text-base font-medium">Bulan</h3>
        <div className="max-w-xs md:max-w-[100%] md:flex md:justify-center">
          <div className={`${styles["container"]} overflow-x-auto p-4`}>
            {buttons}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetMonth;
