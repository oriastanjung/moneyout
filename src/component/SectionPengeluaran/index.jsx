import React from "react";
import CardItem from "../CardItem";
import { useSelector } from "react-redux";
import moment from "moment";
import ButtonAdd from "../ButtonAdd";
import { useNavigate } from "react-router-dom";
import { getMonth } from "../../utils/getMonth";

function SectionPengeluaran(props) {
  const { data } = useSelector((state) => state.money);
  const dataFilter = data ? data.filter((item) => {
    return getMonth(new Date(item.date).getMonth()) === props.month;
  }) : []
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/add");
  };
  return (
    <>
      <div className="container mt-12 px-[30px]">
        <p className="text-black bg-white text-base font-medium">
          Riwayat Pengeluaran
        </p>
      </div>
      <div className="container mx-auto px-[30px] mt-8 flex flex-col gap-4  overflow-y-scroll h-[30vh]">
        
        {dataFilter &&
          dataFilter.map((item) => {
            return (
              <CardItem
                title={item.pengeluaran}
                price={item.biaya}
                date={item.date}
              />
            );
          })}
      </div>
      <div className="sticky bottom-[7%] flex justify-end px-[40px] z-10">
        <ButtonAdd onClick={handleClick} />
      </div>
    </>
  );
}

export default SectionPengeluaran;
