import { ReactElement } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useInvoiceData } from "../Root/Root";

type Props = {};

const InvoiceDetails = ({}: Props): ReactElement => {
  const { invoiceList } = useInvoiceData();
  const { invoiceId } = useParams();

  const invoice = invoiceList.find((invoice) => invoiceId === invoice.id);

  console.log(invoiceId);

  return <Box>{invoice?.id}</Box>;
};

const Box = styled.div`
  margin: 0 auto;
  width: 50rem;
`;

export default InvoiceDetails;
