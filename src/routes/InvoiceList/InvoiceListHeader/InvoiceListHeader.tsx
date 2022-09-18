import { useState } from "react";
import styled from "styled-components";
import { imgBasePath, StyledProps } from "../../../App.utils";

export const InvoiceListHeader = () => {
  const statuses = ["Draft", "Pending", "Paid"];

  const [isVisible, setIsVisible] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(statuses.length).fill(false)
  );

  const handleCheckboxChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <Header>
      <Info>
        <h1>Invoices</h1>
        <p>There are 7 total invoices</p>
      </Info>
      <Buttons>
        <Dropdown>
          <button onClick={() => setIsVisible((prevState) => !prevState)}>
            <span>Filter by status</span>
            <Arrow
              isVisible={isVisible}
              src={imgBasePath + "icon-arrow-down.svg"}
              alt="arrow"
            />
          </button>
          <Menu isVisible={isVisible}>
            {statuses.map((status, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={checkedState[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span>{status}</span>
              </label>
            ))}
          </Menu>
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
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;

  span {
    color: rgba(12, 14, 22, 1);
  }

  & > button {
    display: flex;
    gap: 1rem;
    align-items: center;
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    padding: 0 2rem;
  }
`;

const Arrow = styled.img<StyledProps>`
  transform: ${({ isVisible }) =>
    isVisible ? "rotate(180deg)" : "rotate(0deg)"};
  transition: 0.3s transform;
`;

const Menu = styled.div<StyledProps>`
  position: absolute;
  top: 2.5rem;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  padding: 1.5rem;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-1rem)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: 0.3s all ease-in-out;

  label {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 0.8rem;
    width: max-content;

    cursor: pointer;

    &:hover input {
      border: 1px solid rgba(124, 93, 250, 1);
    }

    input {
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      width: 1rem;
      height: 1rem;
      background-color: rgba(223, 227, 250, 1);
      border-radius: 2px;
      display: grid;
      place-content: center;
    }

    input::before {
      content: "";
      width: 1rem;
      height: 1rem;
      background-color: rgba(124, 93, 250, 1);
      background-image: url(./assets/icon-check.svg);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      border-radius: 2px;
    }

    input:checked::before {
      transform: scale(1);
    }

    span {
      color: rgba(12, 14, 22, 1);
      font-weight: 700;
      font-size: 15px;
    }
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
