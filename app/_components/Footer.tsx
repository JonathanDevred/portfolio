import Image from "next/image";
import { Section } from "./Section";
import { format } from "date-fns";

export const Footer = () => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <Section className="flex items-center justify-between my-2">
      <p className="flex-grow">© RavenTech 2023-{currentYear}</p>
      <Image width={36} height={36} src="/RavenTech.png" alt="RavenTech's Logo" />
    </Section>
  );
};