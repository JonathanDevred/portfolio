import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const WORKS: WorksProps[] = [
    {
        image: "/ecole_oclock_logo.jpeg",
        title: "Ecole O'Clock",
        role: "Supervisor JavaScript",
        date: "2023-Now",
        freelance: true,
    },
    {
        image: "/apple_logo.jpeg",
        title: "Apple",
        role: "Operations Specialist",
        date: "2019-2023",
        freelance: false,
    },
    {
        image: "/apple_logo.jpeg",
        title: "Apple",
        role: "Sales Specialist",
        date: "2016-2019",
        freelance: false,
    },
];

type WorksProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    freelance: boolean;
};

export const Works = (props: WorksProps) => {
    return (
        <div className="inline-flex items-center gap-4 p-1 rounded">
            <Image
                src={props.image}
                alt={props.title}
                width={40} 
                height={40} 
                className="rounded-md" 
            />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-md font-semibold">
                        {props.title}
                    </p>
                </div>
                <p className="text-xs text-muted-foreground">
                    {props.role}
                </p>
            </div>
            <div>
                {props.freelance && <Badge variant="outline" className="mb-2 ml-3">freelance</Badge>}
                <p className="text-xs text-muted-foreground ml-5">
                    {props.date}
                </p>
            </div>
        </div>
    );
};
