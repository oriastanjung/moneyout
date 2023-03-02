import React from "react";
import CardItem from "../CardItem";
import { useSelector } from "react-redux";
import moment from "moment";

function SectionPengeluaran(props) {
  const { data } = useSelector((state) => state.money)
  return (
    <>
      <div className="container mt-12 px-[30px]">
          <p className="text-black bg-white text-base font-medium">
            Riwayat Pengeluaran
          </p>
      </div>
      <div className="container mx-auto px-[30px] mt-8 flex flex-col gap-4  overflow-y-scroll h-[40vh]">
        {data && data.map((item) => {
          return <CardItem  title={item.pengeluaran} price={item.biaya} date={item.date}/>
        })}
        
      </div>
    </>
  );
}

export default SectionPengeluaran;
