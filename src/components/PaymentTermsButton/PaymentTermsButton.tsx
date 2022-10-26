import { ReactElement, useState } from "react";
import styled from "styled-components";
import { imgBasePath, StyledProps } from "../../App.utils";

type Props = {};

export const PaymentTermsButton = (props: Props): ReactElement => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Net 30 days");

  const handleDropdownValue = (value: string) => {
    setDropdownValue(value);
    setIsDropdownVisible(false);
  };

  return (
    <InputWrapper>
      <label htmlFor="paymentTerms">Payment Terms</label>

      <Menu isVisible={isDropdownVisible}>
        <button
          type="button"
          onClick={() => setIsDropdownVisible((prevState) => !prevState)}
        >
          <span>{dropdownValue}</span>
          <Arrow
            isVisible={isDropdownVisible}
            src={imgBasePath + "icon-arrow-down.svg"}
            alt="arrow"
          />
        </button>

        {isDropdownVisible && (
          <Dropdown isVisible={isDropdownVisible}>
            <li onClick={() => handleDropdownValue("Net 1 Day")}>Net 1 Day</li>
            <li onClick={() => handleDropdownValue("Net 7 Days")}>
              Net 7 Days
            </li>
            <li onClick={() => handleDropdownValue("Net 14 Days")}>
              Net 14 Days
            </li>
            <li onClick={() => handleDropdownValue("Net 30 Days")}>
              Net 30 Days
            </li>
          </Dropdown>
        )}
      </Menu>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 1.5rem;

  label {
    color: rgba(126, 136, 195, 1);
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }
`;

const Menu = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: rgba(12, 14, 22, 1);
  position: relative;

  button {
    background: none;
    border: 1px solid rgba(223, 227, 250, 1);
    border-radius: 4px;
    height: 3rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
    color: currentColor;
    font-weight: inherit;
    cursor: pointer;

    &:focus-visible {
      outline-color: rgba(146, 119, 255, 1);
    }
  }
`;

const Dropdown = styled.ul<StyledProps>`
  list-style: none;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 0.5rem;
  position: absolute;
  top: 120%;
  width: 100%;
  z-index: 1;
  background-color: white;

  li {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(223, 227, 250, 1);
    cursor: pointer;

    &:hover {
      color: rgba(124, 93, 250, 1);
    }
  }
`;

const Arrow = styled.img<StyledProps>`
  transform: ${({ isVisible }) =>
    isVisible ? "rotate(180deg)" : "rotate(0deg)"};
`;
