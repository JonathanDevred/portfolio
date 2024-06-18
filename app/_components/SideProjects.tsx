import { Code, LucideIcon } from "lucide-react";
import Link from "next/link";

type SideProjectsProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};
export const SideProject = (props: SideProjectsProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16} />
            </span>
            <div>
                <p className="text-md font-semibold">
                    {props.title}
                </p>
                <p className="text-sm text-muted-foreground">
                    {props.description}
                </p>
            </div>
        </Link>
    );
};
export const SIDE_PROJECTS: SideProjectsProps[] = [
    {
        Logo: Code,
        title: "Test Title",
        description: "Test desc",
        url: "/"
    },
    {
        Logo: Code,
        title: "Test Title",
        description: "Test desc",
        url: "/"
    },
    {
        Logo: Code,
        title: "Test Title",
        description: "Test desc",
        url: "/"
    },
    {
        Logo: Code,
        title: "Test Title",
        description: "Test desc",
        url: "/"
    },
    {
        Logo: Code,
        title: "Test Title",
        description: "Test desc",
        url: "/"
    },
];
