export type Invoice = {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: string;
};

export type StyledProps = {
  status: string;
};

export const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
} as const;
