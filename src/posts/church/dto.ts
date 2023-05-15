export interface Parson {
  email: string;
  name: string;
  telephoneNumber: string;
  title: string;
}

export interface BankAccountDetails {
  name: string;
  title: string;
  accountNumber: string;
}

export interface ImportantDate {
  title: string;
  description: string;
}

export interface MassesPlan {
  title: string;
  plan: string[];
}

export interface ChurchAdditionalContentDto {
  parson: Parson;
  bankAccount: BankAccountDetails;
  importantDates: ImportantDate[];
  massesPlans: MassesPlan[];
}

export const fakeDto = {
  parson: {
    email: "parson@email.pl",
    name: "Any Name",
    telephoneNumber: "+48 777 777 777",
    title: "Proboszcz Parafii",
  },
  bankAccount: {
    name: "Parafia Rzymsko-Katolicka p.w Św. Michała Archanioła, ul. Kościelna 2, 86-011 Wtelno",
    title:
      "Darowizna na cele kultu religijnego. Imię i nazwisko (np. Jan Kowalski)",
    accountNumber: "12 1234 1234 1234 1234 1234 1234",
  },
  importantDates: [
    { title: "Odpust", description: "29 września" },
    { title: "Data Erygowania Parafii", description: "1876 r." },
    { title: "Wieczysta Adoracja", description: "20 maja" },
  ],
  massesPlans: [
    { title: "Niedziela i święta", plan: ["8:00", "10:00", "11:31"] },
    { title: "Zniesione w święta", plan: ["8:00", "10:00", "11:32"] },
    { title: "Dni powszednie", plan: ["8:00", "10:00", "11:33"] },
  ],
};
