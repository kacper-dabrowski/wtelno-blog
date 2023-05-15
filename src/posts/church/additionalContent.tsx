import { additionalPageContentService } from "../service/additionalContentService";
import { BankAccountDetailsList } from "./bankAccountDetails";
import { ChurchAdditionalContentDto } from "./dto";
import { HolyMasses } from "./holyMasses";
import { ImportantDatesList } from "./importantDates";
import { ParsonData } from "./parsonData";
import { generate } from "text-to-image";

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

  const { telephoneNumberImageUrl, email } = await getParsonDataImages({
    telephoneNumber: content.parson.telephoneNumber,
    email: content.parson.email,
  });

  return function ChurchContent() {
    return (
      <section>
        <ParsonData
          parson={content.parson}
          emailImageUrl={email}
          telephoneNumberImageUrl={telephoneNumberImageUrl}
        />
        <HolyMasses plans={content.massesPlans} />
        <BankAccountDetailsList {...content.bankAccount} />
        <ImportantDatesList dates={content.importantDates} />
      </section>
    );
  };
};

async function getParsonDataImages({
  telephoneNumber,
  email,
}: {
  telephoneNumber: string;
  email: string;
}) {
  const options = {
    maxWidth: 200,
    lineHeight: 16,
  };

  return {
    telephoneNumberImageUrl: await generate(telephoneNumber, options),
    email: await generate(email, options),
  };
}
