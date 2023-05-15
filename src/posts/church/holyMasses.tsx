import { ReactComponent } from "../../shared/types/component";
import { MassesPlan } from "./dto";

interface HolyMassesListProps {
  plans: MassesPlan[];
}

export const HolyMasses: ReactComponent<HolyMassesListProps> = ({ plans }) => (
  <div>
    {plans.map(({ title, plan }) => (
      <div key={title}>
        <div>{title}</div>
        {plan.map((mass) => (
          <p key={mass}>{mass}</p>
        ))}
      </div>
    ))}
  </div>
);
