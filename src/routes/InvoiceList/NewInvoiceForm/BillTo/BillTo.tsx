import { ReactElement } from "react";
import styled from "styled-components";
import { NarrowInput } from "../../../../components/NarrowInput/NarrowInput";
import { WideInput } from "../../../../components/WideInput/WideInput";

type Props = {};

export const BillTo = (props: Props): ReactElement => {
  return (
    <Bill>
      <p>Bill To</p>

      <WideInput forId="clientNameTo" id="clientNameTo">
        Client's Name
      </WideInput>
      <WideInput
        forId="clientEmail"
        id="clientEmail"
        placeholder="e.g. email@example.com"
      >
        Client's Email
      </WideInput>
      <WideInput forId="streetAddressTo" id="streetAddressTo">
        Street Address
      </WideInput>

      <NarrowInputsWrapper>
        <NarrowInput forId="cityTo" id="cityTo">
          City
        </NarrowInput>
        <NarrowInput forId="postCodeTo" id="postCodeTo">
          Post Code
        </NarrowInput>
        <NarrowInput forId="countryTo" id="countryTo">
          Country
        </NarrowInput>
      </NarrowInputsWrapper>
    </Bill>
  );
};

const Bill = styled.div`
  width: 100%;

  p {
    color: rgba(124, 93, 250, 1);
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

const NarrowInputsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;
