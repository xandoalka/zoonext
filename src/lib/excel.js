import * as XLSX from "xlsx";
import { axiosInstance } from "./axios";
import { useMutation } from "@tanstack/react-query";

export const useImportExcel = ({ onSuccess }) => {
   const { mutate: mutationImport } = useMutation({
      mutationFn: (jsonData) => {
         return axiosInstance.post("/data/import", jsonData);
      },
      onSuccess,
   });

   const importExcel = async (event) => {
      event.preventDefault();
      const file = event.target.files[0];
      const data = await file.arrayBuffer(); // Membaca file sebagai array buffer
      const workbook = XLSX.read(data); // Menggunakan library xlsx untuk membaca file
      const jsonData = XLSX.utils.sheet_to_json(
         workbook.Sheets[workbook.SheetNames[0]]
      ); 
      mutationImport(jsonData); // Mengirim data JSON ke server
   };

   return { importExcel };
};

export const exportExcel = (data) => {
   const worksheet = XLSX.utils.json_to_sheet(data);
   const workbook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
   XLSX.writeFile(workbook, "data.xlsx");
};
