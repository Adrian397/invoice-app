import { ReactElement } from "react";
import styled from "styled-components";
import { options } from "../../../InvoiceList/InvoiceList.utils";
import { Invoice } from "../../../Root/Root.utils";

type Props = {
  invoice?: Invoice;
};

export const BillingPart = ({ invoice }: Props): ReactElement => {
  return (
    <Billing>
      <Description>
        <h3>
          <span>#</span>
          {invoice?.id}
        </h3>
        <p>{invoice?.description}</p>
      </Description>
      <SenderAddress>
        <p>{invoice?.senderAddress.street}</p>
        <p>{invoice?.senderAddress.city}</p>
        <p>{invoice?.senderAddress.postCode}</p>
        <p>{invoice?.senderAddress.country}</p>
      </SenderAddress>
      <Dates>
        <InvoiceDate>
          <p>Invoice Date</p>
          <h3>
            {new Date(invoice ? invoice?.createdAt : "").toLocaleString(
              "en-UK",
              options
            )}
          </h3>
        </InvoiceDate>
        <PaymentDue>
          <p>Payment Due</p>
          <h3>
            {new Date(invoice ? invoice?.paymentDue : "").toLocaleString(
              "en-UK",
              options
            )}
          </h3>
        </PaymentDue>
      </Dates>

      <Client>
        <p>Bill to</p>
        <h3>{invoice?.clientName}</h3>
        <ClientAddress>
          <p>{invoice?.clientAddress.street}</p>
          <p>{invoice?.clientAddress.city}</p>
          <p>{invoice?.clientAddress.postCode}</p>
          <p>{invoice?.clientAddress.country}</p>
        </ClientAddress>
      </Client>
      <ClientEmail>
        <p>Sent to</p>
        <h3>{invoice?.clientEmail}</h3>
      </ClientEmail>
    </Billing>
  );
};

const Billing = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Description = styled.div`
  h3 {
    color: rgba(12, 14, 22, 1);
    margin-bottom: 0.75rem;
    span {
      color: rgba(136, 142, 176, 1);
    }
  }

  p {
    color: rgba(126, 136, 195, 1);
  }
`;

const SenderAddress = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.3rem;
  grid-column: 4/5;
  color: rgba(126, 136, 195, 1);
`;

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InvoiceDate = styled.div`
  p:nth-of-type(1) {
    color: rgba(126, 136, 195, 1);
    margin-bottom: 0.75rem;
  }

  h3 {
    color: rgba(12, 14, 22, 1);
  }
`;

const PaymentDue = styled.div`
  p:nth-of-type(1) {
    color: rgba(126, 136, 195, 1);
    margin-bottom: 0.75rem;
  }

  h3 {
    color: rgba(12, 14, 22, 1);
  }
`;

const Client = styled.div`
  & > p {
    margin-bottom: 0.75rem;
    color: rgba(126, 136, 195, 1);
  }

  h3 {
    margin-bottom: 0.5rem;
  }
`;
const ClientAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: rgba(126, 136, 195, 1);
`;

const ClientEmail = styled.div`
  grid-column: span 2;
  p {
    margin-bottom: 0.75rem;
    color: rgba(126, 136, 195, 1);
  }

  h3 {
    color: rgba(12, 14, 22, 1);
  }
`;
