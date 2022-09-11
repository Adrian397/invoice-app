type AddressType = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type ItemsType = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type Invoice = {
  clientAddress: AddressType;
  clientEmail: string;
  clientName: string;
  createdAt: string;
  description: string;
  id: string;
  items: ItemsType;
  paymentDue: string;
  paymentTerms: number;
  senderAddress: AddressType;
  status: string;
  total: number;
};
