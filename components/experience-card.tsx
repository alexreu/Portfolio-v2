import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export const ExperienceCard = ({ keyFigures }) => {
    return (
        <Card
            className="relative order-3 col-span-1 flex flex-col gap-12 opacity-100 backdrop-blur-xl lg:order-none
                lg:col-span-3 lg:row-span-3 lg:gap-0"
        >
            <CardHeader>
                <h1 className="text-xl font-semibold leading-none tracking-tight text-primary">Experiences</h1>
            </CardHeader>
            <CardContent className="w-full flex-1 pb-12 lg:p-6">
                <ul className="flex h-full flex-col justify-center gap-12">
                    <li className="flex flex-col items-center">
                        <span className="text-5xl font-medium tracking-normal text-white">05</span>
                        <span className="uppercase text-muted-foreground">Ans experiences</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="text-5xl font-medium tracking-normal text-white">+30</span>
                        <span className="uppercase text-muted-foreground">Clients satisfaits</span>
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="text-5xl font-medium tracking-normal text-white">+20</span>
                        <span className="uppercase text-muted-foreground">Projets réalisés</span>
                    </li>
                </ul>
            </CardContent>
            <Sparkles
                className="absolute right-1 top-1 rotate-90 animate-pulse stroke-muted-foreground"
                size={58}
                strokeWidth={0.5}
            />
        </Card>
    );
};
