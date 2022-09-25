import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  forId: string;
  id: string;
  children: ReactNode;
};

export const NarrowInput = ({ forId, id, children }: Props): ReactElement => {
  return (
    <InputWrapper>
      <label htmlFor={forId}>{children}</label>
      <input type="text" id={id} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: rgba(126, 136, 195, 1);
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }
  input {
    width: 100%;
    padding-left: 1.25rem;
    border: 1px solid rgba(223, 227, 250, 1);
    border-radius: 4px;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: rgba(12, 14, 22, 1);

    &:focus-visible {
      outline-color: rgba(146, 119, 255, 1);
    }
  }
`;
