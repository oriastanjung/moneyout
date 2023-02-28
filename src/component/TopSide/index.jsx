import React from "react";
import topsideBg from "../../assets/topside-bg.png";
function TopSide(props) {
  return (
    <div
      className="container mx-auto h-[260px] "
      style={{
        background: `url(${topsideBg}) no-repeat`,
        backgroundSize: "100%",
      }}
    >
      <div className="p-8 pt-[72px] ">
        {/* <h1>{props.username}</h1> */}
        <h1 className="text-[25px] text-slate-300 font-medium">
          O. Riastanjung
        </h1>
      </div>
      <div className="flex flex-row justify-between p-8 pt-[30px] text-slate-300">
        <div className="flex flex-col text-xs">
            <h2>BULAN</h2>
            {/* <p>{props.bulan}</p> */}
            <p>FEBRUARI</p>
        </div>
        <div className="flex flex-col text-xs">
            <h2>JAKARTA TIMUR</h2>
            <p>RAWAMANGUN</p>
        </div>
      </div>
    </div>
  );
}

export default TopSide;
