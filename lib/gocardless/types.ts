export type GCLInstitution = {
  id: string;
  name: string;
  bic: string;
  transaction_total_days: string;
  countries: string[];
  logo: string;
  identification_codes: string[];
};

export type GCLAgreement = {
  id: string;
  created: string;
  accepted: string;
  institution_id: string;
  max_historical_days: number;
  access_valid_for_days: number;
  access_scope: ("balances" | "details" | "transactions")[];
};

export type GCLAccount = {
  id: string;
  created: string;
  last_accessed: string;
  institution_id: string;
  iban: string;
  status: "DISCOVERED" | "ERROR" | "EXPIRED" | "PROCESSING" | "READY" | "SUSPENDED";
  owner_name: string;
};

export type GCLAccountBalance = {
  balanceAmount: {
    amount: string;
    currency: string;
  };
  balanceType:
    | "closingAvailable"
    | "expected"
    | "interimAvailable"
    | "openingAvailable"
    | "closingBooked"
    | "forwardAvailable"
    | "information"
    | "interimBooked"
    | "nonInvoiced"
    | "openingBooked"
    | "previouslyClosedBooked";
  referenceDate: string;
};

export type GCLAccountDetails = {
  resourceId: string;
  iban: string;
  currency: string;
  ownerName: string;
  name: string;
  product: string;
  cashAccountType: string;
};

export type GCLAccountTransactions = {
  booked: {
    transactionId: string;
    debtorName: string;
    debtorAccount: {
      iban: string;
    };
    transactionAmount: {
      amount: string;
      currency: string;
    };
    bankTransactionCode: string;
    bookingDate: string;
    valueDate: string;
    remittanceInformationUnstructured: string;
  }[];
};
