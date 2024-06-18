import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="bg-background">
            <Section className="relative flex items-center justify-between py-2">
            <div>
            <Image width={140} height={140} src="/RavenTech.png" alt="RavenTech's Logo" />
            <h1 className="text-lg font-bold text-primary-foreground">RavenTech.com</h1>
            </div>   
                <div className="flex-1"></div>

                <ul className="flex items-center gap-2">
                    <Link href={"https://github.com/JonathanDevred/"}>
                    <Button className="hover:bg-indigo-500" >
                        <GithubIcon size={16} className="text-foreground" />
                    </Button>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/jonathan-devred/"}>
                    <Button className="hover:bg-indigo-500" >
                        <LinkedInIcon size={16} className="text-foreground" />
                    </Button>
                    </Link>
                </ul>
            </Section>
        </header>
    );
};
