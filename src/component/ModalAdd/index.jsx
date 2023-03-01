import React from "react";
import Button from "../Button";
import FormAdd from "../FormAdd";

function ModalAdd(props) {
  return (
    <div className="bg-[#BDCDD6] py-3">
      <div className="container mx-auto mt-6">
        <div className="text-center relative z-10 flex justify-center items-center">
          <p className="text-primaryBlue bg-[#BDCDD6] px-4 text-md">
            Tambahkan Pengeluaran
          </p>
        </div>
        <hr className="relative bg-primaryBlue top-[-12px] z-0" />
      </div>
      <div >
        <FormAdd />
        <div className="flex justify-end px-8 mt-8">
            <p className="text-primaryBlue text-xs">
                *waktu pengeluaran otomatis terisi
            </p>
        </div>
        <div className="flex gap-2 justify-end px-8 mt-4 mb-3">
            <Button isDanger>Batalkan</Button>
            <Button>Tambahkan</Button>
        </div>
      </div>
    </div>
  );
}

export default ModalAdd;
