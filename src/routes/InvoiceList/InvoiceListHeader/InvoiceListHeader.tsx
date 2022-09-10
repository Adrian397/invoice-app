import styled from "styled-components";
import { imgBasePath } from "../../../App.utils";

export const InvoiceListHeader = () => {
  return (
    <Header>
      <Info>
        <h1>Invoices</h1>
        <p>There are 7 total invoices</p>
      </Info>
      <Buttons>
        <Dropdown>
          <button>
            <span>Filter by status</span>
            <img src={imgBasePath + "icon-arrow-down.svg"} alt="arrow" />
          </button>
        </Dropdown>
        <NewInvoice>
          <img src={imgBasePath + "icon-plus.svg"} alt="add new invoice" />
          <span>New Invoice</span>
        </NewInvoice>
      </Buttons>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 4rem;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-weight: 700;
    color: rgba(12, 14, 22, 1);
    letter-spacing: -1px;
  }

  p {
    color: rgba(136, 142, 176, 1);
    font-weight: 500;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: rgba(12, 14, 22, 1);
  }

  button {
    display: flex;
    gap: 1rem;
    align-items: center;
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
`;

const NewInvoice = styled.button`
  display: flex;
  background-color: rgba(124, 93, 250, 1);
  color: white;
  padding: 0.4rem 0.5rem;
  gap: 0.5rem;
  border-radius: 24px;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    border-radius: 50%;
    background-color: white;
    padding: 0.8rem;
    margin-right: 0.5rem;
  }

  span {
    font-weight: 700;
    margin-right: 1rem;
    font-size: 0.9rem;
  }
`;
