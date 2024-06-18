/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SocialCard } from "./SocialCard";
import { WORKS, Works } from "./Works";
import { SIDE_PROJECTS, SideProject } from "./SideProjects";

export const Status = () => {
  return  (
  <Section className="flex max-lg:flex-col items-start gap-4">
    <div className="flex-[3]">
    <Card className=" w-full p-4 flex flex-col gap-2">
    <p className="text-l text-muted-foreground"> Side & Personal projects </p>
    <div className="flex flex-col gap-4">
        {SIDE_PROJECTS.map((project, index) => (
            <SideProject
            key={index}
            Logo={project.Logo}
            title={project.title}
            description={project.description}
            url="/" 
            />
                ))}

    </div>
    </Card>
    </div>

    <div className="flex-[2] h-full w-full gap-4">
        <Card className="p-4 w-full flex-1 mb-1 ">
        <p className="text-l text-muted-foreground">Experience</p>
        <div className="flex flex-col gap-4">
         {WORKS.map((work, index) => (
            <Works
            key={index}
            {...work}
            />
            ))}

        </div>
        </Card>
        <Card className="p-4 flex-1 w-full">
        <p className="text-l text-muted-foreground mb-2">Social Medias</p>
            <SocialCard image="https://lh3.googleusercontent.com/a/ACg8ocK0sTI6SA1z7VBJWRdo-ADNvd4VoIunduvgWfhSwy_bpkU1tR1u=s576-c-no" mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s" title="My LinkedIn" description="My Linkedin Profile" url="https://www.linkedin.com/in/jonathan-devred/" />
            <SocialCard image="https://lh3.googleusercontent.com/a/ACg8ocK0sTI6SA1z7VBJWRdo-ADNvd4VoIunduvgWfhSwy_bpkU1tR1u=s576-c-no" mediumImage="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" title="My GitHub " description="Wanna see my work ?" url="https://github.com/JonathanDevred/" />
        </Card>
    </div>
  </Section> )
};


