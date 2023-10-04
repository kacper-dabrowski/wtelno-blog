"use client";

import { Card } from "@/shared/components/card/card";
import styles from "./contact.module.scss";
import { getRendererFor, MainHeading } from "@/posts/renderers/text";
import { ContactInput } from "@/contact/components/input";
import { PrimaryButton } from "@/shared/components/button/button";

const Header = getRendererFor(MainHeading);

export const Contact = () => {
  return (
    <>
      <Header>Formularz kontaktowy</Header>
      <Card additionalClasses={styles.container}>
        <form
          className={styles.wrapper}
          method={"POST"}
          action={process.env.CONTACT_FORM_URL}
        >
          <ContactInput
            required
            name={"fromEmail"}
            label={"Email nadawcy"}
            title={"Email nadawcy"}
            type={"email"}
          />
          <ContactInput
            required
            name={"topic"}
            label={"Temat wiadomości"}
            title={"Temat wiadomości"}
          />
          <ContactInput
            required
            name={"content"}
            label={"Treść wiadomości"}
            title={"Treść wiadomości"}
            type={"textarea"}
          />
          <PrimaryButton
            buttonProps={{ onSubmit: () => {} }}
            additionalClasses={styles.button}
          >
            Wyślij
          </PrimaryButton>
        </form>
      </Card>
    </>
  );
};
