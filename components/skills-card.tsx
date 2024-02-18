import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export const SkillsCard = () => {
    return (
        <Card className="col-span-6 row-span-1 opacity-100 backdrop-blur-xl">
            <CardHeader>
                <h1 className="text-xl font-semibold leading-none tracking-tight text-primary">Skills & tools</h1>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <Carousel
                    id="skills"
                    opts={{
                        loop: true,
                    }}
                    plugins={[
                        AutoScroll({
                            speed: 3,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem className="basis-1/3">
                            <p className="rounded-lg border p-2 text-center text-sm text-muted">Developpement web</p>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <p className="rounded-lg border p-2 text-center text-sm text-muted">Seo & Referencement</p>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <p className="rounded-lg border p-2 text-center text-sm text-muted">Integration web</p>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <p className="rounded-lg border p-2 text-center text-sm text-muted">Responsive</p>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <p className="rounded-lg border p-2 text-center text-sm text-muted">Site vitrine</p>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
                {/*<Carousel*/}
                {/*    id="tools"*/}
                {/*    opts={{*/}
                {/*        loop: true,*/}
                {/*    }}*/}
                {/*    plugins={[*/}
                {/*        AutoScroll({*/}
                {/*            speed: 2,*/}
                {/*        }),*/}
                {/*    ]}*/}
                {/*>*/}
                {/*    <CarouselContent>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Github />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Gitlab />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Code2 />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Database />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Terminal />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Github />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Gitlab />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Github />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Gitlab />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Code2 />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Database />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*        <CarouselItem className="basis-1/12">*/}
                {/*            <span*/}
                {/*                className="inline-flex items-center justify-center rounded-lg border p-2 text-center*/}
                {/*                    text-sm text-muted"*/}
                {/*            >*/}
                {/*                <Terminal />*/}
                {/*            </span>*/}
                {/*        </CarouselItem>*/}
                {/*    </CarouselContent>*/}
                {/*</Carousel>*/}
            </CardContent>
        </Card>
    );
};
