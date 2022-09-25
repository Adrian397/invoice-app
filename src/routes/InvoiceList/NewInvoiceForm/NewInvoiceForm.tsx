import { ReactElement } from "react";
import styled from "styled-components";
import { StyledProps } from "../../../App.utils";
import { BillFrom } from "./BillFrom/BillFrom";
import { BillTo } from "./BillTo/BillTo";

type Props = {
  isFormVisible: boolean;
  onFormVisibilityChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NewInvoiceForm = ({
  isFormVisible,
  onFormVisibilityChange,
}: Props): ReactElement => {
  return (
    <Wrapper
      isVisible={isFormVisible}
      onClick={() => onFormVisibilityChange(false)}
    >
      <Form isVisible={isFormVisible} onClick={(e) => e.stopPropagation()}>
        <h2>New Invoice</h2>
        <BillFrom />
        <BillTo />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  pointer-events: ${({ isVisible }) => (isVisible ? "all" : "none")};
  transition: all 120ms ease;
`;

const Form = styled.form<StyledProps>`
  padding-top: 3.5rem;
  padding-bottom: 2rem;
  padding-right: 3.5rem;
  height: 100vh;
  width: 719px;
  padding-left: 159px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0%)" : "translateX(-100%)"};
  border-radius: 0px 20px 20px 0px;
  background-color: rgba(255, 255, 255, 1);
  transition: transform 0.5s ease;

  & > h2 {
    margin-bottom: 2.5rem;
  }
`;
