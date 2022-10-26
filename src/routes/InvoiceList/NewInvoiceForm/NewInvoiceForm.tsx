import { ReactElement } from "react";
import styled from "styled-components";
import { StyledProps } from "../../../App.utils";
import { DateButton } from "../../../components/DateButton/DateButton";
import FormFooterButton from "../../../components/FormFooterButton/FormFooterButton";
import { PaymentTermsButton } from "../../../components/PaymentTermsButton/PaymentTermsButton";
import { WideInput } from "../../../components/WideInput/WideInput";
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
        <div>
          <BillFrom />
          <BillTo />
          <Box>
            <div>
              <DateButton />
              <PaymentTermsButton />
            </div>
            <WideInput
              forId="Project Description"
              id="Project Description"
              placeholder="e.g. Graphic Design Service"
            >
              Project Description
            </WideInput>
          </Box>
          <ItemList>
            <h2>Item List</h2>
            <AddList>
              <div>
                <span>Item Name</span>
                <span>Qty.</span>
                <span>Price</span>
                <span>Total</span>
              </div>
            </AddList>
          </ItemList>
        </div>
        <Footer>
          <FormFooterButton
            bgColor="rgba(249, 250, 254, 1)"
            txtColor="rgba(126, 136, 195, 1)"
            type="button"
          >
            Discard
          </FormFooterButton>
          <div>
            <FormFooterButton
              bgColor="rgba(55, 59, 83, 1)"
              txtColor="rgba(136, 142, 176, 1)"
              type="button"
            >
              Save as Draft
            </FormFooterButton>
            <FormFooterButton
              bgColor="rgba(124, 93, 250, 1)"
              txtColor="white"
              type="submit"
            >
              Save & Send
            </FormFooterButton>
          </div>
        </Footer>
      </Form>
    </Wrapper>
  );
};

const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.1rem 2rem 0rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

const ItemList = styled.div`
  width: 100%;
  background-color: blue;

  h2 {
    color: rgba(119, 127, 152, 1);
    font-weight: bold;
    font-size: 1.125rem;
  }
`;

const AddList = styled.div``;

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
  display: flex;
  flex-direction: column;
  padding: 3.5rem 2rem 0rem 9.875rem;
  height: 100vh;
  width: 45rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0%)" : "translateX(-100%)"};
  border-radius: 0px 20px 20px 0px;
  background-color: rgba(255, 255, 255, 1);
  transition: transform 0.5s ease;

  input:hover {
    border: 1px solid rgba(146, 119, 255, 1);
  }

  button:not(footer button):hover {
    border: 1px solid rgba(146, 119, 255, 1);
  }

  & > h2 {
    margin-bottom: 2.5rem;
  }

  & > div {
    height: 100%;
    overflow-y: auto;
    padding-right: 1.5rem;
    scrollbar-color: rgba(223, 227, 250, 1) white;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      background-color: white;
      width: 0.6rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(223, 227, 250, 1);
      border-radius: 4px;
    }
  }
`;

const Box = styled.div`
  width: 100%;

  & > div:nth-of-type(1) {
    display: flex;
    width: 100%;
    gap: 24px;
  }
`;
