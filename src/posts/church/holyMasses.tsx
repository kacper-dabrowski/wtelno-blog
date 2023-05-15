import { ReactComponent } from "../../shared/types/component";
import { MassesPlan } from "./dto";
import styles from "./additionalContent.module.scss";
import { ParagraphText } from "../renderers/text";
interface HolyMassesListProps {
  plans: MassesPlan[];
}

export const HolyMasses: ReactComponent<HolyMassesListProps> = ({ plans }) => (
  <div className={styles.massesPlanList}>{renderPlans(plans)}</div>
);

function renderPlans(plans: MassesPlan[]) {
  return plans.map(({ title, plan }) => (
    <div key={title} className={styles.plan}>
      <ParagraphText additionalClasses={styles.title}>{title}</ParagraphText>
      {renderSinglePlan(plan)}
    </div>
  ));
}

function renderSinglePlan(plan: string[]) {
  return plan.map((mass) => <p key={mass}>{mass}</p>);
}
