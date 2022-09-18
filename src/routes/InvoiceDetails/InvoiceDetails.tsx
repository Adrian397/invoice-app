import { ReactElement } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { imgBasePath, StyledProps } from "../../App.utils";
import { useInvoiceData } from "../Root/Root";
import { Details } from "./Details/Details";

const InvoiceDetails = (): ReactElement => {
  const { invoiceList } = useInvoiceData();
  const { invoiceId } = useParams();
  const navigate = useNavigate();

  const invoice = invoiceList.find((invoice) => invoiceId === invoice.id);

  return (
    <Wrapper>
      <GoBack>
        <button onClick={() => navigate(-1)}>
          <img src={imgBasePath + "icon-arrow-left.svg"} alt="go back" />
          <span>Go back</span>
        </button>
      </GoBack>
      <InvoiceDetailsHeader>
        <LeftHeaderPart>
          <span>Status</span>
          <ItemStatus status={invoice?.status}>
            <div />
            <span>{invoice?.status}</span>
          </ItemStatus>
        </LeftHeaderPart>
        <RightHeaderPart>
          <button>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </RightHeaderPart>
      </InvoiceDetailsHeader>
      <Details invoice={invoice} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 60rem;
  margin: 5rem auto 0 auto;
  display: flex;
  flex-direction: column;
`;

const GoBack = styled.div`
  margin-bottom: 3rem;

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    margin-right: 1rem;
  }

  span {
    color: rgba(12, 14, 22, 1);
    font-weight: bold;
    font-size: 15px;
  }
`;

const InvoiceDetailsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  height: 5.5rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  padding: 0 2rem;
  margin-bottom: 2rem;

  & > span {
    color: rgba(133, 139, 178, 1);
    font-weight: 500;
  }
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

const LeftHeaderPart = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  & > span {
    color: rgba(133, 139, 178, 1);
    font-weight: 500;
  }
`;

const RightHeaderPart = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  button {
    padding: 1rem;
    border-radius: 24px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.25px;
    cursor: pointer;

    &:nth-of-type(1) {
      background-color: rgba(249, 250, 254, 1);
      color: rgba(126, 136, 195, 1);
    }

    &:nth-of-type(2) {
      background-color: rgba(236, 87, 87, 1);
      color: white;
    }

    &:nth-of-type(3) {
      background-color: rgba(124, 93, 250, 1);
      color: white;
    }
  }
`;

export default InvoiceDetails;
