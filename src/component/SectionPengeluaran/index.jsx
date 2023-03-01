import React from "react";
import CardItem from "../CardItem";

function SectionPengeluaran(props) {
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
      <div className="container mx-auto px-8 mt-8 flex flex-col gap-4  overflow-y-scroll h-[50vh]">
        <CardItem title={"Makanan"} price={10000}/>
        <CardItem title={"Makanan"} price={10000}/>
        <CardItem title={"Makanan"} price={10000}/>
        <CardItem title={"Makanan"} price={10000}/>
        <CardItem title={"Makanan"} price={10000}/>
        <CardItem title={"Makanan"} price={10000}/>
        <CardItem title={"Makanan"} price={10000}/>
      </div>
    </>
  );
}

export default SectionPengeluaran;
