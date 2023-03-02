import React from "react";
import TopSide from "../../component/TopSide";
import SetMonth from "../../component/SetMonth";
import SectionPengeluaran from "../../component/SectionPengeluaran";
import ButtonAdd from "../../component/ButtonAdd";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/add");
  };
  return (
    <div>
      <TopSide />
      <SetMonth />
      <SectionPengeluaran />
      <div className=" flex grow items-end justify-end px-[30px]">
        <div className="absolute bottom-[10px] z-10">
          <ButtonAdd onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Home;
