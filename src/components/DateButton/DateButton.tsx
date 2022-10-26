import styled from "styled-components";
import { imgBasePath } from "../../App.utils";

type Props = {};

export const DateButton = (props: Props) => {
  return (
    <InputWrapper>
      <label>Invoice Date</label>
      <button type="button">
        <span>21 Aug 2021</span>
        <img src={imgBasePath + "icon-calendar.svg"} alt="calendar-icon" />
      </button>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  label {
    color: rgba(126, 136, 195, 1);
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }
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
    cursor: pointer;

    &:focus-visible {
      outline-color: rgba(146, 119, 255, 1);
    }
  }
`;
