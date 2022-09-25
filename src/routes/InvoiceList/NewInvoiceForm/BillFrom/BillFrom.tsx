import { ReactElement } from "react";
import styled from "styled-components";
import { NarrowInput } from "../../../../components/NarrowInput/NarrowInput";
import { WideInput } from "../../../../components/WideInput/WideInput";

type Props = {};

export const BillFrom = (props: Props): ReactElement => {
  return (
    <Bill>
      <p>Bill From</p>
      <WideInput forId="clientNameFrom" id="clientNameFrom">
        Client's Name
      </WideInput>

      <NarrowInputs>
        <NarrowInput forId="cityFrom" id="cityFrom">
          City
        </NarrowInput>
        <NarrowInput forId="postCodeFrom" id="postCodeFrom">
          Post Code
        </NarrowInput>
        <NarrowInput forId="countryFrom" id="countryFrom">
          Country
        </NarrowInput>
      </NarrowInputs>
    </Bill>
  );
};

const Bill = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  p {
    color: rgba(124, 93, 250, 1);
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

const NarrowInputs = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;
