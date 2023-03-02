import React, { useEffect } from "react";
import topsideBg from "../../assets/topside-bg.png";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/reducer/moneySlice/moneySlice";
import Swal from "sweetalert2";
import moment from "moment";
import Navbar from "../Navbar";
import CardBalance from "../CardBalance";
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
        if (result.isConfirmed) {
          const name = document.getElementById("inputName").value;
          dispatch(setUser(name));
        } else {
          window.location.reload();
        }
      });
    }
  }, []);
  return (
    <div className="container mx-auto mb-[88px]" >
      <div className="px-[30px] pt-[40px] ">
        <Navbar user={user} />
      </div>
      <div className="flex flex-row justify-between px-[30px] pt-[28px]">
        <CardBalance month={`${new Date().getMonth()}`} />
      </div>
    </div>
  );
}

export default TopSide;
