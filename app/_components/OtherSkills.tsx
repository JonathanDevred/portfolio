import { Section } from "./Section";
import { GitIcon } from "./icons/GitIcon";
import { GrapQlIconIcon } from "./icons/GraphQlIcon";
import { JestIcon } from "./icons/JestIcon";
import { NodeJsIcon } from "./icons/NodeJsIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";

export const OtherSkills = () => {
  return (
    <Section className="flex flex-col items-start gap-6"> 
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        But I love to use too..
      </h2>
      <div className="flex flex-col md:flex-row gap-8"> 
        <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-1 gap-6"> 
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
          <TypeScriptIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">TypeScript</h3>
          <p className="text-sm text-muted-foreground">
          To bring type safety and scalability to JavaScript projects, making code more reliable and maintainable.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-1 gap-6"> 
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
            <NodeJsIcon size={42} />    
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Node.js</h3>
          <p className="text-sm text-muted-foreground">
          For creating fast and scalable server-side applications, perfect for building APIs and real-time applications.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-1 gap-6"> 
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
            <GrapQlIconIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">GraphQL</h3>
          <p className="text-sm text-muted-foreground">
          To optimize data fetching and make APIs more flexible, providing precise control over requested data.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-1 gap-6"> 
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
            <JestIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Jest</h3>
          <p className="text-sm text-muted-foreground">
          For ensuring code quality with unit and integration tests, building robust and maintainable applications.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-1 gap-6"> 
          <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
           <GitIcon size={42} /> 
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Git</h3>
          <p className="text-sm text-muted-foreground">
          To efficiently manage code changes and collaborate seamlessly within development teams.
          </p>
        </div>
      </div>
    </Section>
  );
};
