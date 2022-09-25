import { ReactElement } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { imgBasePath, StyledProps } from "../../../App.utils";
import { Invoice } from "../../Root/Root.utils";
import { options } from "../InvoiceList.utils";

type Props = {
  item: Invoice;
  invoiceList: Invoice[];
};

const InvoiceListItem = ({ item, invoiceList }: Props): ReactElement => {
  const navigate = useNavigate();

  const handleInvoicePreview = (id: string) => {
    const invoice = invoiceList.find((invoice) => invoice.id === id);
    if (invoice) {
      navigate(`/invoice/${invoice.id}`);
    }
  };

  return (
    <ListItem onClick={() => handleInvoicePreview(item.id)}>
      <LeftItemProps>
        <ItemId>
          <span>#</span>
          <span>{item.id}</span>
        </ItemId>
        <ItemDate>
          <span>Due</span>
          <span>
            {new Date(item.paymentDue).toLocaleString("en-UK", options)}
          </span>
        </ItemDate>
        <ItemName>{item.clientName}</ItemName>
      </LeftItemProps>
      <RightItemProps>
        <ItemTotal>
          £ {item.total.toLocaleString("en", { minimumFractionDigits: 2 })}
        </ItemTotal>
        <ItemStatus status={item.status}>
          <div />
          <span>{item.status}</span>
        </ItemStatus>
        <img src={imgBasePath + "icon-arrow-right.svg"} alt="arrow" />
      </RightItemProps>
    </ListItem>
  );
};

const ListItem = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  height: 4.5rem;
  padding: 0 1.5rem 0 1.8rem;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid rgba(124, 93, 250, 1);
  }
`;

const LeftItemProps = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
`;

const RightItemProps = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 0.75rem;
    width: 0.5rem;
    margin-left: 1.5rem;
  }
`;

const ItemId = styled.span`
  width: 4rem;

  span:nth-of-type(1) {
    color: rgba(126, 136, 195, 1);
    font-weight: bold;
  }

  span:nth-of-type(2) {
    color: rgba(12, 14, 22, 1);
    font-weight: 700;
  }
`;

const ItemDate = styled.span`
  width: 7.5rem;

  span:nth-of-type(1) {
    color: rgba(136, 142, 176, 1);
    font-weight: 500;
    margin-right: 0.3rem;
  }

  span:nth-of-type(2) {
    color: rgba(126, 136, 195, 1);
    font-weight: 500;
  }
`;

const ItemName = styled.span`
  color: rgba(133, 139, 178, 1);
`;

const ItemTotal = styled.span`
  color: rgba(12, 14, 22, 1);
  font-weight: 700;
  font-size: 1.2rem;
`;

const ItemStatus = styled.div<StyledProps>`
  text-transform: capitalize;
  background-color: ${({ status }) =>
    status === "paid"
      ? "rgba(51, 214, 159, 0.06)"
      : status === "pending"
      ? "rgba(255, 143, 0, 0.06)"
      : status === "draft"
      ? "rgba(55, 59, 83, 0.06)"
      : ""};
  color: ${({ status }) =>
    status === "paid"
      ? "rgba(51, 214, 159, 1)"
      : status === "pending"
      ? "rgba(255, 143, 0, 1)"
      : status === "draft"
      ? "rgba(55, 59, 83, 1)"
      : ""};
  border-radius: 6px;
  height: 2.5rem;
  width: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-left: 2.5rem;

  div {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ status }) =>
      status === "paid"
        ? "rgba(51, 214, 159, 1)"
        : status === "pending"
        ? "rgba(255, 143, 0, 1)"
        : status === "draft"
        ? "rgba(55, 59, 83, 1)"
        : ""};
  }
`;

export default InvoiceListItem;
