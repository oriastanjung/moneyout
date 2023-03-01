import React from "react";
import CardItem from "../CardItem";
import { useSelector } from "react-redux";
import moment from "moment";

function SectionPengeluaran(props) {
  const { data } = useSelector((state) => state.money)
  return (
    <>
      <div className="container mx-auto mt-6">
        <div className="text-center relative z-10 flex justify-center items-center">
          <p className="text-whiteTitle bg-white px-4 text-xs">
            Pengeluaran Terakhir
          </p>
        </div>
        <hr className="relative top-[-8px] z-0" />
      </div>
      <div className="container mx-auto px-8 mt-8 flex flex-col gap-4  overflow-y-scroll h-[40vh]">
        {data && data.map((item) => {
          return <CardItem  title={item.pengeluaran} price={item.biaya} date={moment(new Date(item.date)).format("MMMM")}/>
        })}
        
      </div>
    </>
  );
}

export default SectionPengeluaran;
