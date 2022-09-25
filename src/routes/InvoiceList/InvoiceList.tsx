import { ReactElement, useMemo, useState } from "react";
import styled from "styled-components";
import { imgBasePath } from "../../App.utils";
import { useInvoiceData } from "../Root/Root";
import { InvoiceListHeader } from "./InvoiceListHeader/InvoiceListHeader";
import InvoiceListItem from "./InvoiceListItem/InvoiceListItem";

const InvoiceList = (): ReactElement => {
  const { invoiceList } = useInvoiceData();

  const [activeStatuses, setActiveStauses] = useState<string[]>([]);

  const filteredInvoices = useMemo(() => {
    if (activeStatuses.length === 0) {
      return invoiceList;
    }
    return invoiceList.filter((invoice) =>
      activeStatuses.includes(invoice.status)
    );
  }, [activeStatuses, invoiceList]);

  // const filteredInvoicesWithoutMemo = activeStatuses.length === 0 ? invoiceList : invoiceList.filter(invoice => activeStatuses.includes(invoice.status));

  return (
    <Wrapper>
      <InvoiceListHeader
        activeStatuses={activeStatuses}
        setActiveStauses={setActiveStauses}
        filteredInvoices={filteredInvoices}
      />
      {invoiceList && (
        <List>
          {filteredInvoices.map((item) => {
            return (
              <InvoiceListItem
                key={item.id}
                item={item}
                invoiceList={invoiceList}
              />
            );
          })}
        </List>
      )}
      {!invoiceList.length && (
        <NoListItems>
          <img src={imgBasePath + "illustration-empty.svg"} alt="no invoices" />
          <h1>There is nothing here</h1>
          <p>
            Create an invoice by clicking the <br />
            <strong>New Invoice</strong> button and get started
          </p>
        </NoListItems>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 60rem;
  margin: 5rem auto 0 auto;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NoListItems = styled.div`
  width: max-content;
  margin: 0 auto;
  text-align: center;

  img {
    margin: 6rem 0 4rem 0;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: rgba(12, 14, 22, 1);
  }

  p {
    color: rgba(136, 142, 176, 1);
    font-size: 1rem;
    line-height: 18px;
  }
`;

export default InvoiceList;
