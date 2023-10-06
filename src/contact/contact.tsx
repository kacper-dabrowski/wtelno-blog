"use client";

import { ContactInput } from "@/contact/components/input";
import { getRendererFor, MainHeading } from "@/posts/renderers/text";
import { PrimaryButton } from "@/shared/components/button/button";
import { Card } from "@/shared/components/card/card";
import { config } from "../shared/config/config";
import styles from "./contact.module.scss";

const Header = getRendererFor(MainHeading);

export const ContactForm = () => {
  return (
    <>
      <Header>Formularz kontaktowy</Header>
      <Card additionalClasses={styles.container}>
        <form
          className={styles.wrapper}
          method={"POST"}
          action={config.contact.formUrl}
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
            textArea
          />
          <PrimaryButton
            additionalClasses={styles.button}
            buttonProps={{ "aria-label": "Wyślij" }}
          >
            Wyślij
          </PrimaryButton>
        </form>
      </Card>
    </>
  );
};
