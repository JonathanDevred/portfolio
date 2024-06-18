import { Section } from "./Section";
import { SocialCard } from "./SocialCard";

export const Contact = () => {
  return (
    <Section>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Wanna work with me ? 
        </h2>
        <p className="text-sm text-muted-foreground mb-4">Let‘s chat together !</p>
        <div className=" flex gap-4 ">
        <SocialCard image="https://lh3.googleusercontent.com/a/ACg8ocK0sTI6SA1z7VBJWRdo-ADNvd4VoIunduvgWfhSwy_bpkU1tR1u=s576-c-no" 
        mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s" 
        title="My LinkedIn" description="My Linkedin Profile" url="https://www.linkedin.com/in/jonathan-devred/" />
        <SocialCard image="https://lh3.googleusercontent.com/a/ACg8ocK0sTI6SA1z7VBJWRdo-ADNvd4VoIunduvgWfhSwy_bpkU1tR1u=s576-c-no" 
        mediumImage="https://i.pinimg.com/736x/88/e1/4c/88e14cc7e7fcbb0e0e09de26cec86c61.jpg" 
        title="My Gmail" description="My Professionnal mail" url="mailto:devred.jonathan@gmail.com" />
         <SocialCard
        image="https://lh3.googleusercontent.com/a/ACg8ocK0sTI6SA1z7VBJWRdo-ADNvd4VoIunduvgWfhSwy_bpkU1tR1u=s576-c-no"
        mediumImage="data:image/jpeg;base64,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"
        title="WhatsApp Chat"
        description="Let's chat on WhatsApp"
        url="https://wa.me/33603268381?text=Hello%20Jonathan,%20I%20would%20like%20to%20connect%20with%20you."
        />
        </div>
    </Section>
  )
};