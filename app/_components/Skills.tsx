import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { NextjsIcon } from "./icons/NextjsIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-6"> {/* Augmenté le gap */}
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        My favorite technologies are..
      </h2>
      <div className="flex flex-col md:flex-row gap-8"> 
        <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-1 gap-6"> 
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
            <ReactIcon 
              size={42} 
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            To build highly responsive websites for both desktop and mobile platforms.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-1 gap-6"> 
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
            <TailwindIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind CSS</h3>
          <p className="text-sm text-muted-foreground">
            For crafting highly customizable and scalable web designs with ease.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-1 gap-6"> 
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
            <NextjsIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Next.js</h3>
          <p className="text-sm text-muted-foreground">
            The ideal framework for seamless server-side rendering and full-stack web development.
          </p>
        </div>
      </div>
    </Section>
  );
};
