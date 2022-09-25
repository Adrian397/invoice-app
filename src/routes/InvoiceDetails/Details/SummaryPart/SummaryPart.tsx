import { Fragment, ReactElement } from "react";
import styled from "styled-components";
import { Invoice } from "../../../Root/Root.utils";

type Props = {
  invoice?: Invoice;
};

export const SummaryPart = ({ invoice }: Props): ReactElement => {
  const totalArr = invoice?.items.map((item) => item.total);

  const total = totalArr?.reduce(
    (prevValue, currValue) => prevValue + currValue
  );

  return (
    <Summary>
      <SumUp>
        <Items>
          <p>Item Name</p>
          <p>QTY.</p>
          <p>Price</p>
          <p>Total</p>
          {invoice?.items.map((item, index) => (
            <Fragment key={index}>
              <h3>{item.name}</h3>
              <span>{item.quantity}</span>
              <span>
                £{" "}
                {item.price.toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
              </span>
              <span>
                £{" "}
                {item.total.toLocaleString("en", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </Fragment>
          ))}
        </Items>
      </SumUp>
      <Amount>
        <span>Amount Due</span>
        <h1>
          £{" "}
          {total?.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </h1>
      </Amount>
    </Summary>
  );
};

const Summary = styled.div``;

const SumUp = styled.div`
  width: 100%;
  border-radius: 8px 8px 0 0;
  background-color: rgba(249, 250, 254, 1);
  padding: 2rem;
`;

const Amount = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 8px 8px;
  background-color: rgba(55, 59, 83, 1);
  padding: 1.5rem 2rem;

  span {
    color: white;
  }
  h1 {
    color: white;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  p:nth-of-type(1) {
    text-align: left;
  }

  p {
    margin-bottom: 2rem;
    text-align: right;
    color: rgba(126, 136, 195, 1);
    font-size: 1rem;
  }

  span {
    text-align: right;
    font-weight: bold;
  }

  span:nth-child(4n + 2) {
    color: rgba(126, 136, 195, 1);
  }

  span:nth-child(2n + 1) {
    color: rgba(126, 136, 195, 1);
  }

  h3 {
    margin-bottom: 2rem;
  }

  h3:last-of-type {
    margin-bottom: 0;
  }
`;
