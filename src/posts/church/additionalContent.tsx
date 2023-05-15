import { additionalPageContentService } from "../service/additionalContentService";
import { BankAccountDetailsList } from "./bankAccountDetails";
import { ChurchAdditionalContentDto } from "./dto";
import { HolyMasses } from "./holyMasses";
import { ImportantDatesList } from "./importantDates";
import { ParsonData } from "./parsonData";

export const getChurchContentBeforePost: () => Promise<
  (() => JSX.Element) | undefined
> = async () => {
  const content =
    await additionalPageContentService.getFromJson<ChurchAdditionalContentDto>(
      "parafia"
    );

  if (!content) {
    return undefined;
  }

  return function ChurchContent() {
    return (
      <section>
        <ParsonData
          parson={content.parson}
          emailImageUrl={"/static/email.png"}
          telephoneNumberImageUrl={"/static/phoneNumber.png"}
        />
        <HolyMasses plans={content.massesPlans} />
        <BankAccountDetailsList {...content.bankAccount} />
        <ImportantDatesList dates={content.importantDates} />
      </section>
    );
  };
};
