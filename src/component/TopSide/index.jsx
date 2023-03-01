import React, { useEffect } from "react";
import topsideBg from "../../assets/topside-bg.png";
import { useDispatch, useSelector } from "react-redux";
import {setUser} from "../../store/reducer/moneySlice/moneySlice"
import Swal from "sweetalert2";
import moment from "moment";
function TopSide(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.money);
  useEffect(() => {
    if (!user) {
      Swal.fire({
        title: "<strong>Masukkan Nama Pengguna</strong>",
        icon: "info",
        html: `<input id="inputName" type="text" class="border rounded border-black px-3 py-1" />`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Create',
        confirmButtonAriaLabel: "Thumbs up, great!",
      }).then((result) => {
        if(result.isConfirmed){
          const name = document.getElementById("inputName").value.toUpperCase();
          dispatch(setUser(name))
        }
        else{
          window.location.reload()
        }
      });
    }
  }, []);
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
          {user && user}
        </h1>
      </div>
      <div className="flex flex-row justify-between p-8 pt-[30px] text-slate-300">
        <div className="flex flex-col text-xs">
          <h2>BULAN</h2>
          {/* <p>{props.bulan}</p> */}
          <p>{`${moment(new Date()).format("MMMM")}`.toUpperCase()}</p>
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
