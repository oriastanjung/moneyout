import React, { useState } from "react";
import TopSide from "../../component/TopSide";
import SetMonth from "../../component/SetMonth";
import SectionPengeluaran from "../../component/SectionPengeluaran";
import ButtonAdd from "../../component/ButtonAdd";
import { useNavigate } from "react-router-dom";
import { getMonth } from "../../utils/getMonth";
function Home() {
  const [month, setMonth] = useState(getMonth(new Date().getMonth()))
  const getActiveMonth = (data) => {
    setMonth(data)
  }
  return (
    <div className="container mx-auto">
      <TopSide month={month}/>
      <SetMonth setMonth={getActiveMonth}/>
      <SectionPengeluaran month={month} />
      
    </div>
  );
}

export default Home;
