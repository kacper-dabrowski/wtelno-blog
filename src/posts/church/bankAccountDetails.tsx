import { ReactComponent } from "../../shared/types/component";
import { BankAccountDetails } from "./dto";

interface BankAccountDetailsProps extends BankAccountDetails {}

export const BankAccountDetailsList: ReactComponent<
  BankAccountDetailsProps
> = ({ name, title, accountNumber }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{title}</div>
      <div>{accountNumber}</div>
    </div>
  );
};
