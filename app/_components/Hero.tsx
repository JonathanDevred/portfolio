/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { ReactIcon } from "./icons/ReactIcon";

const Code = ({ className, ...props}: ComponentPropsWithoutRef<"span"> ) => {
    return (
        <span className={cn("bg-accent/50 font-mono border border-accent p-1 text-primary-foreground rounded-sm", className)} {...props}/>
    )
}

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
        <div className="flex-[3] flex flex-col gap-2">
            <h2 className="font-caption text-primary text-4xl">Jonathan Devred</h2>
            <h3 className="font-caption text-primary text-2xl">Software Developer </h3>
            <p className="font-caption text-l">
            <span className="font-bold text-xl block ">Hello !</span> 
            <span className="block mb-2">I‘m a passionate 
            <Code className="inline-flex items-center gap-1 group">🇫🇷 French</Code>
             developer specialized with 
            <Code className="inline-flex items-center gap-1 group">
                <ReactIcon size={20} className="inline group-hover:animate-spin"
                style={{animationDuration: "4s"}}/>
                React
            </Code> based in 
            <Code className="inline-flex items-center gap-1 group">
            🇲🇽 Mexico</Code> 
             with a great interest in crafting  immersive digital experiences. 
             I thrive on bringing creative ideas to life through code.</span>
             My journey in the world of software development has equipped me 
             with a versatile skill set and a deep appreciation for clean, efficient code.
             I‘m ready to help you to achieve your business 
             <Code className="inline-flex items-center gap-1 group">🚀 goals</Code>.


            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img
            src="https://lh3.googleusercontent.com/a/ACg8ocK0sTI6SA1z7VBJWRdo-ADNvd4VoIunduvgWfhSwy_bpkU1tR1u=s576-c-no"
            className="h-auto w-full max-md:w-56"
            alt="Jonathan's Picture"
            />       
         </div>
    </Section> )
};