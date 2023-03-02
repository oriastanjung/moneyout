import React from "react";
import TopSide from "../../component/TopSide";
import SetMonth from "../../component/SetMonth";
import SectionPengeluaran from "../../component/SectionPengeluaran";
import ButtonAdd from "../../component/ButtonAdd";
import { useNavigate } from "react-router-dom";
function Home() {
  
  return (
    <div>
      <TopSide />
      <SetMonth />
      <SectionPengeluaran />
      
    </div>
  );
}

export default Home;
