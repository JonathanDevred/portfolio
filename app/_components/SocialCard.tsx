/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type SocialCardProps = {
    image: string;
    mediumImage: string;
    title: string;
    description: string;
    url: string;
};
export const SocialCard = (props: SocialCardProps) => {
    return (
        <a target="_blank" href={props.url}>
            <Card className="p-3 mb-2 hover:bg-accent/50 transition-colors flex items-center gap-4 group"> {/* Ajout de la classe 'group' */}
                <div className="relative">
                    <img src={props.image} alt={props.title} className="h-10 w-10" />
                    <img src={props.mediumImage} alt={props.title} className="h-4 w-4 absolute -bottom-2 -right-2 rounded-full" />
                </div>
                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-md font-semibold">
                            {props.title}
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {props.description}
                    </p>
                </div>
                <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 mr-4" />
            </Card>
        </a>
    );
};
