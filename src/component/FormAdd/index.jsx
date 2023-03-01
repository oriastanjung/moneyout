import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import InputWithLabel from "../InputWithLabel";
import { addToPengeluaran } from "../../store/reducer/moneySlice/moneySlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormAdd(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.money);
  const navigation = useNavigate();
  const [form, setForm] = useState({
    pengeluaran: "",
    biaya: "",
    date: new Date(),
  });
  const notifyError = () => {
    toast.error("Isi Semua Form!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const nofifySuccess = () => {
    toast.success("Pengeluaran Ditambah!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    navigation("/");
  };
  const handleAdd = () => {
    if (!form.pengeluaran || !form.biaya) {
      notifyError()
    } else {
      dispatch(addToPengeluaran(form));
      nofifySuccess();
      document.getElementById("form").style.display = "none";
      setTimeout(() => {
        navigation("/");
      }, 1000);
    }
  };
  useEffect(() => {}, [form]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="px-8 flex flex-col gap-4 mt-8">
        <InputWithLabel
          name={"pengeluaran"}
          label={"Pengeluaran"}
          placeholder={"Makanan - Fried Chicken"}
          type={"text"}
          onChange={handleChange}
          value={form.pengeluaran}
        />
        <InputWithLabel
          name={"biaya"}
          label={"Biaya"}
          placeholder={"10000"}
          type={"number"}
          onChange={handleChange}
          value={form.biaya}
        />
      </div>
      <div className="flex justify-end px-8 mt-8">
        <p className="text-primaryBlue text-xs">
          *waktu pengeluaran otomatis terisi
        </p>
      </div>
      <div className="flex gap-2 justify-end px-8 mt-4 mb-3">
        <Button isdanger={"true"} onClick={handleCancel}>
          Batalkan
        </Button>
        <Button onClick={handleAdd}>Tambahkan</Button>
      </div>
    </>
  );
}

export default FormAdd;
