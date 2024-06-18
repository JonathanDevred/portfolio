import Image from "next/image";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <Section className="flex items-center justify-between my-2">
      <p className="flex-grow">© RavenTech 2024</p>
      <Image width={36} height={36} src="/RavenTech.png" alt="RavenTech's Logo" />
    </Section>
  );
};
