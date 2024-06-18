import { Badge } from "@/components/ui/badge";

export const WORKS: WorksProps[] = [
    {
        image: "https://media.licdn.com/dms/image/D4E0BAQE1cJVC91YxBA/company-logo_100_100/0/1709212696212/ecole_oclock_logo?e=1726704000&v=beta&t=EZfnm_7WmhTgeJoN5V-HVZP1RyRvF0FYjGDegpSlQKs",
        title: "Ecole O'Clock",
        role: "Supervisor JavaScript",
        date: "2020-2021",
        freelance: false,
    },
    {
        image: "https://media.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_200_200/0/1630637844948/apple_logo?e=1726704000&v=beta&t=2-9LiCIm6vthrfC7P0ugW22TdCaUwY2Xink7uFhHLzo",
        title: "Apple",
        role: "Operations Specialist",
        date: "2020-2021",
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
            <img
                src={props.image}
                alt={props.title}
                className="w-10 h-10 objects-contain rounded-md" />
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
