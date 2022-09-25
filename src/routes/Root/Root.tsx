import { ReactElement, useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { Bar } from "../../components/Bar/Bar";
import { Invoice } from "./Root.utils";

const Root = (): ReactElement => {
  const [invoiceList, setInvoiceList] = useState<Invoice[]>([]);

  useEffect(() => {
    setInvoiceList(
      JSON.parse(window.localStorage.getItem("invoiceData") || "[]")
    );

    const fetchData = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();

      window.localStorage.setItem("invoiceData", JSON.stringify(data));

      setInvoiceList(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Bar />
      <Outlet context={{ invoiceList, setInvoiceList }} />
    </div>
  );
};

export const useInvoiceData = () => {
  return useOutletContext<{
    invoiceList: Invoice[];
    setInvoiceList: React.Dispatch<React.SetStateAction<Invoice[]>>;
  }>();
};

export default Root;
