import { ReactElement } from "react";
import styled from "styled-components";
import { useInvoiceData } from "../Root/Root";
import { InvoiceListHeader } from "./InvoiceListHeader/InvoiceListHeader";
import InvoiceListItem from "./InvoiceListItem/InvoiceListItem";

type Props = {};

const InvoiceList = (props: Props): ReactElement => {
  const { invoiceList } = useInvoiceData();

  return (
    <div>
      <InvoiceListHeader />
      <List>
        {invoiceList.map((item) => {
          return (
            <InvoiceListItem
              key={item.id}
              item={item}
              invoiceList={invoiceList}
            />
          );
        })}
      </List>
    </div>
  );
};

const List = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default InvoiceList;
