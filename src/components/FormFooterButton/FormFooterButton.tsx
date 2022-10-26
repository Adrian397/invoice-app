import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { StyledProps } from "../../App.utils";

type Props = {
  children: ReactNode;
  bgColor: string;
  txtColor: string;
  type: "button" | "submit";
};

const FormFooterButton = ({
  children,
  bgColor,
  txtColor,
  type,
}: Props): ReactElement => {
  return (
    <Button type={type} txtColor={txtColor} bgColor={bgColor}>
      {children}
    </Button>
  );
};

const Button = styled.button<StyledProps>`
  padding: 1rem 1.5rem;
  border-radius: 24px;
  border: currentColor;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ txtColor }) => txtColor};
  cursor: pointer;
`;

export default FormFooterButton;
