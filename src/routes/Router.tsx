import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceDetails from "./InvoiceDetails/InvoiceDetails";
import InvoiceList from "./InvoiceList/InvoiceList";
import Root from "./Root/Root";

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<InvoiceList />} />
          <Route path="/invoice/:invoiceId" element={<InvoiceDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
