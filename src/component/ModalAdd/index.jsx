import React from "react";
import Button from "../Button";
import FormAdd from "../FormAdd";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalAdd(props) {
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
      <div id="form" className="bg-[#BDCDD6] py-3">
        <div className="container mx-auto mt-6">
          <div className="text-center relative z-10 flex justify-center items-center">
            <p className="text-primaryBlue bg-[#BDCDD6] px-4 text-md">
              Tambahkan Pengeluaran
            </p>
          </div>
          <hr className="relative bg-primaryBlue top-[-12px] z-0" />
        </div>
        <div>
          <FormAdd />
        </div>
      </div>
    </>
  );
}

export default ModalAdd;
